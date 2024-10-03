import React from "react";
import Categories from "../../components/Products/ProductEdit/Categories";
import PricingInfo from "../../components/Products/ProductEdit/PricingInfo";
import VisibilityStatus from "../../components/Products/ProductEdit/VisibilityStatus";
import BasicInformation from "../../components/Products/ProductEdit/BasicInformation";
import Images from "../../components/Products/ProductEdit/Images";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getCategories, getSingleProduct, updateSingleProduct } from "../../redux/slices/products";
import OverlaySpinner from "../../components/Uicomponent/OverlaySpinner";

function ProductEdit() {
  //useNavigate hook provides a simple API for navigating between pages in your React application.
  const navigate = useNavigate();
  //useDispatch() hook is used to dispatch actions to the Redux store
  const dispatch = useDispatch();
  //usestate hook used for set name,textEditor,status,price,skuNum,quantity,category,image
  const [name, setName] = useState("");
  const [textEditor, setTextEditor] = useState("");
  const [price, setPrice] = useState("");
  const [skuNum, setSkuNum] = useState("");
  const [quantity, setQuantity] = useState("");
  const [status, setStatus] = useState(true);
  const [category, setCategory] = useState(null);
  const [image, setImage] = useState("");
   // useParams hooks of React-Router that returns a dynamic parameter of the URL that the user is currently on
  let params = useParams();
  const { id } = params;
    //useSelector hook is a feature provided by the React-Redux library that allows React components to access the state stored in a Redux store.
  const { product, isSingleProductLoading } = useSelector((state) => state.products || {});
   // useEffect is run when user click on edit button to set data in input fields for edit
  useEffect(() => {
    setName(product?.name);
    setTextEditor(product?.textEditor);
    setPrice(product?.price);
    setSkuNum(product?.sku);
    setQuantity(product?.quantity);
    setCategory(product?.categoryId);
    setStatus(product?.status);
    setImage(product?.image);
  }, [product]);
  //useEffect is used for getSingleProduct by id for edit product
  useEffect(() => {
    dispatch(getSingleProduct(id));
    dispatch(getCategories({ all: true }));
  }, [id]);
  //saveUpdateProduct call when user click on save button after edit product this function takes 8 parameters id,name,status
  //after save product navigate to product list 
  const saveUpdateProduct = () => {
    const data = { id, name, textEditor, price, skuNum, quantity, image, category, status };
    dispatch(updateSingleProduct(data)).then(() => {
      navigate("/product-list");
    });
  };

  return isSingleProductLoading ? (
     // import OverlaySpinner for loading
    <OverlaySpinner />
  ) : (
    <div className="container-xxl">
      <div className="row align-items-center">
        <div className="border-0 mb-4">
          <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
            {/* Heading */}
            <h3 className="fw-bold mb-0">Edit Product</h3>
            {/* saveUpdateProduct function call when user click on save button to save product */}
            <button
              type="submit"
              className="btn btn-primary btn-set-task w-sm-100 text-uppercase px-5"
              onClick={saveUpdateProduct}
            >
              Save
            </button>
            <div className="row g-3">
              <div className="col-xl-4 col-lg-4">
                <div className="sticky-lg-top">
                  <div className="card mb-3">
                    {/* PricingInfo is used for add price,skuNum, published and quantity */}
                    <PricingInfo
                      price={price}
                      setPrice={setPrice}
                      skuNum={skuNum}
                      setSkuNum={setSkuNum}
                      quantity={quantity}
                      setQuantity={setQuantity}
                    />
                  </div>
                  <div className="card mb-3">
                    {/* VisibilityStatus is used for add status published or unpublished */}
                    <VisibilityStatus status={status} setStatus={setStatus} />
                  </div>
                  <div className="card mb-3">
                    {/* Categories is used for add category */}
                    <Categories category={category} setCategory={setCategory} />
                  </div>
                </div>
              </div>
              <div className="col-xl-8 col-lg-8">
                <div className="card mb-3">
                 {/* BasicInformation is used for add name,textEditor */}
                  <BasicInformation
                    name={name}
                    setName={setName}
                    textEditor={textEditor}
                    setTextEditor={setTextEditor}
                  />
                </div>

                <div className="card mb-3">
                 {/* Images is used for add image */}
                  <Images setImage={setImage} image={image} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductEdit;
