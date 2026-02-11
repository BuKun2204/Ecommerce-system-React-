import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart'; // Giả sử bạn sẽ tạo file này
import { CartProvider } from './contexts/CartContext';
import Checkout from './pages/Checkout';
import SignUp from './components/SignUp';
import Login from './components/Login';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
function App() {
  return (
    <AuthProvider>
    <CartProvider> 
      <Router>
        <div className="min-h-screen flex flex-col font-sans">
          <Header />
          
          <main className="grow container mx-auto px-4 py-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </CartProvider>
    </AuthProvider>
  );
}

export default App;