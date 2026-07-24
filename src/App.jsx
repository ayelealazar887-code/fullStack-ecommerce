import Contact from "./components/Contact"
import About from "./components/About";
import Navbar from "./components/Navbar";
import Testimonies from "./components/Testimonies";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ProductDetails from "./components/productDetails";
import Layout from "./pages/Layout"
import Shop from "./pages/Shop";

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/testimonials" element={<Testimonies />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/product/:id" element={<ProductDetails />} />
      <Route element={<Layout />}>
        <Route path="/dashboard/shop" element={<Shop />} />
      </Route>
    </Routes>

    </>
  );
}

export default App;
