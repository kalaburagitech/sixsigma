import type React from "react";
import type { Metadata } from "next";

const technicalData = {
  "stainless-steel-pipes": {
    name: "Stainless Steel Pipes",
    description:
      "Comprehensive technical specifications for stainless steel pipes",
  },
  "carbon-steel-pipes": {
    name: "Carbon Steel Pipes",
    description: "Technical specifications for carbon steel pipes and tubes",
  },
  "alloy-steel-pipes": {
    name: "Alloy Steel Pipes",
    description:
      "Comprehensive information on alloy steel pipes for high-temperature applications",
  },
  "nickel-alloys-composition": {
    name: "Chemical Composition of Nickel Alloys",
    description:
      "Detailed chemical composition data for various nickel-based alloys",
  },
  aluminium: {
    name: "Aluminium",
    description:
      "Technical specifications and properties of aluminum alloys and products",
  },
  titanium: {
    name: "Titanium",
    description:
      "Comprehensive titanium technical data including grades and applications",
  },
  "pipe-data": {
    name: "Pipe Data",
    description:
      "Standard pipe dimensions, weights, and specifications for various materials",
  },
  "mild-steel": {
    name: "Mild Steel",
    description:
      "Technical information for mild steel products and applications",
  },
  "buttweld-fittings": {
    name: "Buttweld Fittings",
    description: "Specifications and dimensions for buttweld pipe fittings",
  },
  "socketweld-fittings": {
    name: "Socketweld Fittings",
    description: "Technical data for socketweld fittings and connections",
  },
  "flanges-dimensions": {
    name: "Flanges Dimensions",
    description:
      "Complete dimensional data for various flange types and pressure classes",
  },
};

interface TechnicalLayoutProps {
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
  const data = technicalData[slug as keyof typeof technicalData];

  if (!data) {
    return {
      title: "Technical Information Not Found - 6sigma",
      description: "The requested technical information could not be found.",
    };
  }

  return {
    title: `${data.name} - Technical Information | 6sigma Metal Supply Corporation`,
    description: `${data.description}. Detailed technical specifications, chemical composition, and mechanical properties from 6sigma.`,
    keywords: `${data.name.toLowerCase()}, technical specifications, material data, chemical composition, mechanical properties, 6sigma`,
    openGraph: {
      title: `${data.name} - Technical Data | 6sigma`,
      description: data.description,
      type: "website",
    },
  };
}

export default function TechnicalLayout({ children }: TechnicalLayoutProps) {
  return children;
}
