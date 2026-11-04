import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import {
  parseFrontmatter,
  renderShortcodes,
  renderMarkdownWithHeadings,
  loadSiteData,
  findPageByRequestPath,
  getPrevNextPages,
  getTranslatedPermalink,
  buildSearchIndex,
} from './hugoEngine';
import { renderPageHtml } from './htmlRenderer';

test('parseFrontmatter parses YAML frontmatter fields accurately', () => {
  const raw = `---
title : "Access S3 from VPC"
date : 2024-01-01
weight : 3
chapter : false
pre : " <b> 5.3. </b> "
---
Hello World`;
  const { frontmatter, body } = parseFrontmatter(raw);
  assert.equal(frontmatter.title, 'Access S3 from VPC');
  assert.equal(frontmatter.weight, 3);
  assert.equal(frontmatter.chapter, false);
  assert.equal(frontmatter.pre, ' <b> 5.3. </b> ');
  assert.equal(body.trim(), 'Hello World');
});

test('renderShortcodes transforms notice shortcodes into notices div', () => {
  const md = `{{% notice warning %}}
⚠️ **Note:** Do not copy verbatim.
{{% /notice %}}`;
  const out = renderShortcodes(md);
  assert.ok(out.includes('<div class="notices warning">'));
  assert.ok(out.includes('<strong>Note:</strong>'));
});

test('renderMarkdownWithHeadings resolves relative links against baseRelPermalink', () => {
  const md = `### Section Heading\nCheck [Week 1](1.1-week1/) and [Overview](5.1-Workshop-overview).`;
  const { htmlContent, headings } = renderMarkdownWithHeadings(md, '/1-Worklog/');
  assert.equal(headings.length, 1);
  assert.equal(headings[0].id, 'section-heading');
  assert.ok(htmlContent.includes('href="/1-Worklog/1.1-week1/"'));
  assert.ok(htmlContent.includes('href="/1-Worklog/5.1-Workshop-overview/"'));
});

test('loadSiteData loads English and Vietnamese trees, resolves routes, and builds search index', () => {
  const contentDir = path.join(process.cwd(), 'content');
  const site = loadSiteData(contentDir);

  const enHome = findPageByRequestPath(site, '/');
  assert.ok(enHome);
  assert.equal(enHome.frontmatter.title, 'Internship Report');
  assert.equal(enHome.children.length, 7);

  const viHome = findPageByRequestPath(site, '/vi/');
  assert.ok(viHome);
  assert.equal(viHome.frontmatter.title, 'Báo cáo thực tập');

  // Verify case-insensitive and fuzzy child lookup (e.g. 3.1-create-gwe under 5.3-S3-vpc)
  const gwePage = findPageByRequestPath(site, '/5-Workshop/5.3-S3-vpc/3.1-create-gwe/');
  assert.ok(gwePage);
  assert.equal(gwePage.frontmatter.title, 'Create a gateway endpoint');

  // Verify prev/next navigation
  const { next } = getPrevNextPages(site, enHome);
  assert.ok(next);
  assert.equal(next.frontmatter.title, 'Worklog');

  // Verify translation switching
  const viWorkshopUrl = getTranslatedPermalink(site, findPageByRequestPath(site, '/5-Workshop/')!, 'vi');
  assert.equal(viWorkshopUrl, '/vi/5-Workshop/');

  // Verify search index
  const enSearch = buildSearchIndex(site, 'en');
  assert.ok(enSearch.length > 20);

  // Verify full HTML rendering
  const html = renderPageHtml(site, enHome);
  assert.ok(html.includes('Lê Anh Quân'));
  assert.ok(html.includes('/css/theme-workshop.css'));

  // Verify Week 6 EN and VI worklogs match README_WORKLOG.md requirements
  const enWeek6 = findPageByRequestPath(site, '/1-Worklog/1.6-Week6/');
  const viWeek6 = findPageByRequestPath(site, '/vi/1-Worklog/1.6-Week6/');
  assert.ok(enWeek6);
  assert.ok(viWeek6);
  assert.equal(
    enWeek6.frontmatter.title,
    'Week 6: AWS Infrastructure Deployment with Terraform and Resource Teardown'
  );
  assert.equal(
    viWeek6.frontmatter.title,
    'Tuần 6: Triển khai hạ tầng AWS bằng Terraform và thu hồi tài nguyên'
  );
  for (const page of [enWeek6, viWeek6]) {
    assert.ok(!page.rawMarkdown.includes('"'), 'Worklog body must not contain quotation marks');
    assert.ok(!page.rawMarkdown.includes('notice warning'), 'Worklog must not contain warning shortcode');
    assert.ok(page.rawMarkdown.includes('02/11/2026'));
    assert.ok(page.rawMarkdown.includes('03/11/2026'));
    assert.ok(page.rawMarkdown.includes('04/11/2026'));
  }
});
