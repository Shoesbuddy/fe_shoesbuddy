import type { MetadataRoute } from "next";

const siteUrl = "https://shoosbuddy.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/gallery`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
