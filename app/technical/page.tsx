import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export const metadata = {
  title:
    "Technical Information - 6sigma Metal Supply Corporation | Material Specifications & Data",
  description:
    "Comprehensive technical information, specifications, and data sheets for metals and alloys. Chemical compositions, mechanical properties, and dimensional data.",
  keywords:
    "technical specifications, material data, chemical composition, mechanical properties, steel grades, metal specifications",
};

const technicalCategories = [
  {
    name: "Stainless Steel Pipes",
    slug: "stainless-steel-pipes",
    description:
      "Complete specifications for stainless steel pipes including dimensions, grades, and properties",
    icon: "🔧",
    topics: [
      "Grades 304, 316, 321",
      "Dimensional standards",
      "Pressure ratings",
      "Chemical composition",
    ],
  },
  {
    name: "Carbon Steel Pipes",
    slug: "carbon-steel-pipes",
    description:
      "Technical data for carbon steel pipes with various grades and specifications",
    icon: "⚙️",
    topics: [
      "ASTM A106",
      "API 5L grades",
      "Seamless & welded",
      "Pressure-temperature ratings",
    ],
  },
  {
    name: "Alloy Steel Pipes",
    slug: "alloy-steel-pipes",
    description:
      "Comprehensive information on alloy steel pipes for high-temperature applications",
    icon: "🔩",
    topics: [
      "Chrome-Moly grades",
      "High temperature service",
      "ASTM A335",
      "Creep resistance",
    ],
  },
  {
    name: "Chemical Composition of Nickel Alloys",
    slug: "nickel-alloys-composition",
    description:
      "Detailed chemical composition data for various nickel-based alloys",
    icon: "🧪",
    topics: [
      "Inconel series",
      "Hastelloy grades",
      "Monel alloys",
      "Composition limits",
    ],
  },
  {
    name: "Aluminium",
    slug: "aluminium",
    description:
      "Technical specifications and properties of aluminum alloys and products",
    icon: "⚡",
    topics: [
      "6000 series",
      "Temper designations",
      "Corrosion resistance",
      "Mechanical properties",
    ],
  },
  {
    name: "Titanium",
    slug: "titanium",
    description:
      "Comprehensive titanium technical data including grades and applications",
    icon: "💎",
    topics: [
      "Grade 1-4",
      "Ti-6Al-4V",
      "Biocompatibility",
      "Aerospace specifications",
    ],
  },
  {
    name: "Pipe Data",
    slug: "pipe-data",
    description:
      "Standard pipe dimensions, weights, and specifications for various materials",
    icon: "📏",
    topics: [
      "NPS dimensions",
      "Schedule ratings",
      "Wall thickness",
      "Weight calculations",
    ],
  },
  {
    name: "Mild Steel",
    slug: "mild-steel",
    description:
      "Technical information for mild steel products and applications",
    icon: "🔨",
    topics: [
      "ASTM A36",
      "Structural grades",
      "Weldability",
      "Forming properties",
    ],
  },
  {
    name: "Buttweld Fittings",
    slug: "buttweld-fittings",
    description: "Specifications and dimensions for buttweld pipe fittings",
    icon: "🔗",
    topics: [
      "ASME B16.9",
      "Elbow dimensions",
      "Tee specifications",
      "Reducer data",
    ],
  },
  {
    name: "Socketweld Fittings",
    slug: "socketweld-fittings",
    description: "Technical data for socketweld fittings and connections",
    icon: "🔌",
    topics: [
      "ASME B16.11",
      "Socket dimensions",
      "Pressure classes",
      "Installation data",
    ],
  },
  {
    name: "Flanges Dimensions",
    slug: "flanges-dimensions",
    description:
      "Complete dimensional data for various flange types and pressure classes",
    icon: "⭕",
    topics: ["ASME B16.5", "Pressure classes", "Bolt patterns", "Facing types"],
  },
];

export default function TechnicalPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Technical Information</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Comprehensive technical data, specifications, and reference
              information for metals, alloys, and industrial materials
            </p>
          </div>
        </section>

        {/* Technical Categories */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Technical Resources
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Access detailed technical specifications, chemical compositions,
                mechanical properties, and dimensional data for our complete
                range of materials
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technicalCategories.map((category) => (
                <Card
                  key={category.slug}
                  className="hover:shadow-lg transition-shadow h-full"
                >
                  <CardHeader>
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <CardTitle className="text-xl text-teal-600">
                      {category.name}
                    </CardTitle>
                    <p className="text-gray-600">{category.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {category.topics.map((topic, index) => (
                        <li
                          key={index}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <span className="text-teal-600 mr-2">•</span>
                          {topic}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/technical/${category.slug}`}
                      className="inline-block bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition-colors w-full text-center"
                    >
                      View Technical Data
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Reference */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Quick Reference
              </h2>
              <p className="text-lg text-gray-600">
                Commonly requested technical information
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-teal-600">
                    Standard Specifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong>ASTM Standards:</strong>
                        <ul className="mt-2 space-y-1 text-gray-600">
                          <li>• A240 - Stainless Steel</li>
                          <li>• A106 - Carbon Steel Pipes</li>
                          <li>• A335 - Alloy Steel Pipes</li>
                          <li>• B265 - Titanium</li>
                        </ul>
                      </div>
                      <div>
                        <strong>ASME Standards:</strong>
                        <ul className="mt-2 space-y-1 text-gray-600">
                          <li>• B16.5 - Flanges</li>
                          <li>• B16.9 - Buttweld Fittings</li>
                          <li>• B16.11 - Socketweld Fittings</li>
                          <li>• B31.3 - Process Piping</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-teal-600">
                    Material Grades
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong>Stainless Steel:</strong>
                        <ul className="mt-2 space-y-1 text-gray-600">
                          <li>• 304/304L</li>
                          <li>• 316/316L</li>
                          <li>• 321</li>
                          <li>• 347</li>
                        </ul>
                      </div>
                      <div>
                        <strong>Titanium:</strong>
                        <ul className="mt-2 space-y-1 text-gray-600">
                          <li>• Grade 1 (CP)</li>
                          <li>• Grade 2 (CP)</li>
                          <li>• Grade 5 (Ti-6Al-4V)</li>
                          <li>• Grade 23</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-teal-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Need Specific Technical Information?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Our technical team can provide detailed specifications, custom
              data sheets, and engineering support for your specific
              requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-teal-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                Contact Technical Team
              </a>
              <a
                href="/enquiry"
                className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-teal-600 transition-colors font-semibold"
              >
                Request Technical Data
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
