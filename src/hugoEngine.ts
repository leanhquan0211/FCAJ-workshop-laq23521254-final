import fs from 'node:fs';
import path from 'node:path';
import { marked } from 'marked';

export type LanguageCode = 'en' | 'vi';

export interface PageFrontmatter {
  title: string;
  date?: string;
  weight: number;
  chapter: boolean;
  pre: string;
  post: string;
  hidden: boolean;
  alwaysopen: boolean;
  menuTitle?: string;
  disableToc?: boolean;
  tags: string[];
}

export interface TocHeading {
  level: number;
  id: string;
  text: string;
}

export interface PageNode {
  id: string;
  lang: LanguageCode;
  relPermalink: string;
  canonicalKey: string;
  frontmatter: PageFrontmatter;
  rawMarkdown: string;
  htmlContent: string;
  plainText: string;
  headings: TocHeading[];
  isHome: boolean;
  children: PageNode[];
  parent?: PageNode;
}

export interface SiteData {
  enRoot: PageNode;
  viRoot: PageNode;
  pagesByLang: Record<LanguageCode, Map<string, PageNode>>;
  flatListByLang: Record<LanguageCode, PageNode[]>;
}

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/<[^>]*>/g, '')
    .replace(/[^\p{L}\p{N}\s-]/gu, '')
    .trim()
    .replace(/\s+/g, '-');
}

export function parseFrontmatter(raw: string): { frontmatter: PageFrontmatter; body: string } {
  const defaultFm: PageFrontmatter = {
    title: 'Untitled',
    weight: 999,
    chapter: false,
    pre: '',
    post: '',
    hidden: false,
    alwaysopen: false,
    tags: [],
  };

  const trimmed = raw.replace(/^\uFEFF/, '');
  const match = trimmed.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) {
    return { frontmatter: defaultFm, body: trimmed };
  }

  const fmBlock = match[1];
  const body = match[2];
  const fm: PageFrontmatter = { ...defaultFm };

  for (const line of fmBlock.split(/\r?\n/)) {
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim();
    let val = line.slice(colonIdx + 1).trim();

    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }

    switch (key) {
      case 'title':
        fm.title = val;
        break;
      case 'menuTitle':
      case 'linkTitle':
        fm.menuTitle = val;
        break;
      case 'date':
        fm.date = val;
        break;
      case 'weight': {
        const parsed = parseInt(val, 10);
        if (!Number.isNaN(parsed)) fm.weight = parsed;
        break;
      }
      case 'chapter':
        fm.chapter = val.toLowerCase() === 'true';
        break;
      case 'hidden':
        fm.hidden = val.toLowerCase() === 'true';
        break;
      case 'alwaysopen':
        fm.alwaysopen = val.toLowerCase() === 'true';
        break;
      case 'disableToc':
        fm.disableToc = val.toLowerCase() === 'true';
        break;
      case 'pre':
        fm.pre = val;
        break;
      case 'post':
        fm.post = val;
        break;
      default:
        break;
    }
  }

  return { frontmatter: fm, body };
}

