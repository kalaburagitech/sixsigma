import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { notFound } from "next/navigation";
import Image from "next/image";

const productData = {
  "high-component-capacitors": {
    name: "High Component Capacitors",
    description:
      "Premium quality high component capacitors designed for demanding industrial applications",
    image: "/images/capacitor_img.jpg",
    specifications: {
      "Voltage Range": "10V - 1000V",
      "Capacitance Range": "1µF - 10000µF",
      "Temperature Range": "-55°C to +125°C",
      Tolerance: "±5% to ±20%",
      Dielectric: "Ceramic, Tantalum, Aluminum",
      Mounting: "Through-hole, Surface Mount",
    },
    features: [
      "High reliability and long operational life",
      "Low equivalent series resistance (ESR)",
      "Excellent temperature stability",
      "RoHS compliant and environmentally friendly",
      "Wide range of capacitance values",
      "Suitable for high-frequency applications",
    ],
    applications: [
      "Power supply circuits",
      "Motor drives and inverters",
      "Renewable energy systems",
      "Industrial automation",
      "Telecommunications equipment",
      "Medical devices",
    ],
    certifications: ["ISO 9001", "RoHS", "CE", "UL Listed"],
  },
  "dc-capacitors": {
    name: "DC Capacitors",
    description:
      "Specialized DC capacitors for power electronics, energy storage, and DC circuit applications",
    image: "/images/dc capacitor.jpg",
    specifications: {
      "Voltage Range": "25V - 3000V",
      "Capacitance Range": "10µF - 50000µF",
      "Temperature Range": "-40°C to +105°C",
      "Ripple Current": "Up to 50A RMS",
      "Life Expectancy": "10,000+ hours",
      Mounting: "Screw terminal, Snap-in",
    },
    features: [
      "High voltage rating capabilities",
      "Low leakage current",
      "Compact and space-efficient design",
      "High ripple current handling",
      "Self-healing properties",
      "Long service life",
    ],
    applications: [
      "DC power supplies",
      "UPS systems",
      "Solar inverters",
      "Electric vehicle charging",
      "Welding equipment",
      "DC motor drives",
    ],
    certifications: ["IEC 61071", "UL 810", "VDE", "CSA"],
  },
  "high-voltage-dc-capacitors": {
    name: "High Voltage DC Capacitors",
    description:
      "Industrial grade high voltage DC capacitors for the most demanding high-power applications",
    image: "/images/high voltage dc capacitor.jpg",
    specifications: {
      "Voltage Range": "1kV - 100kV",
      "Capacitance Range": "0.1µF - 1000µF",
      "Temperature Range": "-25°C to +85°C",
      "Dielectric Strength": "Up to 150kV/mm",
      "Insulation Class": "Class H (180°C)",
      "Safety Standards": "IEC 61071, IEEE 18",
    },
    features: [
      "Ultra-high voltage capabilities",
      "Safety certified for industrial use",
      "Robust construction for harsh environments",
      "Low partial discharge",
      "High insulation resistance",
      "Explosion-proof designs available",
    ],
    applications: [
      "High voltage power supplies",
      "X-ray equipment",
      "Laser systems",
      "Particle accelerators",
      "High voltage testing equipment",
      "Power transmission systems",
    ],
    certifications: ["IEC 61071", "IEEE 18", "ANSI C37", "Safety certified"],
  },
  "tantalum-rods": {
    name: "Tantalum Rods",
    description:
      "Pure tantalum rods offering exceptional corrosion resistance for chemical processing and aerospace",
    image: "/images/tantalum-rod.jpg",
    specifications: {
      Purity: "99.95% minimum",
      "Diameter Range": "3mm - 200mm",
      Length: "Up to 6 meters",
      Density: "16.6 g/cm³",
      "Melting Point": "3017°C",
      "Surface Finish": "Machined, Polished",
    },
    features: [
      "Exceptional corrosion resistance",
      "Biocompatible and non-toxic",
      "High melting point and thermal stability",
      "Excellent ductility and formability",
      "Chemical inertness",
      "Superior mechanical properties",
    ],
    applications: [
      "Chemical processing equipment",
      "Aerospace components",
      "Medical implants",
      "Electronic components",
      "Heat exchangers",
      "Vacuum furnace parts",
    ],
    certifications: ["ASTM B365", "AMS 7850", "Medical grade ISO 13485"],
  },
  "tantalum-sheets": {
    name: "Tantalum Sheets",
    description:
      "High-quality tantalum sheets providing superior corrosion resistance for industrial applications",
    image: "/images/Tantalum SHeet.png",
    specifications: {
      Purity: "99.95% minimum",
      "Thickness Range": "0.1mm - 25mm",
      Width: "Up to 1000mm",
      Length: "Up to 3000mm",
      Surface: "Annealed, Cold rolled",
      Tolerance: "±0.05mm",
    },
    features: [
      "Outstanding formability",
      "Excellent weldability",
      "Chemical inertness",
      "High temperature stability",
      "Biocompatible properties",
      "Uniform thickness distribution",
    ],
    applications: [
      "Chemical reactor linings",
      "Medical device components",
      "Capacitor anodes",
      "Heat exchanger plates",
      "Corrosion-resistant coatings",
      "Laboratory equipment",
    ],
    certifications: ["ASTM B708", "Medical grade", "Chemical grade"],
  },
  "titanium-sheets": {
    name: "Titanium Sheets",
    description:
      "Premium titanium sheets combining lightweight properties with exceptional strength for aerospace and marine",
    image: "/images/titanium-sheet.jpg",
    specifications: {
      Grade: "Grade 1, 2, 5 (Ti-6Al-4V)",
      "Thickness Range": "0.5mm - 50mm",
      Width: "Up to 1500mm",
      Length: "Up to 4000mm",
      Surface: "Hot rolled, Cold rolled",
      "Tensile Strength": "240-1170 MPa",
    },
    features: [
      "Superior strength-to-weight ratio",
      "Excellent corrosion resistance",
      "Biocompatible and non-toxic",
      "High temperature performance",
      "Fatigue resistance",
      "Weldable and formable",
    ],
    applications: [
      "Aerospace structures",
      "Marine applications",
      "Chemical processing",
      "Medical implants",
      "Automotive components",
      "Sports equipment",
    ],
    certifications: ["AMS 4900 series", "ASTM B265", "Medical grade ISO 5832"],
  },
  "titanium-rods": {
    name: "Titanium Rods",
    description:
      "High-grade titanium rods offering exceptional machinability and strength for precision applications",
    image: "/images/Titanium-Rods-2.png",
    specifications: {
      Grade: "Grade 2, 5, 23",
      "Diameter Range": "5mm - 300mm",
      Length: "Up to 6 meters",
      Surface: "Turned, Ground, Polished",
      Straightness: "±1mm/m",
      Hardness: "120-400 HV",
    },
    features: [
      "Excellent machinability",
      "High strength and durability",
      "Corrosion resistant",
      "Lightweight design",
      "Heat treatable",
      "Non-magnetic properties",
    ],
    applications: [
      "Precision machining",
      "Aerospace fasteners",
      "Medical instruments",
      "Chemical equipment",
      "Marine hardware",
      "Racing components",
    ],
    certifications: ["AMS 4928", "ASTM B348", "Medical grade"],
  },
  copper: {
    name: "Copper Products",
    description:
      "Pure copper products including sheets, rods, and custom forms with excellent conductivity",
    image: "/images/5th.jpg",
    specifications: {
      Purity: "99.9% Cu minimum",
      Grades: "C101, C110, C11000",
      Conductivity: "101% IACS minimum",
      Temper: "Soft, Half Hard, Hard",
      Forms: "Sheets, Rods, Tubes, Wire",
      Standards: "ASTM B152, B187, B88",
    },
    features: [
      "Excellent electrical conductivity",
      "Superior thermal conductivity",
      "Antimicrobial properties",
      "Excellent formability",
      "Corrosion resistant",
      "100% recyclable",
    ],
    applications: [
      "Electrical wiring and components",
      "Heat exchangers",
      "Plumbing systems",
      "Roofing and architecture",
      "Electronic devices",
      "Marine applications",
    ],
    certifications: ["ASTM standards", "UL Listed", "NSF certified"],
  },
  "stainless-steel": {
    name: "Stainless Steel",
    description:
      "Comprehensive range of stainless steel products in various grades for diverse industrial applications",
    image: "/images/stainless steel.jpg",
    specifications: {
      Grades: "304, 316, 321, 347, 410, 420",
      Forms: "Sheets, Plates, Rods, Tubes",
      Thickness: "0.3mm - 100mm",
      "Surface Finish": "2B, BA, No.4, Mirror",
      Standards: "ASTM A240, A276, A312",
      "Corrosion Resistance": "Excellent",
    },
    features: [
      "Superior corrosion resistance",
      "High temperature stability",
      "Excellent weldability",
      "Food grade options available",
      "Low maintenance requirements",
      "Aesthetic appeal",
    ],
    applications: [
      "Food processing equipment",
      "Chemical processing",
      "Pharmaceutical industry",
      "Architecture and construction",
      "Marine applications",
      "Medical devices",
    ],
    certifications: ["ASTM standards", "FDA approved", "Food grade certified"],
  },
};

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = productData[slug as keyof typeof productData];

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Product Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={600}
                height={400}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                {product.name}
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                {product.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {product.certifications.map((cert) => (
                  <Badge key={cert} variant="secondary">
                    {cert}
                  </Badge>
                ))}
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-teal-600">
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {product.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-teal-600 mr-3">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Detailed Information */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Specifications */}
            <Card>
              <CardHeader>
                <CardTitle className="text-teal-600">
                  Technical Specifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Object.entries(product.specifications).map(
                    ([key, value]) => (
                      <div key={key} className="border-b border-gray-200 pb-2">
                        <div className="font-medium text-gray-800">{key}</div>
                        <div className="text-gray-600">{value}</div>
                      </div>
                    )
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle className="text-teal-600">
                  Product Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-teal-600 mr-2 mt-1">•</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Applications */}
            <Card>
              <CardHeader>
                <CardTitle className="text-teal-600">Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {product.applications.map((application, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-teal-600 mr-2 mt-1">→</span>
                      <span className="text-gray-700">{application}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact CTA */}
          <div className="mt-16 bg-teal-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Need More Information?
            </h2>
            <p className="text-gray-600 mb-6">
              Contact our technical team for detailed specifications, custom
              requirements, or bulk pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors"
              >
                Contact Us
              </a>
              <a
                href="/enquiry"
                className="border border-teal-600 text-teal-600 px-6 py-3 rounded-lg hover:bg-teal-50 transition-colors"
              >
                Request Quote
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
