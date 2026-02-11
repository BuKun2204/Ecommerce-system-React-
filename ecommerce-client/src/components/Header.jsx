import React from 'react';
import { Search, ShoppingCart, Heart, User, LogOut } from 'lucide-react'; // Thêm LogOut icon
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';
const Header = () => {
  const { user, logout } = useAuth(); // Lấy thông tin user và hàm logout
  const { cartItems } = useCart(); 

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  // Sử dụng totalItems để hiển thị số lượng sản phẩm trong giỏ hàng
  return (
    <header className="w-full border-b bg-white sticky top-0 z-50">
      {/* 1. Top Banner */}
      <div className="bg-black text-white text-center py-2 text-sm">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! 
        <Link to="/" className="font-bold underline ml-2">ShopNow</Link>
      </div>

      {/* 2. Main Navigation */}
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-tight">Exclusive</Link>

        {/* Menu links */}
        <nav className="hidden md:flex items-center gap-8 text-base font-medium">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
          <Link to="/about" className="hover:underline">About</Link>
          
          {/* Ẩn Sign Up nếu đã đăng nhập */}
          {!user && (
            <Link to="/SignUp" className="hover:underline">Sign Up</Link>
          )}
        </nav>

        {/* Search & Actions */}
        <div className="flex items-center gap-4">
          <div className="relative hidden lg:flex items-center bg-gray-100 rounded px-3 py-2">
            <input 
              type="text" 
              placeholder="What are you looking for?" 
              className="bg-transparent outline-none text-sm w-48"
            />
            <Search size={18} className="text-gray-600" />
          </div>

          <div className="flex items-center gap-4">
            <Heart size={24} className="cursor-pointer hover:text-red-500" />
            
            <Link to="/cart" className="relative group">
              <ShoppingCart size={24} className="group-hover:text-red-500" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#DB4444] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center animate-in fade-in zoom-in">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* PHẦN THAY ĐỔI: Kiểm tra User để hiển thị icon/tên */}
            {user ? (
              <div className="flex items-center gap-3 ml-2 border-l pl-4">
                <div className="flex flex-col items-end">
                  <span className="text-xs text-gray-500">Welcome,</span>
                  <span className="text-sm font-bold text-[#DB4444]">{user.name}</span>
                </div>
                <button 
                  onClick={logout} 
                  title="Logout"
                  className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <LogOut size={20} className="text-gray-600 hover:text-red-500" />
                </button>
              </div>
            ) : (
              <Link to="/login" title="Login">
                <User size={24} className="cursor-pointer hover:text-red-500" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;