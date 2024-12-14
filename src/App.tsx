import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/login/RegisterPage";
import ForgotPassword from "./pages/login/ForgotPassword";
import ProductPage from "./pages/product/ProductPage";
import VerifyCodePage from "./pages/login/VerifyCodePage";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import InventoryPage from "./pages/inventory/InventoryPage";
import Orders from "./pages/orders/Orders";
import Suppliers from "./pages/suppliers/Suppliers";
import Reports from "./pages/reports/Reports";
import Store from "./pages/store/Store";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="password" element={<ForgotPassword />} />
        <Route path="verify" element={<VerifyCodePage />} />
        {/* <Route path="dashboard" element={<DashboardPage />} />
        <Route path="inventory" element={<InventoryPage />} />
        <Route path="store" element={<Store />} /> */}

        <Route path="/layout">
          <Route path="" element={<Layout />}>
            <Route path="product" element={<ProductPage />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="inventory" element={<InventoryPage />} />
            <Route path="orders" element={<Orders />} />
            <Route path="suppliers" element={<Suppliers />} />
            <Route path="reports" element={<Reports />} />
            <Route path="store" element={<Store />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
