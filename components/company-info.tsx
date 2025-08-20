import { Button } from "@/components/ui/button";

export default function CompanyInfo() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* About Our Company */}
          <div className="text-center">
            <div className="relative mx-auto mb-6 w-48 h-48">
              <div className="absolute inset-0 rounded-full border-8 border-purple-600 p-4">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400 to-teal-500 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-white font-bold text-lg mb-2">
                      VISION
                    </div>
                    <div className="text-white text-sm">ABOUT US</div>
                    <div className="text-white text-sm">MISSION</div>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-teal-600 mb-4">
              ABOUT OUR COMPANY
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              6sigma Metal Supply corporation Having started business in 2015 is
              primarily engaged in importing and exporting of all kinds of
              metals. We are dealing in ferrous and non-ferrous metals i.e.
              industrial raw materials in all sizes, grades and forms such as
              Wire, Rod, Strip, Plate, Pipes & Fittings etc. Over time 6sigma
              metal supply corporation has built up a wide range of portfolio of
              ferrous and non ferrous materials.
            </p>
            <Button variant="link" className="text-blue-600 p-0">
              READ MORE •
            </Button>
          </div>

          {/* Quality Policy */}
          <div className="text-center">
            <div className="relative mx-auto mb-6 w-48 h-48">
              <div className="absolute inset-0 rounded-full border-8 border-purple-600 p-4">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-2">👍</div>
                    <div className="bg-teal-500 text-white px-3 py-1 rounded text-sm font-bold">
                      Quality
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-teal-600 mb-4">
              QUALITY POLICY
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Quality is our prime concern. We are able to maintain high quality
              standards through our competent personnel and sound
              infrastructure. We ensure that finest quality material is used for
              our products. For ensure the quality of each material, we are
              providing Materials Test Certificate along with supply.
            </p>
            <Button variant="link" className="text-blue-600 p-0">
              READ MORE •
            </Button>
          </div>

          {/* Special Products */}
          <div className="text-center">
            <div className="relative mx-auto mb-6 w-48 h-48">
              <div className="absolute inset-0 rounded-full border-8 border-purple-600 p-4">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <div className="text-6xl">🔭</div>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-teal-600 mb-4">
              SPECIAL PRODUCTS
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              6sigma Metal Supply Corporation is specialist in High component
              capacitors, DC capacitors, High voltage DC capacitors, Tantalum
              rods, Tantalum sheets, Titanium sheets, Titanium rods, Copper,
              Stainless steel and other grades which provides excellent
              resistance to corrosion. We also work with standard grades and are
              specialist in Supplier of products as per customer requirements.
            </p>
            <Button variant="link" className="text-blue-600 p-0">
              READ MORE •
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
