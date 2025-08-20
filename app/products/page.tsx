import Header from "@/components/header";
import Footer from "@/components/footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

const productCategories = [
  {
    name: "High Component Capacitors",
    slug: "high-component-capacitors",
    description:
      "Premium quality high component capacitors for industrial applications",
    image: "/images/capacitor_img.jpg",
    features: [
      "High reliability",
      "Long lifespan",
      "Temperature stable",
      "Low ESR",
    ],
  },
  {
    name: "DC Capacitors",
    slug: "dc-capacitors",
    description:
      "Specialized DC capacitors for power electronics and energy storage",
    image: "/images/dc capacitor.jpg",
    features: [
      "High voltage rating",
      "Low leakage current",
      "Compact design",
      "RoHS compliant",
    ],
  },
  {
    name: "High Voltage DC Capacitors",
    slug: "high-voltage-dc-capacitors",
    description:
      "Industrial grade high voltage DC capacitors for demanding applications",
    image: "/images/high voltage dc capacitor.jpg",
    features: [
      "Ultra-high voltage",
      "Safety certified",
      "Robust construction",
      "Long service life",
    ],
  },
  {
    name: "Tantalum Rods",
    slug: "tantalum-rods",
    description:
      "Pure tantalum rods for chemical processing and aerospace applications",
    image: "/images/tantalum-rod.jpg",
    features: [
      "99.95% purity",
      "Corrosion resistant",
      "High melting point",
      "Biocompatible",
    ],
  },
  {
    name: "Tantalum Sheets",
    slug: "tantalum-sheets",
    description:
      "High-quality tantalum sheets for industrial and medical applications",
    image: "/images/Tantalum SHeet.png",
    features: [
      "Various thicknesses",
      "Excellent formability",
      "Chemical inert",
      "Medical grade",
    ],
  },
  {
    name: "Titanium Sheets",
    slug: "titanium-sheets",
    description:
      "Premium titanium sheets for aerospace, marine, and chemical industries",
    image: "/images/titanium-sheet.jpg",
    features: [
      "Lightweight",
      "High strength",
      "Corrosion resistant",
      "Aerospace grade",
    ],
  },
  {
    name: "Titanium Rods",
    slug: "titanium-rods",
    description:
      "High-grade titanium rods for precision machining and manufacturing",
    image: "/images/Titanium-Rods-2.png",
    features: [
      "Superior strength-to-weight ratio",
      "Excellent machinability",
      "Biocompatible",
      "Heat treatable",
    ],
  },
  {
    name: "Copper",
    slug: "copper",
    description:
      "Pure copper products including sheets, rods, and custom forms",
    image: "/images/5th.jpg",
    features: [
      "High conductivity",
      "Antimicrobial properties",
      "Excellent formability",
      "Recyclable",
    ],
  },
  {
    name: "Stainless Steel",
    slug: "stainless-steel",
    description:
      "Comprehensive range of stainless steel products in various grades",
    image: "/images/stainless steel.jpg",
    features: [
      "Corrosion resistant",
      "Food grade available",
      "Multiple grades",
      "Weldable",
    ],
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Our Products
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              6sigma offers a comprehensive range of high-quality metals and
              electronic components. Our products meet international standards
              and are suitable for various industrial applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((product) => (
              <Card
                key={product.slug}
                className="hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <CardTitle className="text-xl text-teal-600">
                    {product.name}
                  </CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {product.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <span className="text-teal-600 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/products/${product.slug}`}
                    className="inline-block bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition-colors"
                  >
                    View Details
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-teal-600 mb-4">
                  Manpower Supply
                </h3>
                <p className="text-gray-600">
                  We provide skilled technical manpower for various industrial
                  projects and maintenance operations.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-teal-600 mb-4">
                  Custom Solutions
                </h3>
                <p className="text-gray-600">
                  Tailored metal solutions designed to meet your specific
                  industrial requirements and applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
