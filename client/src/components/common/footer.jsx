import { Heart, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-100 mt-12">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold text-white">eShopify</h3>
            <p className="text-slate-300 text-sm">
              Your one-stop destination for premium fashion and lifestyle
              products at unbeatable prices.
            </p>
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-600 cursor-pointer transition">
                <Heart size={16} />
              </div>
              <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-600 cursor-pointer transition">
                <Mail size={16} />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/shop/home"
                  className="text-slate-300 hover:text-white transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/shop/listing"
                  className="text-slate-300 hover:text-white transition"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/shop/account"
                  className="text-slate-300 hover:text-white transition"
                >
                  My Account
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-white transition"
                >
                  Track Order
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Get in Touch
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-slate-300">
                <Phone size={18} />
                <span>+254 700 123 456</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail size={18} />
                <span>support@eshopify.com</span>
              </div>
              <div className="flex items-start gap-2 text-slate-300">
                <MapPin size={18} className="mt-0.5" />
                <span>123 Shopping Ave, Nairobi, Kenya</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 my-6"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {currentYear} eShopify. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
