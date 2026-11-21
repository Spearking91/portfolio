"use client";

import { useState } from "react";

type WebsitePreviewProps = {
  url: string;
  title: string;
};

export function WebsitePreview({ url, title }: WebsitePreviewProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Microlink screenshot endpoint (returns an actual image directly via embed=screenshot.url)
  const previewSrc = `https://api.microlink.io/?url=${encodeURIComponent(
    url
  )}&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1280&viewport.height=800`;

  const displayHost = url.replace(/^https?:\/\//, "");

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="group block w-full overflow-hidden rounded-xl border border-base-300 bg-base-100 shadow-lg transition hover:border-primary"
    >
      {/* Browser mockup top bar */}
      <div className="flex items-center gap-2 border-b border-base-300 bg-base-200 px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-error/70" />
        <span className="h-3 w-3 rounded-full bg-warning/70" />
        <span className="h-3 w-3 rounded-full bg-success/70" />
        <span className="ml-2 truncate rounded bg-base-100 px-3 py-0.5 text-xs text-base-content/70">
          {displayHost}
        </span>
      </div>

      {/* Screenshot container */}
      <div className="relative aspect-[16/10] w-full bg-base-300">
        {isLoading && !hasError && (
          <div className="skeleton absolute inset-0 h-full w-full rounded-none" />
        )}

        {hasError ? (
          <div className="flex h-full flex-col items-center justify-center p-6 text-center text-sm text-base-content/70">
            <p className="font-medium">Live preview unavailable</p>
            <p className="mt-1 text-xs">Click to open {displayHost}</p>
          </div>
        ) : (
          <img
            src={previewSrc}
            alt={`Live preview of ${title}`}
            onLoad={() => setIsLoading(false)}
            onError={() => {
              setIsLoading(false);
              setHasError(true);
            }}
            className={`h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02] ${
              isLoading ? "opacity-0" : "opacity-100"
            }`}
          />
        )}
      </div>
    </a>
  );
}