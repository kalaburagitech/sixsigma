import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export const metadata = {
  title:
    "About Us - 6sigma Metal Supply Corporation | Leading Metal Supplier in Bengaluru",
  description:
    "Learn about 6sigma Metal Supply Corporation - your trusted partner for high-quality metals and industrial materials since 2015. Based in Bengaluru, serving industries worldwide.",
  keywords:
    "about 6sigma, metal supply company, Bengaluru metal supplier, industrial materials, company history",
};

export default function AboutPage() {
  const achievements = [
    { number: "10+", label: "Years of Experience" },
    { number: "500+", label: "Satisfied Clients" },
    { number: "50+", label: "Product Categories" },
    { number: "15+", label: "Countries Served" },
  ];

  const values = [
    {
      title: "Quality Excellence",
      description:
        "We maintain the highest quality standards in all our products and services",
      icon: "🏆",
    },
    {
      title: "Customer Focus",
      description:
        "Our customers' success is our priority, and we tailor solutions to meet their needs",
      icon: "🎯",
    },
    {
      title: "Innovation",
      description:
        "We continuously innovate to provide cutting-edge solutions and products",
      icon: "💡",
    },
    {
      title: "Integrity",
      description:
        "We conduct business with honesty, transparency, and ethical practices",
      icon: "🤝",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">About 6sigma</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Leading the metal supply industry with excellence, innovation, and
              unwavering commitment to quality since 2015
            </p>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Our Story
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  6sigma Metal Supply Corporation was established in 2015 with a
                  vision to become the leading supplier of high-quality metals
                  and industrial materials. Based in Bengaluru, Karnataka, we
                  have grown from a small startup to a trusted partner for
                  industries across India and internationally.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Our journey began with a simple mission: to provide superior
                  quality metals and exceptional service to our customers. Over
                  the years, we have built strong relationships with
                  manufacturers, suppliers, and clients, establishing ourselves
                  as a reliable source for ferrous and non-ferrous metals.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Today, we serve diverse industries including aerospace,
                  chemical processing, power generation, marine, and
                  construction, providing them with materials that meet the
                  highest international standards.
                </p>
              </div>
              <div>
                <Image
                  src="/images/about.jpg"
                  alt="6sigma facility"
                  width={600}
                  height={400}
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Vision, Mission, Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Our Foundation
              </h2>
              <p className="text-lg text-gray-600">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {/* Vision */}
              <Card className="text-center">
                <CardHeader>
                  <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">👁️</span>
                  </div>
                  <CardTitle className="text-teal-600">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    To be the most trusted and innovative metal supply
                    corporation, setting industry standards for quality,
                    service, and sustainability while contributing to global
                    industrial growth.
                  </p>
                </CardContent>
              </Card>

              {/* Mission */}
              <Card className="text-center">
                <CardHeader>
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🎯</span>
                  </div>
                  <CardTitle className="text-blue-600">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    To provide superior quality metals and industrial materials
                    with exceptional service, innovative solutions, and
                    competitive pricing, enabling our customers to achieve their
                    goals and drive industrial progress.
                  </p>
                </CardContent>
              </Card>

              {/* About Us */}
              <Card className="text-center">
                <CardHeader>
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🏢</span>
                  </div>
                  <CardTitle className="text-green-600">About Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    A dynamic team of metal industry experts committed to
                    excellence, innovation, and customer satisfaction. We
                    combine technical expertise with market knowledge to deliver
                    optimal solutions.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Core Values */}
            <div>
              <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
                Our Core Values
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="text-center p-6 bg-white rounded-lg shadow-md"
                  >
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-16 bg-teal-600 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Achievements</h2>
              <p className="text-xl opacity-90">
                Numbers that reflect our commitment to excellence
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-lg opacity-90">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-8">
                  Why Choose 6sigma?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-teal-600 font-bold">✓</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        Superior Quality Products
                      </h3>
                      <p className="text-gray-600">
                        All our products meet international quality standards
                        and undergo rigorous testing.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-teal-600 font-bold">✓</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        Design Solution to Design Problem
                      </h3>
                      <p className="text-gray-600">
                        We provide customized solutions tailored to your
                        specific requirements and challenges.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-teal-600 font-bold">✓</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        Timely Delivery
                      </h3>
                      <p className="text-gray-600">
                        We understand the importance of deadlines and ensure
                        prompt delivery of all orders.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-teal-600 font-bold">✓</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        Proven Execution
                      </h3>
                      <p className="text-gray-600">
                        Successfully handling both small and large batch orders
                        with equal precision and care.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-teal-600 font-bold">✓</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        Customer Focused Approach
                      </h3>
                      <p className="text-gray-600">
                        Your success is our priority. We work closely with you
                        to understand and meet your needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src="/images/ABOUT2.jpg"
                  alt="Our team at work"
                  width={600}
                  height={500}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied customers who trust 6sigma for their
              metal supply needs. Contact us today to discuss your requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors font-semibold"
              >
                Contact Us
              </a>
              <a
                href="/enquiry"
                className="border border-teal-600 text-teal-600 px-8 py-3 rounded-lg hover:bg-teal-50 transition-colors font-semibold"
              >
                Request Quote
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
