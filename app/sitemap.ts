import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://6sigma.in"

  // Product categories for dynamic routes
  const productCategories = [
    "high-component-capacitors",
    "dc-capacitors",
    "high-voltage-dc-capacitors",
    "tantalum-rods",
    "tantalum-sheets",
    "titanium-sheets",
    "titanium-rods",
    "copper",
    "stainless-steel",
  ]

  // Technical categories for dynamic routes
  const technicalCategories = [
    "stainless-steel-pipes",
    "carbon-steel-pipes",
    "alloy-steel-pipes",
    "nickel-alloys-composition",
    "aluminium",
    "titanium",
    "pipe-data",
    "mild-steel",
    "buttweld-fittings",
    "socketweld-fittings",
    "flanges-dimensions",
  ]

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/quality`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/technical`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/enquiry`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ]

  // Product pages
  const productPages = productCategories.map((category) => ({
    url: `${baseUrl}/products/${category}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  // Technical pages
  const technicalPages = technicalCategories.map((category) => ({
    url: `${baseUrl}/technical/${category}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  return [...staticPages, ...productPages, ...technicalPages]
}
