import Image from "next/image";

export default function IndustriesServed() {
  const whyChooseUs = [
    "Superior quality products",
    "A design solution to design problem",
    "Timely delivery",
    "Proven execution of small as well as large batch orders",
    "Customer focused approach",
  ];

  const industries = [
    {
      name: "Chemical Industry",
      image: "/images/11th.jpeg",
    },
    { name: "Construction", image: "/images/12th.jpg" },
    { name: "Oil & Gas", image: "/images/13th.jpeg" },
    { name: "Aerospace", image: "/images/14th.jpeg" },
    { name: "Marine", image: "/images/pic11.jpeg" },
    {
      name: "Power Generation",
      image: "/images/vertical-stripes-iron-material-background.jpg",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Why Our Company */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-8">
              WHY OUR COMPANY
            </h2>
            <ul className="space-y-4">
              {whyChooseUs.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-teal-600 mr-3 mt-1">•</span>
                  <span className="text-gray-700 italic">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries We Served */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-8">
              INDUSTRIES WE SERVED
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {industries.map((industry, index) => (
                <div key={index} className="relative group">
                  <Image
                    src={industry.image || "/placeholder.svg"}
                    alt={industry.name}
                    width={200}
                    height={96}
                    className="w-full h-24 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-medium text-center px-2">
                      {industry.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
