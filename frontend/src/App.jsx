import { BrowserRouter, Routes, Route } from "react-router-dom";

// USER LAYOUT
import UserLayout from "./layouts/UserLayout";

// ADMIN LAYOUT
import AdminLayout from "./layouts/AdminLayout";

// USER PAGES
import Home from "./pages/user/Home";
import Products from "./pages/user/Products";
import Cart from "./pages/user/Cart";
import Login from "./pages/user/Login";
import Register from "./pages/user/Register";

// ADMIN PAGES
import Dashboard from "./pages/admin/Dashboard";
import AddProduct from "./pages/admin/AddProduct";
import ManageProducts from "./pages/admin/ManageProducts";
import Orders from "./pages/admin/Orders";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* USER ROUTES */}
        <Route path="/" element={<UserLayout />}>

          <Route index element={<Home />} />

          <Route path="products" element={<Products />} />

          <Route path="cart" element={<Cart />} />

          <Route path="login" element={<Login />} />

          <Route path="register" element={<Register />} />

        </Route>


        {/* ADMIN ROUTES */}
        <Route path="/admin" element={<AdminLayout />}>

          <Route index element={<Dashboard />} />

          <Route path="add-product" element={<AddProduct />} />

          <Route path="manage-products" element={<ManageProducts />} />

          <Route path="orders" element={<Orders />} />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;