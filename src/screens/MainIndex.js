import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import ProductGrid from "./Products/ProductGrid";
import ProductList from "./Products/ProductList";
import ProductEdit from "./Products/ProductEdit";
import ProductDetail from "./Products/ProductDetail";
import ProductAdd from "./Products/ProductAdd";
import ShoppingCart from "./Products/ShoppingCart";
import Header from "../components/common/Header";
import CheckOut from "./Products/CheckOut";
import CategoriesList from "./Categories/CategoriesList";
import OrderList from "./Orders/OrderList";
import OrderDetail from "./Orders/OrderDetail";
import OrderInvoice from "./Orders/OrderInvoice";
import CustomerList from "./Customers/CustomerList";
import CustomerDetail from "./Customers/CustomerDetail";
import CouponsList from "./SalesPromotion.js/CouponsList";
import CouponsAdd from "./SalesPromotion.js/CouponsAdd";
import CouponsEdit from "./SalesPromotion.js/CouponsEdit";
import StockList from "./Inventory/StockList";
import Purchase from "./Inventory/Purchase";
import Supplier from "./Inventory/Supplier";
import Return from "./Inventory/Return";
import Departments from "./Inventory/Departments";
import Invoices from "./Accounts/Invoices";
import Expense from "./Accounts/Expense";
import Salaryslip from "./Accounts/Salaryslip";
import Chat from "./App/Chat";
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
import StoreLocation from "./StoreLocation/Storelocation";
import Help from "./Help/Help";
import SimpleInvoice from "../components/Accounts/Invoice/SimpleInvoice";

function MainIndex() {
  return (
    <div className="main px-lg-4 px-md-4">
      <Header />
      <div className="body d-flex py-3 ">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/product-grid" element={<ProductGrid />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/product-edit/:id" element={<ProductEdit />} />
          <Route path="/product-detail" element={<ProductDetail />} />
          <Route path="/product-add" element={<ProductAdd />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path="/check-out" element={<CheckOut />} />
          <Route path="/categories-list" element={<CategoriesList />} />
          <Route path="/categories-edit/:id" element={<CategoriesEdit />} />
          <Route path="/categories-add" element={<CategoriesAdd />} />
          <Route path="/order-list" element={<OrderList />} />
          <Route path="/order-detail" element={<OrderDetail />} />
          <Route path="/order-invoice" element={<OrderInvoice />} />
          <Route path="/customer-list" element={<CustomerList />} />
          <Route path="/customer-detail" element={<CustomerDetail />} />
          <Route path="/coupons-list" element={<CouponsList />} />
          <Route path="/coupons-add" element={<CouponsAdd />} />
          <Route path="/coupons-edit" element={<CouponsEdit />} />
          <Route path="/stock-list" element={<StockList />} />
          <Route path="/purchase" element={<Purchase />} />
          <Route path="/supplier" element={<Supplier />} />
          <Route path="/return" element={<Return />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/simple-invoice" element={<SimpleInvoice />} />

          <Route path="/expense" element={<Expense />} />
          <Route path="/salaryslip" element={<Salaryslip />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/store-location" element={<StoreLocation />} />

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
