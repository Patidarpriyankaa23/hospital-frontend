import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className="bg-pink-900 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start px-6">
       
        {/* Useful Links Section */}
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0 font-serif">
          <h1 className="text-4xl font-semibold py-5">Useful Links</h1>
          <Link to="/about" className="hover:text-gray-300 mb-1">About Us</Link>
          <Link to="/privacy" className="hover:text-gray-300 mb-1">Privacy Policy</Link>
          <Link to="/Terms" className="hover:text-gray-300 mb-1">Terms & Conditions</Link>
        </div>

        {/* Get In Touch Section */}
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0 font-serif">
          <h1 className="text-4xl font-semibold py-5">Get In Touch</h1>
          <p className="text-lg mb-2">Address: 123 Health St, Wellness City, HC 45678</p>
          <p className="text-lg mb-2">Phone: (123) 456-7890</p>
          <p className="text-lg mb-4">Email: contact@healthcare.com</p>
          
          {/* Contact Us Button */}
          <Link to="/contact">
            <button className="bg-white text-pink-900 py-2 px-6 rounded-full font-semibold hover:bg-pink-100 transition duration-300">
              Contact Us
            </button>
          </Link>
        </div>

      </div>

      {/* Social Media and Copyright Section */}
      <div className="flex flex-col items-center justify-center px-6">
        {/* Social Media Links */}
        <div className="flex space-x-6 mb-4">
          <Link to="#" className="hover:text-gray-300">
            <FontAwesomeIcon icon={faFacebookF} className="text-2xl" />
          </Link>
          <Link to="#" className="hover:text-gray-300">
            <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
          </Link>
          <Link to="#" className="hover:text-gray-300">
            <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
          </Link>
          <Link to="#" className="hover:text-gray-300">
            <FontAwesomeIcon icon={faLinkedinIn} className="text-2xl" />
          </Link>
        </div>

        {/* Copyright Text */}
        <p className="text-lg text-center">© 2025 Healthcare, All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
