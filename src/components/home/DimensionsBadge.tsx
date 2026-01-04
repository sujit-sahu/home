'use client';

import { useEffect, useRef } from 'react';

interface DimensionsBadgeProps {
  doi: string;
}

export default function DimensionsBadge({ doi }: DimensionsBadgeProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Reset and inject the span that Dimensions expects
    container.innerHTML = '';
    const span = document.createElement('span');
    span.className = '__dimensions_badge_embed__';
    span.setAttribute('data-doi', doi);
    container.appendChild(span);

    // Ensure the Dimensions script is loaded once
    const existingScript = document.querySelector<HTMLScriptElement>('script[data-dimensions-badge-script="true"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://badge.dimensions.ai/badge.js';
      script.async = true;
      script.charset = 'utf-8';
      script.setAttribute('data-dimensions-badge-script', 'true');
      document.body.appendChild(script);
    }
  }, [doi]);

  // suppressHydrationWarning avoids React complaining that the client-only
  // content inside this div doesn't match the empty server HTML.
  return <div ref={containerRef} suppressHydrationWarning className="mt-4" />;
}
