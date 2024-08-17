import React from 'react';

const Footer = () => {
  return (
 
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-2">
        <div className="flex flex-row justify-evenly">
          
          <div className="w-full sm:w-1/3 mb-6">
            <h4 className="text-lg font-semibold mb-4">Abstract</h4>
            <p className="text-sm">
             Branches
            </p>
          </div>
          
          <div className="w-full sm:w-1/3 mb-6">
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="text-sm">
              <li><a href="#home" className="hover:underline">Blog</a></li>
              <li><a href="#services" className="hover:underline">Help Center</a></li>
              <li><a href="#about" className="hover:underline">Release Notes</a></li>
              <li><a href="#contact" className="hover:underline">Status</a></li>
            </ul>
          </div>
          
          <div className="w-full sm:w-1/3 mb-6">
            <h4 className="text-lg font-semibold mb-4">Community</h4>
            <p className="text-sm">Twitter</p>
            <p className="text-sm">LinkedIn</p>
            <p className="text-sm">Facebook</p>
            <p className="text-sm">Dribbble</p>
            <p className="text-sm">Podcast</p>
          </div>
          <div className="w-full sm:w-1/3 mb-6">
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <p className="text-sm">About Us</p>
            <p className="text-sm">Careers</p>
            <p className="text-sm">Legal</p>
            <p className="text-sm"></p>
            <p className="text-sm">Contact Us</p>
            <p className="text-sm">prathamhadap@gmail.com</p>
          </div>
          <div className=" pt-4 text-center text-sm">
          <p>&copy; Copyright {new Date().getFullYear()} </p>
          <p>Abstract Studio Design Inc</p>
          <p>All rights reserved.</p>
          <div className="mt-2">
            <a href="www.google.com" className="text-gray-400 hover:text-white mx-2">Privacy Policy</a>
            <a href="www.google.com" className="text-gray-400 hover:text-white mx-2">Terms of Service</a>
          </div>
        </div>
        </div>
       
      </div>
    </footer>
  );
};


export default Footer;
