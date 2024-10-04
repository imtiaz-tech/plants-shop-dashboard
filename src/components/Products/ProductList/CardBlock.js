import React, { useState } from "react";
import { deleteSingleProduct, getProducts } from "../../../redux/slices/products";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ConfirmationModal from "../../Modals/ConfirmationModal";
import Pagination from "../../../components/Categories/Pagination";
import OverlaySpinner from "../../../components/Uicomponent/OverlaySpinner";
import { Link } from "react-router-dom";

function CardBlock() {
  //useDispatch() hook is used to dispatch actions to the Redux store
  const dispatch = useDispatch();
  //useSelector hook is a feature provided by the React-Redux library that allows React components to access the state stored in a Redux store.
  const { products, productsCount, isLoading } = useSelector((state) => state.products || {});
  //useState used for set confirmation modal
  const [isModal, setIsModal] = useState(false);
  //useState used for set deletId for product delete 
  const [deleteId, setDeleteId] = useState("");
  //useState used for set currentPage for pagination
  const [currentPage, setCurrentPage] = useState(1);
  //useState used for set recordsPerPage 
  const [recordsPerPage] = useState(10);
  //Math.ceil method used for get no of pages for pagination
  const nPages = Math.ceil(productsCount / recordsPerPage);
  // getProductsByPage function used for showing products on products page it used two parameters currentpage recordsperpage.
  const getProductsByPage = (pageNumber) => {
    const data = {
      currentPage: pageNumber,
      recordsPerPage,
    };
    dispatch(getProducts(data));
  };

     // useEffect call when dashboard user click on sidebar menu products and by default set getProductsByPage current page
  useEffect(() => {
    getProductsByPage(currentPage);
  }, []);
  //deleteCategory function used for delete single product by id it requires 1 parameter deleteId after delete product getProductsByPage function called 
  const deleteProduct = () => {
    dispatch(deleteSingleProduct(deleteId)).then(() => {
      getProductsByPage(currentPage);
    });
    setIsModal(false);;
  };
    // show modal for delete product it require two parameter setIsModal,setDeleteId and after this delete operation occured
  const onDeleteClick = (productId) => {
    setIsModal(true);
    setDeleteId(productId);
  };
  // goToPage function pass to pagination for next or previous page rendering
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
    getProductsByPage(pageNumber);
  };

  return isLoading ? (
   // import OverlaySpinner for loading
    <OverlaySpinner />
  ) : (
    <div className="card mb-3 bg-transparent p-2">
      {/* map method calls on array of products for showing all products on products list page*/}
      {products.map((product) => {
        return (
          <div className="card border-0 mb-1">
            <div className="form-check form-switch position-absolute top-0 end-0 py-3 px-3 d-none d-md-block">
            {/* get product id from product and link to product edit page */}
              <button className="btn btn-outline-secondary">
                <Link to={`/product-edit/${product._id}`}>
                <i className="icofont-edit text-success"></i>
                </Link>
              </button>
          {/* onDeleteClick function call when user click on delete button before action execute it shows confirmation modal */}
              <button
                onClick={() => {
                  onDeleteClick(product._id);
                }}
                type="button"
                className="btn btn-outline-secondary deleterow"
              >
                <i className="icofont-ui-delete text-danger"></i>
              </button>
            </div>
            <div className="card-body d-flex align-items-center flex-column flex-md-row">
              {/* get product image from product to shows on products list page */}
              <div>
                <img className="w120 rounded img-fluid" src={product.image} alt="" />
              </div>
              <div className="ms-md-4 m-0 mt-4 mt-md-0 text-md-start text-center w-100">
                <div>
                  <h6 className="mb-3 fw-bold">
              {/* get product name from product to shows on products list page */}
                    {product.name}
                  {/* get product sku from product to shows on products list page */}
                    <span className="text-muted small fw-light d-block">{product.sku}</span>
                  </h6>
                </div>
                <div className="d-flex flex-row flex-wrap align-items-center justify-content-center justify-content-md-start">
                  <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                    <div className="text-muted small">Category</div>
                  {/* get product category name from product to shows on products list page */}
                    <strong>{product.categoryId?.name}</strong>
                  </div>
                  <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                  {/* get product quantity from product to shows on products list page */}
                    <div className="text-muted small">Quantity</div>
                    <strong>{product.quantity}</strong>
                  </div>
                  <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                    <div className="text-muted small">Price</div>
                 {/* get product price from product to shows on products list page */}  
                    <strong>{product.price}</strong>
                  </div>
                  <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                    <div className="text-muted small">Status</div>
                    {/* get product status from product to shows on products list page */}  
                    <strong>{product.status ? "Published" : "Unpublished"}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
          {/* pagination used for showing Products by page */}
      <Pagination nPages={nPages} currentPage={currentPage} goToPage={goToPage} />
          {/* pass deleteProduct function to confirmation modal to delete category */}
      <ConfirmationModal isModal={isModal} setIsModal={setIsModal} onConfirm={deleteProduct} />
    </div>
  );
}
export default CardBlock;
