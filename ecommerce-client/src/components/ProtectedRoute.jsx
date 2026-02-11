import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    // Nếu chưa đăng nhập, điều hướng về login và lưu lại vị trí trang hiện tại
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Nếu đã đăng nhập, cho phép đi tiếp vào trang con (children)
  return children;
};

export default ProtectedRoute;