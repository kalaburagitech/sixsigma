import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { notFound } from "next/navigation";

interface Composition {
  [key: string]: string;
}

interface Mechanical {
  [key: string]: string;
}

interface Grade {
  grade: string;
  composition: Composition;
  mechanical: Mechanical;
}

interface Dimension {
  nps: string;
  od: string;
  wt_sch10?: string;
  wt_sch40: string;
  wt_sch80: string;
  wt_sch160?: string;
}

interface TechnicalMaterial {
  name: string;
  description: string;
  grades: Grade[];
  dimensions?: Dimension[]; // Made dimensions optional
  applications: string[];
  standards: string[];
}

interface TechnicalData {
  [key: string]: TechnicalMaterial;
}

const technicalData: TechnicalData = {
  "stainless-steel-pipes": {
    name: "Stainless Steel Pipes",
    description:
      "Comprehensive technical specifications for stainless steel pipes",
    grades: [
      {
        grade: "304/304L",
        composition: {
          Carbon: "0.08 max / 0.030 max",
          Chromium: "18.00 - 20.00",
          Nickel: "8.00 - 12.00",
          Manganese: "2.00 max",
          Silicon: "0.75 max",
          Phosphorus: "0.045 max",
          Sulfur: "0.030 max",
        },
        mechanical: {
          "Tensile Strength": "515 MPa min",
          "Yield Strength": "205 MPa min",
          Elongation: "40% min",
          Hardness: "201 HB max",
        },
      },
      {
        grade: "316/316L",
        composition: {
          Carbon: "0.08 max / 0.030 max",
          Chromium: "16.00 - 18.00",
          Nickel: "10.00 - 14.00",
          Molybdenum: "2.00 - 3.00",
          Manganese: "2.00 max",
          Silicon: "0.75 max",
          Phosphorus: "0.045 max",
          Sulfur: "0.030 max",
        },
        mechanical: {
          "Tensile Strength": "515 MPa min",
          "Yield Strength": "205 MPa min",
          Elongation: "40% min",
          Hardness: "217 HB max",
        },
      },
    ],
    dimensions: [
      {
        nps: "1/8",
        od: "10.3",
        wt_sch10: "1.24",
        wt_sch40: "1.73",
        wt_sch80: "2.41",
      },
      {
        nps: "1/4",
        od: "13.7",
        wt_sch10: "1.65",
        wt_sch40: "2.24",
        wt_sch80: "3.02",
      },
      {
        nps: "3/8",
        od: "17.1",
        wt_sch10: "1.65",
        wt_sch40: "2.31",
        wt_sch80: "3.20",
      },
      {
        nps: "1/2",
        od: "21.3",
        wt_sch10: "2.11",
        wt_sch40: "2.77",
        wt_sch80: "3.73",
      },
      {
        nps: "3/4",
        od: "26.7",
        wt_sch10: "2.11",
        wt_sch40: "2.87",
        wt_sch80: "3.91",
      },
      {
        nps: "1",
        od: "33.4",
        wt_sch10: "2.77",
        wt_sch40: "3.38",
        wt_sch80: "4.55",
      },
      {
        nps: "1-1/4",
        od: "42.2",
        wt_sch10: "2.77",
        wt_sch40: "3.56",
        wt_sch80: "4.85",
      },
      {
        nps: "1-1/2",
        od: "48.3",
        wt_sch10: "2.77",
        wt_sch40: "3.68",
        wt_sch80: "5.08",
      },
      {
        nps: "2",
        od: "60.3",
        wt_sch10: "2.77",
        wt_sch40: "3.91",
        wt_sch80: "5.54",
      },
    ],
    applications: [
      "Chemical processing equipment",
      "Food and beverage industry",
      "Pharmaceutical applications",
      "Marine environments",
      "Architectural applications",
      "Heat exchangers",
    ],
    standards: ["ASTM A312", "ASTM A213", "ASME SA312", "EN 10216-5"],
  },
  "carbon-steel-pipes": {
    name: "Carbon Steel Pipes",
    description: "Technical specifications for carbon steel pipes and tubes",
    grades: [
      {
        grade: "ASTM A106 Grade B",
        composition: {
          Carbon: "0.30 max",
          Manganese: "0.29 - 1.06",
          Phosphorus: "0.035 max",
          Sulfur: "0.035 max",
          Silicon: "0.10 min",
          Chromium: "0.40 max",
          Copper: "0.40 max",
          Molybdenum: "0.15 max",
          Nickel: "0.40 max",
          Vanadium: "0.08 max",
        },
        mechanical: {
          "Tensile Strength": "415 MPa min",
          "Yield Strength": "240 MPa min",
          Elongation: "30% min",
        },
      },
    ],
    dimensions: [
      {
        nps: "1/2",
        od: "21.3",
        wt_sch40: "2.77",
        wt_sch80: "3.73",
        wt_sch160: "4.78",
      },
      {
        nps: "3/4",
        od: "26.7",
        wt_sch40: "2.87",
        wt_sch80: "3.91",
        wt_sch160: "5.56",
      },
      {
        nps: "1",
        od: "33.4",
        wt_sch40: "3.38",
        wt_sch80: "4.55",
        wt_sch160: "6.35",
      },
      {
        nps: "1-1/4",
        od: "42.2",
        wt_sch40: "3.56",
        wt_sch80: "4.85",
        wt_sch160: "6.35",
      },
      {
        nps: "1-1/2",
        od: "48.3",
        wt_sch40: "3.68",
        wt_sch80: "5.08",
        wt_sch160: "7.14",
      },
      {
        nps: "2",
        od: "60.3",
        wt_sch40: "3.91",
        wt_sch80: "5.54",
        wt_sch160: "8.74",
      },
      {
        nps: "2-1/2",
        od: "73.0",
        wt_sch40: "5.16",
        wt_sch80: "7.01",
        wt_sch160: "9.53",
      },
      {
        nps: "3",
        od: "88.9",
        wt_sch40: "5.49",
        wt_sch80: "7.62",
        wt_sch160: "11.13",
      },
      {
        nps: "4",
        od: "114.3",
        wt_sch40: "6.02",
        wt_sch80: "8.56",
        wt_sch160: "13.49",
      },
    ],
    applications: [
      "High temperature service",
      "Power generation",
      "Petrochemical industry",
      "Oil and gas pipelines",
      "Structural applications",
      "Pressure vessels",
    ],
    standards: ["ASTM A106", "ASTM A53", "API 5L", "ASME SA106"],
  },
  "nickel-alloys-composition": {
    name: "Chemical Composition of Nickel Alloys",
    description:
      "Detailed chemical composition data for nickel-based superalloys",
    grades: [
      {
        grade: "Inconel 600",
        composition: {
          Nickel: "72.0 min",
          Chromium: "14.0 - 17.0",
          Iron: "6.0 - 10.0",
          Carbon: "0.15 max",
          Manganese: "1.0 max",
          Silicon: "0.5 max",
          Sulfur: "0.015 max",
          Copper: "0.5 max",
        },
        mechanical: {
          "Tensile Strength": "550 MPa min",
          "Yield Strength": "240 MPa min",
          Elongation: "30% min",
          Hardness: "192 HB max",
        },
      },
      {
        grade: "Inconel 625",
        composition: {
          Nickel: "58.0 min",
          Chromium: "20.0 - 23.0",
          Molybdenum: "8.0 - 10.0",
          Niobium: "3.15 - 4.15",
          Iron: "5.0 max",
          Carbon: "0.10 max",
          Manganese: "0.5 max",
          Silicon: "0.5 max",
          Phosphorus: "0.015 max",
          Sulfur: "0.015 max",
        },
        mechanical: {
          "Tensile Strength": "760 MPa min",
          "Yield Strength": "345 MPa min",
          Elongation: "30% min",
          Hardness: "255 HB max",
        },
      },
      {
        grade: "Hastelloy C-276",
        composition: {
          Nickel: "57.0 min",
          Chromium: "14.5 - 16.5",
          Molybdenum: "15.0 - 17.0",
          Tungsten: "3.0 - 4.5",
          Iron: "4.0 - 7.0",
          Cobalt: "2.5 max",
          Carbon: "0.01 max",
          Manganese: "1.0 max",
          Silicon: "0.08 max",
          Phosphorus: "0.04 max",
          Sulfur: "0.03 max",
        },
        mechanical: {
          "Tensile Strength": "690 MPa min",
          "Yield Strength": "283 MPa min",
          Elongation: "40% min",
          Hardness: "230 HB max",
        },
      },
    ],
    applications: [
      "Chemical processing",
      "Aerospace engines",
      "Nuclear reactors",
      "Marine applications",
      "High temperature furnaces",
      "Pollution control equipment",
    ],
    standards: ["ASTM B564", "ASTM B574", "ASME SB564", "UNS N06600"],
  },
  titanium: {
    name: "Titanium",
    description: "Technical specifications and properties of titanium alloys",
    grades: [
      {
        grade: "Grade 1 (CP)",
        composition: {
          Titanium: "99.5 min",
          Nitrogen: "0.03 max",
          Carbon: "0.08 max",
          Hydrogen: "0.015 max",
          Iron: "0.20 max",
          Oxygen: "0.18 max",
        },
        mechanical: {
          "Tensile Strength": "240 MPa min",
          "Yield Strength": "170 MPa min",
          Elongation: "24% min",
          "Reduction of Area": "30% min",
        },
      },
      {
        grade: "Grade 2 (CP)",
        composition: {
          Titanium: "99.2 min",
          Nitrogen: "0.03 max",
          Carbon: "0.08 max",
          Hydrogen: "0.015 max",
          Iron: "0.30 max",
          Oxygen: "0.25 max",
        },
        mechanical: {
          "Tensile Strength": "345 MPa min",
          "Yield Strength": "275 MPa min",
          Elongation: "20% min",
          "Reduction of Area": "30% min",
        },
      },
      {
        grade: "Grade 5 (Ti-6Al-4V)",
        composition: {
          Titanium: "Balance",
          Aluminum: "5.5 - 6.75",
          Vanadium: "3.5 - 4.5",
          Nitrogen: "0.05 max",
          Carbon: "0.08 max",
          Hydrogen: "0.015 max",
          Iron: "0.40 max",
          Oxygen: "0.20 max",
        },
        mechanical: {
          "Tensile Strength": "895 MPa min",
          "Yield Strength": "828 MPa min",
          Elongation: "10% min",
          "Reduction of Area": "25% min",
        },
      },
    ],
    applications: [
      "Aerospace structures",
      "Medical implants",
      "Chemical processing",
      "Marine applications",
      "Sports equipment",
      "Automotive components",
    ],
    standards: ["ASTM B265", "ASTM B348", "AMS 4900 series", "ISO 5832"],
  },
};

