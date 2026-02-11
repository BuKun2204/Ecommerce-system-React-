import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { Star, Truck, RotateCcw, Heart } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  
  // Tìm sản phẩm dựa trên ID từ URL
  const product = products.find(p => p.id === parseInt(id)) || products[0];

  const handleAddToCart = (e) => {
    addToCart({ ...product, quantity });
    console.log("Đã thêm vào giỏ hàng");
  };

  const handleBuyNow = () => {
    addToCart({ ...product, quantity });
    navigate('/cart');
  };

  return (
    <div className="container mx-auto py-20 px-4">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-20">
        Account / {product.category} / <span className="text-black font-semibold">{product.name}</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-16">
        {/* BÊN TRÁI: HÌNH ẢNH */}
        <div className="flex flex-col-reverse lg:flex-row gap-4 w-full lg:w-2/3">
          {/* Ảnh nhỏ (Thumbnails) */}
          <div className="flex lg:flex-col gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-24 h-24 bg-[#F5F5F5] flex items-center justify-center rounded cursor-pointer border hover:border-[#DB4444]">
                <img src={product.image} alt="thumb" className="max-h-full object-contain p-2" />
              </div>
            ))}
          </div>
          {/* Ảnh lớn chính */}
          <div className="bg-[#F5F5F5] flex-grow flex items-center justify-center p-10 rounded">
            <img src={product.image} alt={product.name} className="max-w-full h-auto object-contain" />
          </div>
        </div>

        {/* BÊN PHẢI: THÔNG TIN SẢN PHẨM */}
        <div className="w-full lg:w-1/3 flex flex-col gap-6">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          
          <div className="flex items-center gap-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill={i < product.rating ? "currentColor" : "none"} />
              ))}
            </div>
            <span className="text-gray-400 text-sm">({product.reviews} Reviews)</span>
            <span className="text-gray-300">|</span>
            <span className="text-[#00FF66] text-sm font-medium">In Stock</span>
          </div>

          <div className="text-2xl font-semibold">${product.price}.00</div>
          
          <p className="text-sm leading-relaxed border-b pb-6">
            PlayStation 5 Controller Features with adaptive triggers and a built-in microphone, all integrated into an iconic comfortable design.
          </p>

          {/* Chọn số lượng và Mua hàng */}
          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center border rounded overflow-hidden">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-2 border-r hover:bg-[#DB4444] hover:text-white transition-colors"
              >-</button>
              <span className="px-6 py-2 font-bold">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-2 border-l hover:bg-[#DB4444] hover:text-white transition-colors"
              >+</button>
            </div>
            <button onClick={handleBuyNow} className="flex-grow bg-[#DB4444] text-white py-2.5 rounded font-medium hover:bg-red-600 transition-all">
              Buy Now
            </button>
            <button className="border p-2 rounded hover:bg-gray-100">
              <Heart size={24} />
            </button>
          </div>

          {/* Thông tin dịch vụ (CTM-SPT01) */}
          <div className="border rounded mt-4">
            <div className="flex items-center gap-4 p-4 border-b">
              <Truck size={32} />
              <div>
                <p className="font-bold text-sm">Free Delivery</p>
                <p className="text-xs underline cursor-pointer">Enter your postal code for Delivery Availability</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4">
              <RotateCcw size={32} />
              <div>
                <p className="font-bold text-sm">Return Delivery</p>
                <p className="text-xs">Free 30 Days Delivery Returns. <span className="underline cursor-pointer">Details</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;