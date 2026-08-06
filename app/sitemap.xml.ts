import { siteConfig } from '@/lib/siteConfig';
import { localities } from '@/lib/localities';

const pages = [
  { path: '/', priority: 1.0, changefreq: 'daily' },
  { path: '/builder-floors-faridabad', priority: 0.9, changefreq: 'weekly' },
  { path: '/localities', priority: 0.8, changefreq: 'weekly' },
  { path: '/about', priority: 0.7, changefreq: 'monthly' },
  { path: '/contact', priority: 0.7, changefreq: 'monthly' },
  { path: '/privacy-policy', priority: 0.5, changefreq: 'yearly' },
  { path: '/cities', priority: 0.8, changefreq: 'weekly' },
  { path: '/cities/gurgaon', priority: 0.7, changefreq: 'weekly' },
  { path: '/cities/faridabad', priority: 0.7, changefreq: 'weekly' },
  { path: '/cities/mumbai', priority: 0.7, changefreq: 'weekly' },
  { path: '/cities/noida', priority: 0.7, changefreq: 'weekly' },
  { path: '/projects', priority: 0.8, changefreq: 'weekly' },
  { path: '/projects/ongoing', priority: 0.7, changefreq: 'weekly' },
  { path: '/projects/completed', priority: 0.7, changefreq: 'weekly' }
];

export default function Sitemap() {
  const baseUrl = siteConfig.url;
  const modified = new Date().toISOString().split('T')[0];
  const localityRoutes = localities.map((locality) => ({ path: `/localities/${locality.slug}`, priority: 0.6, changefreq: 'weekly' }));
  const routes = [...pages, ...localityRoutes]
    .map((page) => {
      return `<url><loc>${baseUrl}${page.path}</loc><lastmod>${modified}</lastmod><changefreq>${page.changefreq}</changefreq><priority>${page.priority.toFixed(1)}</priority></url>`;
    })
    .join('');

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes}
</urlset>
`, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}
