import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate(); // Khởi tạo điều hướng

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
    email: formData.email,
    password: formData.password,
    name: formData.name
  };
  
  localStorage.setItem('registeredUser', JSON.stringify(newUser));
  
  alert("Đăng ký thành công! Hãy dùng tài khoản này để đăng nhập.");
  navigate('/login');

    // 1. Logic giả lập lưu tài khoản (Sau này sẽ gọi API)
    console.log("Đã đăng ký tài khoản:", formData);

    // 2. Thông báo cho người dùng
    alert("Đăng ký thành công! Hãy đăng nhập để tiếp tục.");

    // 3. Chuyển hướng sang trang Login
    navigate('/login'); 
  };

  return (
    <div className="container mx-auto py-10 px-4 flex flex-col lg:flex-row items-center gap-20">
      {/* Hình ảnh minh họa */}
      <div className="hidden lg:block w-1/2 bg-[#CBE4E8]">
        <img 
          src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7863.jpg" 
          alt="side-image" className="w-full h-full object-cover" 
        />
      </div>

      {/* Form Đăng ký */}
      <div className="w-full lg:w-1/3 flex flex-col gap-6">
        <h2 className="text-3xl font-semibold tracking-wider">Create an account</h2>
        <p className="text-gray-600">Enter your details below</p>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input 
            type="text" required placeholder="Name" 
            className="border-b border-gray-300 py-2 outline-none focus:border-[#DB4444] transition-colors"
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          <input 
            type="email" required placeholder="Email or Phone Number" 
            className="border-b border-gray-300 py-2 outline-none focus:border-[#DB4444] transition-colors"
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          <input 
            type="password" required placeholder="Password" 
            className="border-b border-gray-300 py-2 outline-none focus:border-[#DB4444] transition-colors"
            onChange={(e) => setFormData({...formData, password: e.target.value})}
          />
          
          <button type="submit" className="bg-[#DB4444] text-white py-4 rounded mt-4 hover:bg-red-600 transition-all font-medium">
            Create Account
          </button>
        </form>

        <p className="text-center text-gray-600">
          Already have account? 
          <Link to="/login" className="border-b border-gray-500 font-medium ml-2 hover:text-[#DB4444] hover:border-[#DB4444] transition-all">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;