export function renderShortcodes(markdown: string): string {
  let processed = markdown;

  // Notice shortcode: {{% notice warning|info|note|tip %}} ... {{% /notice %}}
  processed = processed.replace(
    /\{\{[<%]\s*notice\s+([a-zA-Z0-9_-]+)(?:\s+"([^"]*)")?\s*[>%]\}\}([\s\S]*?)\{\{[<%]\s*\/notice\s*[>%]\}\}/g,
    (_match, noticeType: string, noticeId: string | undefined, inner: string) => {
      const innerHtml = marked.parse(inner.trim(), { async: false }) as string;
      const idAttr = noticeId ? ` id="${noticeId}"` : '';
      return `\n<div class="notices ${noticeType}"${idAttr}>\n${innerHtml}\n</div>\n`;
    }
  );

  // Expand shortcode: {{% expand "Title" %}} ... {{% /expand %}}
  processed = processed.replace(
    /\{\{[<%]\s*expand(?:\s+"([^"]*)")?\s*[>%]\}\}([\s\S]*?)\{\{[<%]\s*\/expand\s*[>%]\}\}/g,
    (_match, expandTitle: string | undefined, inner: string) => {
      const title = expandTitle || 'Expand me...';
      const innerHtml = marked.parse(inner.trim(), { async: false }) as string;
      return `\n<div class="expand">
  <div class="expand-label" style="cursor: pointer;" onclick="$h = $(this);$h.next('div').slideToggle(100,function () {$h.children('i').attr('class',function () {return $h.next('div').is(':visible') ? 'fas fa-chevron-down' : 'fas fa-chevron-right';});});">
    <i style="font-size:x-small;" class="fas fa-chevron-right"></i>
    <span>${title}</span>
  </div>
  <div class="expand-content" style="display: none;">${innerHtml}</div>
</div>\n`;
    }
  );

  // Button shortcode: {{% button href="..." icon="..." %}}Label{{% /button %}}
  processed = processed.replace(
    /\{\{[<%]\s*button\s+([^>%]+)[>%]\}\}([\s\S]*?)\{\{[<%]\s*\/button\s*[>%]\}\}/g,
    (_match, attrs: string, inner: string) => {
      const hrefMatch = attrs.match(/href="([^"]+)"/);
      const iconMatch = attrs.match(/icon="([^"]+)"/);
      const href = hrefMatch ? hrefMatch[1] : '#';
      const icon = iconMatch ? `<i class="${iconMatch[1]}"></i> ` : '';
      return `<a class="btn btn-default" href="${href}">${icon}${inner.trim()}</a>`;
    }
  );

  // Tabs shortcode: {{< tabs >}} ... {{< /tabs >}}
  let tabCounter = 0;
  processed = processed.replace(
    /\{\{[<%]\s*tabs(?:\s+[^>%]*)?[>%]\}\}([\s\S]*?)\{\{[<%]\s*\/tabs\s*[>%]\}\}/g,
    (_match, inner: string) => {
      tabCounter += 1;
      const tabSetId = `tabset-${tabCounter}`;
      const tabs: { name: string; content: string }[] = [];
      const tabRegex = /\{\{[<%]\s*tab\s+([^>%]+)[>%]\}\}([\s\S]*?)\{\{[<%]\s*\/tab\s*[>%]\}\}/g;
      let tm: RegExpExecArray | null;
      while ((tm = tabRegex.exec(inner)) !== null) {
        const nameMatch = tm[1].match(/name="([^"]+)"/);
        const name = nameMatch ? nameMatch[1].trim() : `Tab ${tabs.length + 1}`;
        const tabContent = marked.parse(tm[2].trim(), { async: false }) as string;
        tabs.push({ name, content: tabContent });
      }
      if (tabs.length === 0) return inner;
      const navItems = tabs
        .map((t, idx) => `<li><a href="#${tabSetId}-${idx}">${t.name}</a></li>`)
        .join('\n');
      const panels = tabs
        .map((t, idx) => `<div id="${tabSetId}-${idx}">${t.content}</div>`)
        .join('\n');
      return `\n<div id="${tabSetId}"><ul>${navItems}</ul>${panels}</div>\n`;
    }
  );

  // Strip any remaining unknown shortcodes gracefully
  processed = processed.replace(/\{\{[<%]\s*children[^>%]*[>%]\}\}/g, '');

  return processed;
}

