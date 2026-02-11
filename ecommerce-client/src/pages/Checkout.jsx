import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { Link, useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cartItems, clearCart } = useCart(); // Giả sử bạn thêm hàm clearCart vào Context
  const navigate = useNavigate();
  
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    city: '',
    phone: '',
    email: '',
    paymentMethod: 'cod'
  });

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    // Logic xử lý đơn hàng (Gửi API hoặc lưu LocalStorage)
    console.log("Order Data:", { ...formData, items: cartItems, total: subtotal });
    
    alert("Đặt hàng thành công! Cảm ơn bạn đã mua sắm.");
    // clearCart(); // Xóa giỏ hàng sau khi đặt thành công
    navigate('/'); 
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <nav className="text-sm text-gray-500 mb-10">
        Account / My Account / CheckOut
      </nav>

      <h2 className="text-3xl font-semibold mb-10">Billing Details</h2>

      <div className="flex flex-col lg:flex-row gap-20">
        {/* BÊN TRÁI: FORM THÔNG TIN */}
        <form id="checkout-form" onSubmit={handlePlaceOrder} className="w-full lg:w-1/2 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-gray-400">Full Name<span className="text-[#DB4444]">*</span></label>
            <input 
              type="text" required 
              className="bg-[#F5F5F5] p-3 rounded outline-none focus:ring-1 focus:ring-[#DB4444]" 
              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-gray-400">Street Address<span className="text-[#DB4444]">*</span></label>
            <input 
              type="text" required 
              className="bg-[#F5F5F5] p-3 rounded outline-none focus:ring-1 focus:ring-[#DB4444]" 
              onChange={(e) => setFormData({...formData, address: e.target.value})}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-gray-400">Town/City<span className="text-[#DB4444]">*</span></label>
            <input 
              type="text" required 
              className="bg-[#F5F5F5] p-3 rounded outline-none focus:ring-1 focus:ring-[#DB4444]" 
              onChange={(e) => setFormData({...formData, city: e.target.value})}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-gray-400">Phone Number<span className="text-[#DB4444]">*</span></label>
            <input 
              type="tel" required 
              className="bg-[#F5F5F5] p-3 rounded outline-none focus:ring-1 focus:ring-[#DB4444]" 
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-gray-400">Email Address<span className="text-[#DB4444]">*</span></label>
            <input 
              type="email" required 
              className="bg-[#F5F5F5] p-3 rounded outline-none focus:ring-1 focus:ring-[#DB4444]" 
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
        </form>

        {/* BÊN PHẢI: TÓM TẮT ĐƠN HÀNG */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-12 h-12 object-contain" />
                  <span className="text-sm">{item.name} x {item.quantity}</span>
                </div>
                <span>${item.price * item.quantity}</span>
              </div>
            ))}
          </div>

          <div className="border-t pt-4 flex flex-col gap-4">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>${subtotal}</span>
            </div>
            <div className="flex justify-between border-b pb-4">
              <span>Shipping:</span>
              <span className="text-[#00FF66]">Free</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span>${subtotal}</span>
            </div>
          </div>

          {/* Phương thức thanh toán */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="radio" name="payment" value="bank" className="w-5 h-5 accent-black" onChange={() => setFormData({...formData, paymentMethod: 'bank'})} />
                <span>Bank</span>
              </label>
              <div className="flex gap-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Visa_2014_logo_detail.svg" alt="visa" className="h-4" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="master" className="h-6" />
              </div>
            </div>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="radio" name="payment" value="cod" defaultChecked className="w-5 h-5 accent-black" onChange={() => setFormData({...formData, paymentMethod: 'cod'})} />
              <span>Cash on delivery</span>
            </label>
          </div>

          <button 
            type="submit" 
            form="checkout-form"
            className="bg-[#DB4444] text-white py-4 rounded font-medium hover:bg-red-600 transition-all w-full lg:w-1/2"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;