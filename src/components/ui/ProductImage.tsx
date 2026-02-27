"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductImageProps {
  src: string;
  fallbackSrc: string;
  alt: string;
  fill?: boolean;
  className?: string;
  sizes?: string;
  width?: number;
  height?: number;
}

/**
 * Shows product image (local from /products/ or Instagram). Falls back to placeholder if local file is missing.
 */
export function ProductImage({
  src,
  fallbackSrc,
  alt,
  fill,
  className,
  sizes,
  width,
  height,
}: ProductImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const isLocal = currentSrc.startsWith("/");
  const isRemote = currentSrc.startsWith("http://") || currentSrc.startsWith("https://");

  return (
    <Image
      src={currentSrc}
      alt={alt}
      fill={fill}
      width={width}
      height={height}
      className={className}
      sizes={sizes}
      onError={() => {
        if (fallbackSrc && currentSrc !== fallbackSrc) setCurrentSrc(fallbackSrc);
      }}
      unoptimized={isRemote}
    />
  );
}
