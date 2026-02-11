import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

 // 1. Hàm thêm sản phẩm (Cập nhật để nhận quantity tùy chọn)
const addToCart = (product) => {
  setCartItems((prevItems) => {
    const isExist = prevItems.find((item) => item.id === product.id);
    
    // Lấy số lượng muốn thêm (mặc định là 1 nếu không truyền vào)
    const quantityToAdd = product.quantity || 1;

    if (isExist) {
      return prevItems.map((item) =>
        item.id === product.id 
          ? { ...item, quantity: item.quantity + quantityToAdd } 
          : item
      );
    }
    return [...prevItems, { ...product, quantity: quantityToAdd }];
  });
};
 

  // 2. Hàm xóa sản phẩm
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };
 const clearCart = () => {
  setCartItems([]);
};
  // 3. Hàm cập nhật số lượng
  const updateQuantity = (id, amount) => {
    if (amount < 1) return;
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: amount } : item))
    );
  };

  // 4. Hàm tính tổng số lượng hiển thị trên Header
  const getCartCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // TẤT CẢ return phải nằm trong hàm CartProvider này
  return (
    <CartContext.Provider 
      value={{ cartItems, addToCart, removeFromCart, updateQuantity, getCartCount, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);