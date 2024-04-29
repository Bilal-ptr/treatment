import React from 'react';
import { faFacebookF, faTwitter, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className="bg-gray-100 h-screen pt-12">
      {/* Top section */}
      <div className="top-footer bg-gray-200 py-4">
        <div className="container mx-auto p-4">
          <h2 className="text-2xl font-bold mb-4">Subscribe our News Letter</h2>
          <p className="text-gray-600">Get the latest news and updates from our team.</p>
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Subscribe</button>
        </div>
      </div>

      {/* Main section */}
      <div className="main-footer flex flex-wrap justify-between py-12">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src="logo.png" alt="Logo" className="h-16 mb-4" />
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna a elementum interdum, nisi nisi volutpat velit, et volutpat sapien nunc et velit.
          </p>
        </div>

        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h3 className="text-xl font-bold mb-4">Links</h3>
          <ul className="list-none p-0">
            <li className="mb-2"><a href="#" className="text-gray-600 hover:underline">Link 1</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:underline">Link 2</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:underline">Link 3</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:underline">Link 4</a></li>
          </ul>
        </div>

        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h3 className="text-xl font-bold mb-4">Links</h3>
          <ul className="list-none p-0">
            <li className="mb-2"><a href="#" className="text-gray-600 hover:underline">Link 5</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:underline">Link 6</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:underline">Link 7</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:underline">Link 8</a></li>
          </ul>
        </div>

        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h3 className="text-xl font-bold mb-4">Links</h3>
          <ul className="list-none p-0">
            <li className="mb-2"><a href="#" className="text-gray-600 hover:underline">Link 9</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:underline">Link 10</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:underline">Link 11</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:underline">Link 12</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:underline">Link 13</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:underline">Link 14</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:underline">Link 15</a></li>
          </ul>
        </div>
      </div>

     {/* Bottom section */}
     <div className="bottom-footer flex bg-gray-200 py-4">
        <div className="container mx-auto p-4">
          <div className="justify-between items-center">
            {/* Social icons */}
            <div className="space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-800"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-gray-600 hover:text-gray-800"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-gray-600 hover:text-gray-800"><i className="fab fa-youtube"></i></a>
              <a href="#" className="text-gray-600 hover:text-gray-800"><i className="fab fa-tiktok"></i></a>
            </div>


            {/* Copyright */}
            <p className="text-gray-600">© 2022 My Company. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;