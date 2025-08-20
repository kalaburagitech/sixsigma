import type React from "react";
import type { Metadata } from "next";

const productData = {
  "high-component-capacitors": {
    name: "High Component Capacitors",
    description:
      "Premium quality high component capacitors designed for demanding industrial applications",
  },
  "dc-capacitors": {
    name: "DC Capacitors",
    description:
      "Specialized DC capacitors for power electronics, energy storage, and DC circuit applications",
  },
  "high-voltage-dc-capacitors": {
    name: "High Voltage DC Capacitors",
    description:
      "Industrial grade high voltage DC capacitors for the most demanding high-power applications",
  },
  "tantalum-rods": {
    name: "Tantalum Rods",
    description:
      "Pure tantalum rods offering exceptional corrosion resistance for chemical processing and aerospace",
  },
  "tantalum-sheets": {
    name: "Tantalum Sheets",
    description:
      "High-quality tantalum sheets providing superior corrosion resistance for industrial applications",
  },
  "titanium-sheets": {
    name: "Titanium Sheets",
    description:
      "Premium titanium sheets combining lightweight properties with exceptional strength",
  },
  "titanium-rods": {
    name: "Titanium Rods",
    description:
      "High-grade titanium rods offering exceptional machinability and strength for precision applications",
  },
  copper: {
    name: "Copper Products",
    description:
      "Pure copper products including sheets, rods, and custom forms with excellent conductivity",
  },
  "stainless-steel": {
    name: "Stainless Steel",
    description:
      "Comprehensive range of stainless steel products in various grades for diverse industrial applications",
  },
};

interface ProductLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = productData[slug as keyof typeof productData];

  if (!product) {
    return {
      title: "Product Not Found - 6sigma",
      description: "The requested product could not be found.",
    };
  }

  return {
    title: `${product.name} - 6sigma Metal Supply Corporation`,
    description: `${
      product.description
    }. High-quality ${product.name.toLowerCase()} from 6sigma - your trusted metal supply partner in Bengaluru.`,
    keywords: `${product.name.toLowerCase()}, metal supply, industrial materials, Bengaluru, 6sigma`,
    openGraph: {
      title: `${product.name} - 6sigma`,
      description: product.description,
      type: "website",
    },
  };
}

export default function ProductLayout({ children }: ProductLayoutProps) {
  return children;
}
