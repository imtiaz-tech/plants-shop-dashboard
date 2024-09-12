import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import ProductList from "./Products/ProductList";
import ProductEdit from "./Products/ProductEdit";
import ProductDetail from "./Products/ProductDetail";
import ProductAdd from "./Products/ProductAdd";
import ShoppingCart from "./Products/ShoppingCart";
import Header from "../components/common/Header";
import CategoriesList from "./Categories/CategoriesList";
import OrderList from "./Orders/OrderList";
import OrderDetail from "./Orders/OrderDetail";
import CustomerList from "./Customers/CustomerList";
import CustomerDetail from "./Customers/CustomerDetail";
import StockList from "./Inventory/StockList";
import Purchase from "./Inventory/Purchase";
import Supplier from "./Inventory/Supplier";
import Return from "./Inventory/Return";
import Departments from "./Inventory/Departments";
import Expense from "./Accounts/Expense";
import Salaryslip from "./Accounts/Salaryslip";
import ProfilePage from "./Other Pages/ProfilePage";
import PricePlanExample from "./Other Pages/PricePlanExample";
import ContactUs from "./Other Pages/ContactUs";
import Icons from "./Other Pages/Icon";
import FormsExample from "./Other Pages/FormsExample";
import TableExample from "./Other Pages/TableExample";
import ChartsExample from "./Other Pages/ChartsExample";
import Alerts from "./Uicomponent/Alerts";
import Badges from "./Uicomponent/Badge";
import Breadcrumb from "./Uicomponent/Breadcrumb";
import Buttons from "./Uicomponent/Buttons";
import Cards from "./Uicomponent/Card";
import Carousel from "./Uicomponent/Carousel";
import Collapse from "./Uicomponent/Collapse";
import Dropdowns from "./Uicomponent/Dropdowns";
import ListGroup from "./Uicomponent/ListGroup";
import ModalUI from "./Uicomponent/Modal";
import NavbarUI from "./Uicomponent/Navbar";
import NavsUI from "./Uicomponent/Navs";
import PaginationUI from "./Uicomponent/Pagination";
import PopoversUI from "./Uicomponent/Popovers";
import ProgressUI from "./Uicomponent/Progress";
import Scrollspy from "./Uicomponent/Scrollspy";
import SpinnersUI from "./Uicomponent/Spinners";
import ToastsUI from "./Uicomponent/Toasts";
import Calendar from "./App/Calendar";
import StaterPage from "./Stater Page/StaterPage";
import Documentation from "./Documentation/Documentation";
import Changelog from "./Changelog/Changelog";
import CategoriesAdd from "./Categories/CategoriesAdd";
import CategoriesEdit from "./Categories/CategoriesEdit";
import Help from "./Help/Help";

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
          <Route path="/product-detail" element={<ProductDetail />} />
          <Route path="/product-add" element={<ProductAdd />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path="/categories-list" element={<CategoriesList />} />
          <Route path="/categories-edit/:id" element={<CategoriesEdit />} />
          <Route path="/categories-add" element={<CategoriesAdd />} />
          <Route path="/order-list" element={<OrderList />} />
          <Route path="/order-detail/:id" element={<OrderDetail />} />
          <Route path="/customer-list" element={<CustomerList />} />
          <Route path="/customer-detail/:id" element={<CustomerDetail />} />
          <Route path="/stock-list" element={<StockList />} />
          <Route path="/purchase" element={<Purchase />} />
          <Route path="/supplier" element={<Supplier />} />
          <Route path="/return" element={<Return />} />
          <Route path="/departments" element={<Departments />} />

          <Route path="/expense" element={<Expense />} />
          <Route path="/salaryslip" element={<Salaryslip />} />
          <Route path="/calendar" element={<Calendar />} />

          <Route path="/profile-pages" element={<ProfilePage />} />
          <Route path="/price-plan" element={<PricePlanExample />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/icons" element={<Icons />} />
          <Route path="/form-example" element={<FormsExample />} />
          <Route path="/table-example" element={<TableExample />} />
          <Route path="/charts-example" element={<ChartsExample />} />

          <Route path="/ui-alerts" element={<Alerts />} />
          <Route path="/ui-badge" element={<Badges />} />
          <Route path="/ui-breadcrumb" element={<Breadcrumb />} />
          <Route path="/ui-buttons" element={<Buttons />} />
          <Route path="/ui-card" element={<Cards />} />
          <Route path="/ui-carousel" element={<Carousel />} />
          <Route path="/ui-collapse" element={<Collapse />} />
          <Route path="/ui-dropdowns" element={<Dropdowns />} />
          <Route path="/ui-listgroup" element={<ListGroup />} />
          <Route path="/ui-modalui" element={<ModalUI />} />
          <Route path="/ui-navbarui" element={<NavbarUI />} />
          <Route path="/ui-navsui" element={<NavsUI />} />
          <Route path="/ui-paginationui" element={<PaginationUI />} />
          <Route path="/ui-popoversui" element={<PopoversUI />} />
          <Route path="/ui-progressui" element={<ProgressUI />} />
          <Route path="/ui-Scrollspyui" element={<Scrollspy />} />
          <Route path="/ui-spinnersui" element={<SpinnersUI />} />
          <Route path="/ui-toastsui" element={<ToastsUI />} />
          <Route path="/stater-page" element={<StaterPage />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/changelog" element={<Changelog />} />

          <Route path="/help" element={<Help />} />
        </Routes>
      </div>
    </div>
  );
}
export default MainIndex;
