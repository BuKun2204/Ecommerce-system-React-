import React from 'react';
import { Heart, Eye, ShoppingCart} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const {addToCart} = useCart();
  const handleAddToCart=(e)=>{
    e.preventDefault();
    e.stopPropagation();

    addToCart(product);

    navigate('/cart');
  }
  return (
    <div className="group relative bg-white rounded-sm overflow-hidden border border-gray-100 hover:shadow-md transition-all">
      {/* Phần ảnh và badge */}
      <div className="relative bg-[#F5F5F5] h-62.5 flex items-center justify-center p-8">
        <Link to={`/product/${product.id}`} className="w-full h-full flex items-center justify-center">
          <img src={product.image} alt={product.name} className="max-h-full object-contain mix-blend-multiply" />
        </Link>

        {/* Badge giảm giá */}
        <span className="absolute top-3 left-3 bg-[#DB4444] text-white text-xs px-2 py-1 rounded-sm">
          -{product.discount}%
        </span>

        {/* Nút hành động nhanh */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 transform translate-x-12 group-hover:translate-x-0 transition-transform duration-300">
          <button className="bg-white p-2 rounded-full hover:bg-[#DB4444] hover:text-white shadow-sm transition-colors">
            <Heart size={18} />
          </button>
          <Link to={`/product/${product.id}`} className="bg-white p-2 rounded-full hover:bg-[#DB4444] hover:text-white shadow-sm transition-colors">
            <Eye size={18} />
          </Link>
        </div>

        {/* Nút Add to cart*/}
        <button onClick={handleAddToCart} className="absolute bottom-0 w-full bg-black text-white py-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center gap-2">
          <ShoppingCart size={16} /> Add To Cart
        </button>
      </div>

      {/* Thông tin sản phẩm */}
      <div className="py-4 flex flex-col gap-2">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-bold text-base truncate hover:text-[#DB4444] transition-colors">
            {product.name}
          </h3>
        </Link>

        <div className="flex gap-3 items-center">
          <span className="text-[#DB4444] font-bold">${product.price}</span>
          {product.oldPrice && (
            <span className="text-gray-400 line-through text-sm">${product.oldPrice}</span>
          )}
        </div>
        <div className="flex items-center gap-2 text-yellow-400 text-sm">
          {"★".repeat(product.rating)}
          <span className="text-gray-400">({product.reviews})</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;