interface TechnicalPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function TechnicalDetailPage({
  params,
}: TechnicalPageProps) {
  const { slug } = await params;
  const data = technicalData[slug as keyof typeof technicalData];

  if (!data) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              {data.name}
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {data.description}
            </p>
          </div>

          {/* Chemical Composition & Mechanical Properties */}
          <div className="space-y-12">
            {data.grades.map((grade: Grade, index: number) => (
              <div key={index}>
                <h2 className="text-2xl font-bold text-teal-600 mb-6">
                  {grade.grade}
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  {/* Chemical Composition */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-teal-600">
                        Chemical Composition (%)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left py-2 font-semibold">
                                Element
                              </th>
                              <th className="text-left py-2 font-semibold">
                                Composition
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {Object.entries(grade.composition).map(
                              ([element, value]: [string, string]) => (
                                <tr key={element} className="border-b">
                                  <td className="py-2 font-medium">
                                    {element}
                                  </td>
                                  <td className="py-2 text-gray-600">
                                    {value}
                                  </td>
                                </tr>
                              )
                            )}
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Mechanical Properties */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-teal-600">
                        Mechanical Properties
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left py-2 font-semibold">
                                Property
                              </th>
                              <th className="text-left py-2 font-semibold">
                                Value
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {Object.entries(grade.mechanical).map(
                              ([property, value]: [string, string]) => (
                                <tr key={property} className="border-b">
                                  <td className="py-2 font-medium">
                                    {property}
                                  </td>
                                  <td className="py-2 text-gray-600">
                                    {value}
                                  </td>
                                </tr>
                              )
                            )}
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}

            {/* Dimensions Table (if available) */}
            {data.dimensions && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-teal-600">
                    Standard Dimensions (mm)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="text-left py-3 px-4 font-semibold">
                            NPS
                          </th>
                          <th className="text-left py-3 px-4 font-semibold">
                            OD
                          </th>
                          {data.dimensions[0]?.wt_sch10 && (
                            <th className="text-left py-3 px-4 font-semibold">
                              Sch 10
                            </th>
                          )}
                          <th className="text-left py-3 px-4 font-semibold">
                            Sch 40
                          </th>
                          <th className="text-left py-3 px-4 font-semibold">
                            Sch 80
                          </th>
                          {data.dimensions[0]?.wt_sch160 && (
                            <th className="text-left py-3 px-4 font-semibold">
                              Sch 160
                            </th>
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        {data.dimensions.map(
                          (dim: Dimension, index: number) => (
                            <tr
                              key={index}
                              className={
                                index % 2 === 0 ? "bg-gray-50" : "bg-white"
                              }
                            >
                              <td className="py-3 px-4 font-medium">
                                {dim.nps}
                              </td>
                              <td className="py-3 px-4">{dim.od}</td>
                              {dim.wt_sch10 && (
                                <td className="py-3 px-4">{dim.wt_sch10}</td>
                              )}
                              <td className="py-3 px-4">{dim.wt_sch40}</td>
                              <td className="py-3 px-4">{dim.wt_sch80}</td>
                              {dim.wt_sch160 && (
                                <td className="py-3 px-4">{dim.wt_sch160}</td>
                              )}
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Applications & Standards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-teal-600">Applications</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {data.applications.map(
                      (application: string, index: number) => (
                        <li key={index} className="flex items-center">
                          <span className="text-teal-600 mr-3">•</span>
                          <span className="text-gray-700">{application}</span>
                        </li>
                      )
                    )}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-teal-600">
                    Standards & Specifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {data.standards.map((standard: string, index: number) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-sm"
                      >
                        {standard}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-16 bg-teal-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Need Additional Technical Information?
            </h2>
            <p className="text-gray-600 mb-6">
              Our technical team can provide detailed specifications, test
              certificates, and engineering support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors"
              >
                Contact Technical Team
              </a>
              <a
                href="/enquiry"
                className="border border-teal-600 text-teal-600 px-6 py-3 rounded-lg hover:bg-teal-50 transition-colors"
              >
                Request Data Sheet
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
