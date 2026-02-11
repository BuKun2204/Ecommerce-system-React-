import React from 'react';
import { Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Cột 1 */}
        <div>
          <h3 className="text-xl font-bold mb-6">Exclusive</h3>
          <p className="mb-4 font-medium">Subscribe</p>
          <p className="text-sm mb-4">Get 10% off your first order</p>
          <div className="flex items-center border border-white rounded p-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-transparent outline-none text-sm w-full"
            />
            <Send size={18} />
          </div>
        </div>

        {/* Cột 2 - Hỗ trợ CTM-SPT01 */}
        <div>
          <h3 className="text-lg font-bold mb-6">Support</h3>
          <address className="not-italic text-sm space-y-3 text-gray-300">
            <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </address>
        </div>

        {/* Cột 3 - Tài khoản CTM-ACC01 */}
        <div>
          <h3 className="text-lg font-bold mb-6">Account</h3>
          <ul className="text-sm space-y-3 text-gray-300">
            <li className="hover:text-white cursor-pointer">My Account</li>
            <li className="hover:text-white cursor-pointer">Login / Register</li>
            <li className="hover:text-white cursor-pointer">Cart</li>
            <li className="hover:text-white cursor-pointer">Wishlist</li>
          </ul>
        </div>

        {/* Cột 4 - Liên kết nhanh */}
        <div>
          <h3 className="text-lg font-bold mb-6">Quick Link</h3>
          <ul className="text-sm space-y-3 text-gray-300">
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms Of Use</li>
            <li className="hover:text-white cursor-pointer">FAQ</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>
      </div>

      <div className="mt-16 border-t border-gray-800 pt-4 text-center text-gray-500 text-sm">
        © Copyright Rimel 2022. All right reserved
      </div>
    </footer>
  );
};

export default Footer;