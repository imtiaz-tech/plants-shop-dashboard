import React, { useState } from "react";
import { deleteSingleProduct, getProducts } from "../../../redux/slices/products";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ConfirmationModal from "../../Modals/ConfirmationModal";
import Pagination from "../../../components/Categories/Pagination";
import OverlaySpinner from "../../../components/Uicomponent/OverlaySpinner";
import { Link } from "react-router-dom";

function CardBlock() {
  const dispatch = useDispatch();

  const { products, productsCount, isLoading } = useSelector((state) => state.products || {});

  const [isModal, setIsModal] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);

  const nPages = Math.ceil(productsCount / recordsPerPage);

  const getProductsByPage = (pageNumber) => {
    const data = {
      currentPage: pageNumber,
      recordsPerPage,
    };
    dispatch(getProducts(data));
  };


  useEffect(() => {
    getProductsByPage(currentPage);
  }, []);

  const deleteProduct = () => {
    dispatch(deleteSingleProduct(deleteId)).then(() => {
      getProductsByPage(currentPage);
    });
    setIsModal(false);;
  };
  const onDeleteClick = (productId) => {
    setIsModal(true);
    setDeleteId(productId);
  };

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
    getProductsByPage(pageNumber);
  };

  return isLoading ? (
    <OverlaySpinner />
  ) : (
    <div className="card mb-3 bg-transparent p-2">
      {products.map((product) => {
        return (
          <div className="card border-0 mb-1">
            <div className="form-check form-switch position-absolute top-0 end-0 py-3 px-3 d-none d-md-block">
              <button className="btn btn-outline-secondary">
                <Link to={`/product-edit/${product._id}`}>
                <i className="icofont-edit text-success"></i>
                </Link>
              </button>
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
              <div>
                <img className="w120 rounded img-fluid" src={product.image} alt="" />
              </div>
              <div className="ms-md-4 m-0 mt-4 mt-md-0 text-md-start text-center w-100">
                <div>
                  <h6 className="mb-3 fw-bold">
                    {product.name}
                    <span className="text-muted small fw-light d-block">{product.sku}</span>
                  </h6>
                </div>
                <div className="d-flex flex-row flex-wrap align-items-center justify-content-center justify-content-md-start">
                  <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                    <div className="text-muted small">Category</div>
                    <strong>{product.categoryId.name}</strong>
                  </div>
                  <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                    <div className="text-muted small">Quantity</div>
                    <strong>{product.quantity}</strong>
                  </div>
                  <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                    <div className="text-muted small">Price</div>
                    <strong>{product.price}</strong>
                  </div>
                  <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                    <div className="text-muted small">Status</div>
                    <strong>{product.status ? "Published" : "Unpublished"}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <Pagination nPages={nPages} currentPage={currentPage} goToPage={goToPage} />
      <ConfirmationModal isModal={isModal} setIsModal={setIsModal} onConfirm={deleteProduct} />
    </div>
  );
}
export default CardBlock;