export function renderMarkdownWithHeadings(
  rawMarkdown: string,
  baseRelPermalink: string
): { htmlContent: string; headings: TocHeading[]; plainText: string } {
  const withShortcodes = renderShortcodes(rawMarkdown);
  const headings: TocHeading[] = [];
  const rawHtml = marked.parse(withShortcodes, { async: false }) as string;

  // Inject heading IDs and collect TOC headings
  const htmlWithHeadingIds = rawHtml.replace(
    /<h([1-6])(?:\s+id="([^"]*)")?>([\s\S]*?)<\/h\1>/gi,
    (_match, levelStr: string, existingId: string | undefined, innerHtml: string) => {
      const level = parseInt(levelStr, 10);
      const cleanText = innerHtml.replace(/<[^>]*>/g, '').trim();
      const id = existingId || slugifyHeading(cleanText) || `heading-${headings.length + 1}`;
      if (level >= 2 && level <= 4) {
        headings.push({ level, id, text: cleanText });
      }
      return `<h${level} id="${id}">${innerHtml}</h${level}>`;
    }
  );

  // Normalize relative links so they resolve from baseRelPermalink
  const normalizedBase = baseRelPermalink.endsWith('/') ? baseRelPermalink : `${baseRelPermalink}/`;
  const htmlContent = htmlWithHeadingIds.replace(
    /<a\s+([^>]*?)href="([^"]+)"([^>]*)>/gi,
    (fullMatch, before: string, href: string, after: string) => {
      if (
        href.startsWith('http://') ||
        href.startsWith('https://') ||
        href.startsWith('/') ||
        href.startsWith('#') ||
        href.startsWith('mailto:') ||
        href.startsWith('javascript:')
      ) {
        return fullMatch;
      }
      const cleanHref = href.replace(/^\.\//, '');
      if (cleanHref.startsWith('../')) {
        const resolved = path.posix.normalize(path.posix.join(normalizedBase, cleanHref));
        return `<a ${before}href="${resolved}"${after}>`;
      }
      const target = `${normalizedBase}${cleanHref}`;
      const hasFileExt = /\.(pdf|png|jpe?g|gif|svg|webp|mp4|mp3|zip|html?|json|xml|txt|csv)$/i.test(target);
      const finalHref = target.endsWith('/') || hasFileExt ? target : `${target}/`;
      return `<a ${before}href="${finalHref}"${after}>`;
    }
  );

  const plainText = htmlContent
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  return { htmlContent, headings, plainText };
}

export function normalizeLookupKey(urlPath: string): string {
  let cleaned = decodeURIComponent(urlPath.split('?')[0].split('#')[0]).trim();
  cleaned = cleaned.replace(/^\/+|\/+$/g, '').toLowerCase();
  return cleaned;
}

function buildLanguageTree(contentDir: string, lang: LanguageCode): {
  root: PageNode;
  pageMap: Map<string, PageNode>;
  flatList: PageNode[];
} {
  const langPrefix = lang === 'vi' ? '/vi' : '';
  const fileName = lang === 'vi' ? '_index.vi.md' : '_index.md';
  const fallbackFileName = '_index.md';

  function scanDir(dirPath: string, relativeSegments: string[], parent?: PageNode): PageNode | null {
    let mdPath = path.join(dirPath, fileName);
    if (!fs.existsSync(mdPath)) {
      mdPath = path.join(dirPath, fallbackFileName);
      if (!fs.existsSync(mdPath)) {
        return null;
      }
    }

    const rawFile = fs.readFileSync(mdPath, 'utf-8');
    const { frontmatter, body } = parseFrontmatter(rawFile);
    const isHome = relativeSegments.length === 0;
    const relPathPart = relativeSegments.join('/');
    const relPermalink = isHome
      ? `${langPrefix}/`
      : `${langPrefix}/${relPathPart}/`;
    const canonicalKey = normalizeLookupKey(relPermalink);

    const { htmlContent, headings, plainText } = renderMarkdownWithHeadings(body, relPermalink);

    const node: PageNode = {
      id: canonicalKey || (lang === 'vi' ? 'vi-home' : 'en-home'),
      lang,
      relPermalink,
      canonicalKey,
      frontmatter,
      rawMarkdown: body,
      htmlContent,
      plainText,
      headings,
      isHome,
      children: [],
      parent,
    };

    const entries = fs.readdirSync(dirPath, { withFileTypes: true });
    const subDirs = entries.filter((e) => e.isDirectory() && !e.name.startsWith('.'));

    for (const sub of subDirs) {
      const childNode = scanDir(
        path.join(dirPath, sub.name),
        [...relativeSegments, sub.name],
        node
      );
      if (childNode) {
        node.children.push(childNode);
      }
    }

    node.children.sort((a, b) => {
      if (a.frontmatter.weight !== b.frontmatter.weight) {
        return a.frontmatter.weight - b.frontmatter.weight;
      }
      return a.relPermalink.localeCompare(b.relPermalink, undefined, { numeric: true });
    });

    return node;
  }

  const root = scanDir(contentDir, []);
  if (!root) {
    throw new Error(`Failed to load root content from ${contentDir} for language ${lang}`);
  }

  const pageMap = new Map<string, PageNode>();
  const flatList: PageNode[] = [];

  function registerNodes(node: PageNode) {
    pageMap.set(node.canonicalKey, node);

    // Also register fuzzy alias if a folder segment starts with parent prefix (e.g. 5.3.1-create-gwe -> 3.1-create-gwe)
    const segments = node.canonicalKey.split('/').filter(Boolean);
    if (segments.length >= 2) {
      const lastSeg = segments[segments.length - 1];
      const dotTrimmed = lastSeg.replace(/^\d+\./, '');
      if (dotTrimmed !== lastSeg) {
        const aliasKey = [...segments.slice(0, -1), dotTrimmed].join('/');
        if (!pageMap.has(aliasKey)) {
          pageMap.set(aliasKey, node);
        }
      }
    }

    if (!node.frontmatter.hidden) {
      flatList.push(node);
    }
    for (const child of node.children) {
      registerNodes(child);
    }
  }

  registerNodes(root);

  return { root, pageMap, flatList };
}

