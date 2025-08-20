import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">6sigma</h3>
            <p className="text-gray-300 mb-4">
              Leading supplier of high-quality metals and industrial materials.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <p>📍 78, 7th main Defence Colony, Vinayak Nagar</p>
              <p>Bagalur Main Rd, cross, Kattigenahalli</p>
              <p>Bengaluru, Karnataka 560064</p>
              <p>📧 info.6sigma.co@gmail.com</p>
              <p>📞 +91 8453396612</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/about" className="hover:text-teal-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-teal-400">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/quality" className="hover:text-teal-400">
                  Quality
                </Link>
              </li>
              <li>
                <Link href="/technical" className="hover:text-teal-400">
                  Technical Info
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-teal-400">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Metal Supply</li>
              <li>Technical Consultation</li>
              <li>Quality Assurance</li>
              <li>Manpower Supply</li>
              <li>Custom Solutions</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            © 2025 All rights Reserved 6sigma Metal Supply Corporation | Website
            design & developed by 6sigma
          </p>
        </div>
      </div>
    </footer>
  );
}
