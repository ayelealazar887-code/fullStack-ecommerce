import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Testimonies from "./components/Testimonies";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/testimonials" element={<Testimonies />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Dashboard Layout */}
      <Route path="/dashboard" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="shop" element={<Shop />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="cart" element={<Cart />} />
        <Route path="cart/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;