import React from "react";

const ContactUsFooter = () => {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-700 to-gray-500 text-gray-300 px-6 md:px-12 py-2">
      <div className="max-w-7xl mx-auto">
        {/* Footer Container */}
        <div className="bg-black shadow-lg rounded-lg py-8 md:py-12 px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Column 1: Social Media + Links */}
            <div className="  flex flex-col sm:flex-row items-center sm:items-start gap-6  ">
              {/* Social Media Icons */}
              <div className="flex flex-row sm:flex-col bg-white p-2 h-full rounded-full items-center">
                <a
                  href="#"
                  className="text-black hover:text-yellow-400 transition p-1 sm:p-[2px]"
                >
                  <i className="fab fa-facebook-f text-lg sm:text-sm"></i>
                </a>
                <a
                  href="#"
                  className="text-black hover:text-yellow-400 transition p-1 sm:p-[2px]"
                >
                  <i className="fab fa-twitter text-lg sm:text-sm"></i>
                </a>
                <a
                  href="#"
                  className="text-black hover:text-yellow-400 transition p-1 sm:p-[2px]"
                >
                  <i className="fab fa-instagram text-lg sm:text-sm"></i>
                </a>
                <a
                  href="#"
                  className="text-black hover:text-yellow-400 transition p-1 sm:p-[2px]"
                >
                  <i className="fab fa-linkedin-in text-lg sm:text-sm"></i>
                </a>
              </div>

              {/* Company Links */}
              <ul className="space-y-2 text-center sm:text-left">
                <li>
                  <a href="#" className="hover:text-yellow-400 transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400 transition">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400 transition">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400 transition">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: Support */}
            <div className="text-center sm:text-left  ">
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-yellow-400 transition">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400 transition">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400 transition">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400 transition">
                    Live Chat
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-yellow-400 transition">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400 transition">
                    Guides
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400 transition">
                    Partners
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400 transition">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Follow Us */}
            <div className="text-center sm:text-left">
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-yellow-400 transition">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400 transition">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400 transition">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400 transition">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Separator Line */}
          <div className="bg-gray-400 h-[2px] w-full mt-8 md:mt-12"></div>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-gray-500 text-sm mt-8">
          © {new Date().getFullYear()} YourCompany. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default ContactUsFooter;