export function loadSiteData(contentDir: string): SiteData {
  const enData = buildLanguageTree(contentDir, 'en');
  const viData = buildLanguageTree(contentDir, 'vi');

  return {
    enRoot: enData.root,
    viRoot: viData.root,
    pagesByLang: {
      en: enData.pageMap,
      vi: viData.pageMap,
    },
    flatListByLang: {
      en: enData.flatList,
      vi: viData.flatList,
    },
  };
}

export function findPageByRequestPath(site: SiteData, reqPath: string): PageNode | null {
  const key = normalizeLookupKey(reqPath);
  const isVi = key === 'vi' || key.startsWith('vi/');
  const lang: LanguageCode = isVi ? 'vi' : 'en';
  const map = site.pagesByLang[lang];

  if (key === '' && lang === 'en') {
    return site.enRoot;
  }
  if (key === 'vi' && lang === 'vi') {
    return site.viRoot;
  }

  return map.get(key) ?? null;
}

export function getAncestors(page: PageNode): PageNode[] {
  const chain: PageNode[] = [];
  let curr = page.parent;
  while (curr) {
    chain.unshift(curr);
    curr = curr.parent;
  }
  return chain;
}

export function isAncestorOf(candidate: PageNode, target: PageNode): boolean {
  let curr = target.parent;
  while (curr) {
    if (curr.id === candidate.id) return true;
    curr = curr.parent;
  }
  return false;
}

export function getPrevNextPages(
  site: SiteData,
  page: PageNode
): { prev?: PageNode; next?: PageNode } {
  const list = site.flatListByLang[page.lang];
  const idx = list.findIndex((p) => p.id === page.id);
  if (idx === -1) return {};
  return {
    prev: idx > 0 ? list[idx - 1] : undefined,
    next: idx < list.length - 1 ? list[idx + 1] : undefined,
  };
}

export function getTranslatedPermalink(site: SiteData, page: PageNode, targetLang: LanguageCode): string {
  if (page.lang === targetLang) return page.relPermalink;
  const rawRelative = page.canonicalKey.replace(/^vi\/?/, '');
  const targetKey = targetLang === 'vi' ? (rawRelative ? `vi/${rawRelative}` : 'vi') : rawRelative;
  const targetPage = site.pagesByLang[targetLang].get(targetKey);
  if (targetPage) return targetPage.relPermalink;
  return targetLang === 'vi' ? '/vi/' : '/';
}

export function buildSearchIndex(site: SiteData, lang: LanguageCode): Array<{
  uri: string;
  title: string;
  tags: string[];
  description: string;
  content: string;
}> {
  return site.flatListByLang[lang].map((p) => ({
    uri: p.relPermalink,
    title: p.frontmatter.title,
    tags: p.frontmatter.tags,
    description: '',
    content: p.plainText,
  }));
}
