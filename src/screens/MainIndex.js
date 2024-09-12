import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import ProductList from "./Products/ProductList";
import ProductEdit from "./Products/ProductEdit";
import ProductAdd from "./Products/ProductAdd";
import Header from "../components/common/Header";
import CategoriesList from "./Categories/CategoriesList";
import OrderList from "./Orders/OrderList";
import OrderDetail from "./Orders/OrderDetail";
import CustomerList from "./Customers/CustomerList";
import CustomerDetail from "./Customers/CustomerDetail";
import Expense from "./Accounts/Expense";
import ProfilePage from "./Other Pages/ProfilePage";
import Icons from "./Other Pages/Icon";
import Dropdowns from "./Uicomponent/Dropdowns";
import ModalUI from "./Uicomponent/Modal";
import Calendar from "./App/Calendar";
import StaterPage from "./Stater Page/StaterPage";
import Documentation from "./Documentation/Documentation";
import CategoriesAdd from "./Categories/CategoriesAdd";
import CategoriesEdit from "./Categories/CategoriesEdit";

function MainIndex() {
  return (
    <div className="main px-lg-4 px-md-4">
      <Header />
      <div className="body d-flex py-3 ">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/product-edit/:id" element={<ProductEdit />} />
          <Route path="/product-add" element={<ProductAdd />} />
          <Route path="/categories-list" element={<CategoriesList />} />
          <Route path="/categories-edit/:id" element={<CategoriesEdit />} />
          <Route path="/categories-add" element={<CategoriesAdd />} />
          <Route path="/order-list" element={<OrderList />} />
          <Route path="/order-detail/:id" element={<OrderDetail />} />
          <Route path="/customer-list" element={<CustomerList />} />
          <Route path="/customer-detail/:id" element={<CustomerDetail />} />

          <Route path="/expense" element={<Expense />} />
          <Route path="/calendar" element={<Calendar />} />

          <Route path="/profile-pages" element={<ProfilePage />} />
          <Route path="/icons" element={<Icons />} />

          <Route path="/ui-dropdowns" element={<Dropdowns />} />
          <Route path="/ui-modalui" element={<ModalUI />} />
          <Route path="/stater-page" element={<StaterPage />} />
          <Route path="/documentation" element={<Documentation />} />

        </Routes>
      </div>
    </div>
  );
}
export default MainIndex;
