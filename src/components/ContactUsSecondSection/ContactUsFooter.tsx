import React from "react";

const ContactUsFooter = () => {
  return (
    <footer className="relative bg-gradient-to-b from-black via-gray-700 to-white text-gray-300 px-6 md:px-12 py-10">
      <div className="max-w-7xl mx-auto">
        {/* Footer Box with Shadow */}
        <div className="bg-black shadow-lg rounded-lg p-8 md:p-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Column 1 */}
            <div className="flex flex-col md:flex-row items-start md:items-center md:justify-start  gap-4">
              <div className="w-auto flex flex-col items-start md:items-start  ">
                <div className="flex flex-col gap-4 bg-white p-2 rounded-full h-full">
                  <a
                    href="#"
                    className="text-black flex flex-col items-center justify-center hover:text-yellow-400 transition"
                  >
                    <i className="fab fa-facebook-f text-lg"></i>
                  </a>
                  <a
                    href="#"
                    className="text-black flex flex-col items-center justify-center hover:text-yellow-400 transition"
                  >
                    <i className="fab fa-twitter text-lg"></i>
                  </a>
                  <a
                    href="#"
                    className="text-black flex flex-col items-center justify-center hover:text-yellow-400 transition"
                  >
                    <i className="fab fa-instagram text-lg"></i>
                  </a>
                  <a
                    href="#"
                    className="text-black flex flex-col items-center justify-center hover:text-yellow-400 transition"
                  >
                    <i className="fab fa-linkedin-in text-lg"></i>
                  </a>
                </div>
              </div>
              <div className="w-full">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Company
                </h3>
                <ul className="space-y-2">
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

              {/* Social Media Icons Column */}
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
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

            {/* Column 3 */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Resources
              </h3>
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

            {/* Column 4 */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Follow Us
              </h3>
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
        </div>

        {/* Copyright Section */}
        {/* <div className="text-center text-gray-500 text-sm mt-8 pb-4">
          © {new Date().getFullYear()} YourCompany. All rights reserved.
        </div> */}
      </div>
    </footer>
  );
};

export default ContactUsFooter;
