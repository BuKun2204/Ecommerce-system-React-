import React from 'react';
import { useCart } from '../contexts/CartContext';
import { Trash2, ChevronUp, ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();
  const navigate = useNavigate();
  const { user } = useAuth(); 

  const handleCheckout = () => {
    if (!user) {
    alert("Vui lòng đăng nhập để tiến hành thanh toán!");
    navigate('/login', { state: { from: '/checkout' } });
  } else {
    navigate('/checkout');
  }
};

  // Tính toán tổng tiền
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4">
        <h2 className="text-2xl font-medium">Giỏ hàng của bạn đang trống</h2>
        <p className="text-gray-500">Hãy chọn thêm sản phẩm trước khi thanh toán nhé!</p>
        <Link to="/" className="bg-[#DB4444] text-white px-10 py-4 rounded hover:bg-red-600 transition-colors">
          Quay lại cửa hàng
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-400 mb-10">
        <Link to="/" className="hover:text-black">Home</Link> / <span className="text-black">Cart</span>
      </div>

      {/* Cart Table */}
      <div className="overflow-x-auto mb-10">
        <table className="w-full border-separate border-spacing-y-6">
          <thead>
            <tr className="shadow-[0px_1px_13px_rgba(0,0,0,0.05)] bg-white rounded">
              <th className="p-6 text-left font-normal">Sản phẩm</th>
              <th className="p-6 text-left font-normal">Giá</th>
              <th className="p-6 text-left font-normal">Số lượng</th>
              <th className="p-6 text-right font-normal">Tổng cộng</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="shadow-[0px_1px_13px_rgba(0,0,0,0.05)] bg-white rounded group">
                <td className="p-6 flex items-center gap-4 min-w-[300px]">
                  <div className="relative">
                    <img src={item.image} alt={item.name} className="w-14 h-14 object-contain" />
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="absolute -top-2 -left-2 bg-[#DB4444] text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
                    >
                      <Trash2 size={12} />
                    </button>
                  </div>
                  <span className="font-medium">{item.name}</span>
                </td>
                <td className="p-6">${item.price}</td>
                <td className="p-6">
                  <div className="flex items-center border border-gray-300 rounded w-20 px-2 py-1 justify-between">
                    <span>{item.quantity.toString().padStart(2, '0')}</span>
                    <div className="flex flex-col">
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="hover:text-[#DB4444]"><ChevronUp size={14}/></button>
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="hover:text-[#DB4444]"><ChevronDown size={14}/></button>
                    </div>
                  </div>
                </td>
                <td className="p-6 text-right font-medium">${item.price * item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between items-center mb-10">
        <Link to="/" className="border border-black px-10 py-4 rounded font-medium hover:bg-black hover:text-white transition-all">
          Quay lại cửa hàng
        </Link>
        <button className="border border-black px-10 py-4 rounded font-medium hover:bg-black hover:text-white transition-all">
          Cập nhật giỏ hàng
        </button>
      </div>

      {/* Bottom Section: Coupon & Total */}
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        <div className="flex flex-wrap gap-4 h-fit">
          <input 
            type="text" 
            placeholder="Mã giảm giá" 
            className="border border-black px-6 py-4 rounded w-64 focus:outline-none"
          />
          <button className="bg-[#DB4444] text-white px-10 py-4 rounded font-medium hover:bg-red-600">
            Áp dụng
          </button>
        </div>

        <div className="border-2 border-black p-8 rounded min-w-[400px]">
          <h3 className="text-xl font-medium mb-6">Tổng đơn hàng</h3>
          <div className="flex justify-between border-b border-gray-300 pb-4 mb-4">
            <span>Tạm tính:</span>
            <span>${subtotal}</span>
          </div>
          <div className="flex justify-between border-b border-gray-300 pb-4 mb-4">
            <span>Vận chuyển:</span>
            <span className="text-green-600">Miễn phí</span>
          </div>
          <div className="flex justify-between py-2 text-lg font-medium mb-6">
            <span>Tổng cộng:</span>
            <span>${subtotal}</span>
          </div>
          <button onClick={handleCheckout} className="w-full bg-[#DB4444] text-white py-4 rounded font-medium hover:bg-red-600 transition-colors">
            Tiến hành thanh toán
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;