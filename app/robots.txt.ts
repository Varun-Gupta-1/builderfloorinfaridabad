import { NextResponse } from 'next/server';

export function GET() {
  const content = `User-agent: *
Allow: /

Sitemap: ${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://builderfloorinfaridabad.com'}/sitemap.xml
`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain'
    }
  });
}
