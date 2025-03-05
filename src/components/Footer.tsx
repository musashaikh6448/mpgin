import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin as LinkedIn,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#05113e] text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#ea1b26] mt-1" />
                <p className="text-gray-300">
                  MIDC Area, Nanded - 431603,
                  <br />
                  Maharashtra, India
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#ea1b26]" />
                <a
                  href="tel:+912462269900"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +91 2462 269900
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#ea1b26]" />
                <a
                  href="mailto:info@mpgin.edu.in"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  info@mpgin.edu.in
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "About Us", path: "/about" },
                { name: "Programs", path: "/programs" },
                { name: "Admissions", path: "/admissions" },
                { name: "Campus Life", path: "/campus-life" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white flex items-center space-x-2 transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Student Corner */}
          {/* <div>
            <h3 className="text-xl font-bold mb-6">Student Corner</h3>
            <ul className="space-y-3">
              {[
                { name: "Student Portal", path: "/student-portal" },
                { name: "Exam Results", path: "/student-portal/results" },
                { name: "Admit Cards", path: "/student-portal/admit-cards" },
                { name: "Syllabus", path: "/syllabus" },
                { name: "Fee Payment", path: "/student-portal/fees" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white flex items-center space-x-2 transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Connect */}
          <div>
            <h3 className="text-xl font-bold mb-6">Connect With Us</h3>
            <div className="flex space-x-4 mb-8">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: LinkedIn, href: "#" },
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-full hover:bg-[#0860b1] transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="bg-gray-800 p-4 rounded-lg w-96">
              <h4 className="font-semibold mb-2">Newsletter</h4>
              <p className="text-gray-400 text-sm mb-4">
                Subscribe to stay updated with the latest news and events
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-md text-gray-900 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#ea1b26] px-4 rounded-r-md hover:bg-[#c41820] transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()} Matoshri Pratishthan Group of
            Institutions, Nanded. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
