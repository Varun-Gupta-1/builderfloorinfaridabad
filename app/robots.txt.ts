import { NextResponse } from 'next/server';
import { siteConfig } from '@/lib/siteConfig';

export function GET() {
  const content = `User-agent: *
Allow: /

Sitemap: ${siteConfig.url}/sitemap.xml
`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain'
    }
  });
}
