export function getWebsitePreviewUrl(liveUrl: string) {
    const params = new URLSearchParams({
      url: liveUrl,
      screenshot: "true",
      meta: "false",
      embed: "screenshot.url",
      "viewport.width": "1280",
      "viewport.height": "800",
      "viewport.deviceScaleFactor": "1",
    });
  
    return `https://api.microlink.io/?${params.toString()}`;
  }