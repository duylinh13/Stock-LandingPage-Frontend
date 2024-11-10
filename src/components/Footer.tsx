import React from "react";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa"; // Import icons from react-icons
import logo from "../assets/logo.png"; // Import logo from assets folder

interface Link {
  name: string;
  href: string;
}

const Footer = () => {
  const companyLinks: Link[] = [
    { name: "About Us", href: "#" },
    { name: "Journey", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Help", href: "#" },
  ];

  const contactLinks = [
    { name: "+91 xxxxxxxxxx", href: "#", icon: <FaPhoneAlt /> },
    { name: "Vijay Nagar Square, Indore", href: "#", icon: <FaMapMarkerAlt /> },
    { name: "contact@maven.com", href: "#", icon: <FaEnvelope /> },
  ];

  const socialLinks = [
    { name: "Facebook", href: "#", icon: <FaFacebook /> },
    { name: "Twitter", href: "#", icon: <FaTwitter /> },
    { name: "Instagram", href: "#", icon: <FaInstagram /> },
    { name: "LinkedIn", href: "#", icon: <FaLinkedin /> },
  ];

  return (
    <footer>
      <div className="pt-4 pb-0 px-4 sm:px-6 mx-auto">
        <div className="flex flex-col sm:flex-row justify-between">
          {/* Company Info */}
          <div className="p-5 sm:w-4/12 flex flex-col items-center footer-section">
            <div className="flex items-center mb-4">
              <img
                src={logo}
                alt="Maven Logo - Capital Market Investment Platform"
                className="h-12 mr-2"
              />
              <h3 className="font-bold text-3xl text-center">Maven</h3>
            </div>
            <p className="text-gray-300 text-xs sm:text-sm text-center">
              Maximize your capital market investment with Maven's convenience
              and variety of options.
            </p>

            {/* Social Links */}
            <div
              className="flex space-x-4 mt-4"
              aria-label="Social Media Links"
            >
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-blue-400 hover:text-blue-300 text-xl"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div className="p-5 sm:w-4/12 text-center footer-section">
            <h3 className="font-bold text-lg mb-4">Companies</h3>
            <ul className="space-y-1 flex flex-col ">
              {companyLinks.map((link) => (
                <li key={link.name} className="w-full text-center">
                  <a
                    className="text-blue-400 hover:text-blue-300 text-xs sm:text-sm md:text-base "
                    href={link.href}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Links */}
          <div className="p-5 sm:w-4/12 text-center footer-section">
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul>
              {contactLinks.map((link) => (
                <li
                  key={link.name}
                  className="my-2 flex items-center justify-center text-xs sm:text-sm"
                >
                  <span className="text-blue-400 mr-2">{link.icon}</span>
                  <a
                    className="text-blue-400 hover:text-blue-300"
                    href={link.href}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
