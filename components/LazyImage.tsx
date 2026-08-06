type LazyImageProps = {
  src: string;
  alt: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  priority?: boolean;
  webpSrc?: string;
  avifSrc?: string;
};

export default function LazyImage({
  src,
  alt,
  className,
  width,
  height,
  priority = false,
  webpSrc,
  avifSrc
}: LazyImageProps) {
  return (
    <picture>
      {avifSrc ? <source type="image/avif" srcSet={avifSrc} /> : null}
      {webpSrc ? <source type="image/webp" srcSet={webpSrc} /> : null}
      <img
        src={src}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'low'}
      />
    </picture>
  );
}
