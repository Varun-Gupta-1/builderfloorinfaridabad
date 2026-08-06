export default function Head() {
  return (
    <>
      <link
        rel="preload"
        href="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80&fm=avif"
        as="image"
        type="image/avif"
      />
      <link
        rel="preload"
        href="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80&fm=webp"
        as="image"
        type="image/webp"
      />
      <style>{`html { scroll-behavior: smooth; }
        body { margin: 0; min-height: 100vh; background: #ffffff; color: #111827; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
        header { position: fixed; inset: 0 0 auto 0; z-index: 50; }
        .hero-background { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
        .hero-panel { position: relative; z-index: 10; }
        .container { width: min(1100px, calc(100% - 2rem)); margin: 0 auto; }
        a { color: inherit; text-decoration: none; }
      `}</style>
    </>
  );
}
