import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate(); // Khởi tạo điều hướng
  const { login } = useAuth();
  const handleLogin = (e) => {
  e.preventDefault();
  
  // 1. Lấy thông tin đã đăng ký từ máy ra
  const savedUser = JSON.parse(localStorage.getItem('registeredUser'));

  // 2. Kiểm tra
  if (!savedUser) {
    alert("Tài khoản không tồn tại. Vui lòng đăng ký trước!");
    return;
  }

  if (formData.email === savedUser.email && formData.password === savedUser.password) {
    // Nếu khớp: Thực hiện đăng nhập thành công
    alert(`Chào mừng ${savedUser.name} đã quay trở lại!`);
    
    login(savedUser); 
    
    navigate('/'); // Về trang chủ
  } else {
    // Nếu sai
    alert("Email hoặc mật khẩu không chính xác. Vui lòng thử lại!");
  }
};

  return (
    <div className="container mx-auto py-10 px-4 flex flex-col lg:flex-row items-center gap-20">
      <div className="hidden lg:block w-1/2 bg-[#CBE4E8]">
        <img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg" alt="side" />
      </div>

      <div className="w-full lg:w-1/3 flex flex-col gap-6">
        <h2 className="text-3xl font-semibold">Log in to Exclusive</h2>
        <p className="text-gray-600">Enter your details below</p>
        
        <form onSubmit={handleLogin} className="flex flex-col gap-8">
          <input 
            type="email" placeholder="Email or Phone Number" 
            className="border-b border-gray-300 py-2 outline-none focus:border-black"
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          <input 
            type="password" placeholder="Password" 
            className="border-b border-gray-300 py-2 outline-none focus:border-black"
            onChange={(e) => setFormData({...formData, password: e.target.value})}
          />
          
          <div className="flex items-center justify-between">
            <button className="bg-[#DB4444] text-white px-10 py-4 rounded hover:bg-red-600 transition-all">
              Log In
            </button>
            <Link to="/forgot-password" size="sm" className="text-[#DB4444] hover:underline">
              Forgot Password?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;