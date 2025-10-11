import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/services",
    "/appointments",
    "/appointments/online",
    "/appointments/offline",
    "/doctors",
    "/contact",
    "/faqs",
    "/privacy",
    "/terms",
    "/testimonials",
    "/resources",
    "/treatments/erectile-dysfunction",
    "/treatments/hiv-treatment",
    "/treatments/low-libido",
    "/treatments/performance-anxiety",
    "/treatments/premature-ejaculation",
    "/treatments/prep-pep",
    "/treatments/sti-testing",
    "/services/vip-consultation",
    "/sexual-treatment-in-delhi",
    "/vlog",
  ];

  const now = new Date();

  return routes.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}
