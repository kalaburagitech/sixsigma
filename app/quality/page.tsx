import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export const metadata = {
  title:
    "Quality Policy - 6sigma Metal Supply Corporation | ISO Certified Quality Standards",
  description:
    "Learn about 6sigma's comprehensive quality policy, certifications, and quality control processes. We maintain the highest standards in metal supply and industrial materials.",
  keywords:
    "quality policy, ISO certification, quality control, metal testing, material certificates, quality standards",
};

export default function QualityPage() {
  const certifications = [
    {
      name: "ISO 9001:2015",
      description: "Quality Management Systems",
      icon: "🏆",
    },
    {
      name: "ISO 14001:2015",
      description: "Environmental Management",
      icon: "🌱",
    },
    {
      name: "OHSAS 18001",
      description: "Occupational Health & Safety",
      icon: "🛡️",
    },
    { name: "CE Marking", description: "European Conformity", icon: "🇪🇺" },
    {
      name: "RoHS Compliance",
      description: "Restriction of Hazardous Substances",
      icon: "♻️",
    },
    {
      name: "ASTM Standards",
      description: "American Society for Testing Materials",
      icon: "🔬",
    },
  ];

  const qualityProcesses = [
    {
      title: "Incoming Material Inspection",
      description: "All raw materials undergo thorough inspection upon arrival",
      steps: [
        "Visual inspection",
        "Dimensional verification",
        "Chemical composition analysis",
        "Mechanical property testing",
      ],
    },
    {
      title: "In-Process Quality Control",
      description: "Continuous monitoring throughout the processing stages",
      steps: [
        "Process parameter monitoring",
        "Intermediate quality checks",
        "Statistical process control",
        "Real-time adjustments",
      ],
    },
    {
      title: "Final Product Testing",
      description: "Comprehensive testing before product dispatch",
      steps: [
        "Final dimensional inspection",
        "Surface quality assessment",
        "Performance testing",
        "Documentation review",
      ],
    },
    {
      title: "Documentation & Traceability",
      description: "Complete documentation for full traceability",
      steps: [
        "Material test certificates",
        "Process records",
        "Quality reports",
        "Traceability documentation",
      ],
    },
  ];

  const testingCapabilities = [
    {
      test: "Chemical Composition Analysis",
      method: "Spectroscopy (OES, XRF)",
      standard: "ASTM E415",
    },
    {
      test: "Tensile Testing",
      method: "Universal Testing Machine",
      standard: "ASTM E8/E8M",
    },
    {
      test: "Hardness Testing",
      method: "Rockwell, Brinell, Vickers",
      standard: "ASTM E18, E10, E92",
    },
    { test: "Impact Testing", method: "Charpy V-Notch", standard: "ASTM E23" },
    {
      test: "Corrosion Testing",
      method: "Salt Spray, Immersion",
      standard: "ASTM B117, G31",
    },
    {
      test: "Dimensional Inspection",
      method: "CMM, Calipers, Gauges",
      standard: "ASME Y14.5",
    },
    { test: "Surface Roughness", method: "Profilometer", standard: "ISO 4287" },
    {
      test: "Non-Destructive Testing",
      method: "UT, MT, PT, RT",
      standard: "ASTM E164",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Quality Policy</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Quality is our prime concern. We maintain the highest standards
              through competent personnel, sound infrastructure, and rigorous
              quality control processes.
            </p>
          </div>
        </section>

        {/* Quality Policy Statement */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="w-24 h-24 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">🏆</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Our Quality Commitment
                </h2>
              </div>

              <Card className="mb-8">
                <CardContent className="p-8">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    At 6sigma Metal Supply Corporation, quality is not just a
                    goal—it&apos;s our fundamental commitment to every customer,
                    every product, and every service we provide. We are
                    dedicated to maintaining the highest quality standards
                    through our competent personnel and sound infrastructure.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    We ensure that the finest quality materials are used for all
                    our products. To guarantee the quality of each material, we
                    provide Material Test Certificates (MTC) along with every
                    supply, giving our customers complete confidence in the
                    products they receive.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Our quality management system is designed to continuously
                    improve our processes, exceed customer expectations, and
                    maintain our position as a trusted leader in the metal
                    supply industry.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Our Certifications
              </h2>
              <p className="text-lg text-gray-600">
                Recognized standards that validate our commitment to quality
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="text-4xl mb-4">{cert.icon}</div>
                    <CardTitle className="text-teal-600">{cert.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{cert.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Control Processes */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Quality Control Process
              </h2>
              <p className="text-lg text-gray-600">
                Systematic approach to ensuring consistent quality
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {qualityProcesses.map((process, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-teal-600">
                      {process.title}
                    </CardTitle>
                    <p className="text-gray-600">{process.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {process.steps.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-center">
                          <span className="text-teal-600 mr-3">•</span>
                          <span className="text-gray-700">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testing Capabilities */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Testing Capabilities
              </h2>
              <p className="text-lg text-gray-600">
                Advanced testing methods to ensure material quality and
                performance
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg">
                <thead className="bg-teal-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">
                      Test Type
                    </th>
                    <th className="px-6 py-4 text-left font-semibold">
                      Method/Equipment
                    </th>
                    <th className="px-6 py-4 text-left font-semibold">
                      Standard
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {testingCapabilities.map((test, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                    >
                      <td className="px-6 py-4 font-medium text-gray-800">
                        {test.test}
                      </td>
                      <td className="px-6 py-4 text-gray-600">{test.method}</td>
                      <td className="px-6 py-4">
                        <Badge variant="secondary">{test.standard}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Quality Assurance Features */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Quality Assurance Features
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-teal-600 font-bold">✓</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        Material Test Certificates
                      </h3>
                      <p className="text-gray-600">
                        Complete documentation including chemical composition,
                        mechanical properties, and test results.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-teal-600 font-bold">✓</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        Traceability System
                      </h3>
                      <p className="text-gray-600">
                        Full traceability from raw material source to final
                        product delivery.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-teal-600 font-bold">✓</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        Calibrated Equipment
                      </h3>
                      <p className="text-gray-600">
                        All testing and measuring equipment regularly calibrated
                        to international standards.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-teal-600 font-bold">✓</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        Continuous Improvement
                      </h3>
                      <p className="text-gray-600">
                        Regular review and enhancement of quality processes
                        based on customer feedback and industry best practices.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src="/images/semi.jpg"
                  alt="Quality control laboratory"
                  width={600}
                  height={500}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-teal-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Questions About Our Quality Standards?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Our quality team is ready to discuss your specific requirements
              and provide detailed information about our testing capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-teal-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                Contact Quality Team
              </a>
              <a
                href="/enquiry"
                className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-teal-600 transition-colors font-semibold"
              >
                Request Quality Documentation
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
