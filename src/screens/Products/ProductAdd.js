import React, { useEffect } from "react";
import Categories from "../../components/Products/ProductAdd/Categories";
import PricingInfo from "../../components/Products/ProductAdd/PricingInfo";
import VisibilityStatus from "../../components/Products/ProductAdd/VisibilityStatus";
import BasicInformation from "../../components/Products/ProductAdd/BasicInformation";
import Images from "../../components/Products/ProductAdd/Images";
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addProduct, getCategories } from "../../redux/slices/products";
import { useNavigate } from "react-router-dom";
import OverlaySpinner from "../../components/Uicomponent/OverlaySpinner";

function ProductAdd() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //usestate hook used for set name,textEditor,status,price,skuNum,quantity,category,image
  const [name, setName] = useState("");
  const [textEditor, setTextEditor] = useState("");
  const [status, setStatus] = useState(true);
  const [price, setPrice] = useState("");
  const [skuNum, setSkuNum] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState(null);
  const [image, setImage] = useState("");

  const { isAllProductsLoading } = useSelector((state) => state.products || {});

   // useEffect calls when clicked on add products button response is shows all categories from DB on product add page
  useEffect(() => {
    dispatch(getCategories({ all: true }));
  }, []);
    // saveProduct function is used for save product it takes 8 parameters this function call when click on save button
    //after save product navigate to product list
  const saveProduct = () => {
    const data = { name, textEditor, status, price, skuNum, quantity, category, image };
    dispatch(addProduct(data)).then(() => {
      navigate("/product-list");
    });
  };

  return isAllProductsLoading ?(
    // import OverlaySpinner for loading
    <OverlaySpinner/>
  ) : (
    <div className="container-xxl">
      <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
        <h3 className="fw-bold mb-0">Add Product</h3>
      {/* saveProduct function call when user click on save button to save product */}
        <button
          type="submit"
          onClick={saveProduct}
          className="btn btn-primary btn-set-task w-sm-100 text-uppercase px-5"
        >
          Save
        </button>
      </div>{" "}
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
            <BasicInformation name={name} setName={setName} textEditor={textEditor} setTextEditor={setTextEditor} />
          </div>
          <div className="card mb-3">
            {/* Images is used for add image */}
            <Images setImage={setImage} image={image} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductAdd;
