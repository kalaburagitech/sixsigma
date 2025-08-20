import Image from "next/image";

export default function ProductRange() {
  const products = [
    { name: "Capacitor", image: "/images/capacitor_img.jpg" },
    { name: "Dc capacitor", image: "/images/dc capacitor.jpg" },
    {
      name: "titanium-sheet",
      image: "/images/titanium-sheet.jpg",
    },
    { name: "stainless steel", image: "/images/stainless steel.jpg" },
    {
      name: "high voltage dc capacitor",
      image: "/images/high voltage dc capacitor.jpg",
    },
    {
      name: "Tantalum SHeet",
      image: "/images/Tantalum SHeet.png",
    },
    { name: "tantalum-rod", image: "/images/tantalum-rod.jpg" },
    { name: "Titanium-Rods-2", image: "/images/Titanium-Rods-2.png" },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          OUR PRODUCT RANGE
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <Image
                src={product.image || "/placeholder.svg"}
                alt={`${product.name} - High quality industrial materials from 6sigma`}
                width={300}
                height={192}
                className="w-full h-48 object-cover"
                priority={index < 4}
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 text-center">
                  {product.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
