import path from 'node:path';
import express from 'express';
import {
  buildSearchIndex,
  findPageByRequestPath,
  loadSiteData,
} from './src/hugoEngine';
import { render404Html, renderPageHtml } from './src/htmlRenderer';

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const rootDir = process.cwd();
const contentDir = path.join(rootDir, 'content');

const siteData = loadSiteData(contentDir);

// Serve static files from /static first, then fallback to /themes/hugo-theme-learn/static
app.use(express.static(path.join(rootDir, 'static')));
app.use(express.static(path.join(rootDir, 'themes', 'hugo-theme-learn', 'static')));

// Search JSON endpoints for Lunr.js search
app.get('/index.json', (_req, res) => {
  res.json(buildSearchIndex(siteData, 'en'));
});

app.get('/vi/index.json', (_req, res) => {
  res.json(buildSearchIndex(siteData, 'vi'));
});

// Content route handler
app.get('*', (req, res) => {
  const page = findPageByRequestPath(siteData, req.path);
  if (!page) {
    res.status(404).type('html').send(render404Html());
    return;
  }

  const html = renderPageHtml(siteData, page);
  res.status(200).type('html').send(html);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Hugo Workshop Server running on http://0.0.0.0:${PORT}`);
});
