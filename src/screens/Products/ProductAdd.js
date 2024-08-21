import React from "react";
import Categories from "../../components/Products/ProductAdd/Categories";
import PricingInfo from "../../components/Products/ProductAdd/PricingInfo";
import VisibilityStatus from "../../components/Products/ProductAdd/VisibilityStatus";
import BasicInformation from "../../components/Products/ProductAdd/BasicInformation";
import Images from "../../components/Products/ProductAdd/Images";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/slices/products";
import { useNavigate } from "react-router-dom";

function ProductAdd() {
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [textEditor, setTextEditor] = useState("");
  const [status, setStatus] = useState(true);
  const [price, setPrice] = useState("");
  const [skuNum, setSkuNum] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState(null);
  const [image, setImage] = useState("");

  const saveProduct = () => {
    const data = { name, textEditor, status, price, skuNum, quantity, category, image };
    dispatch(addProduct(data));
    navigate("/product-list");
  };

  return (
    <div className="container-xxl">
      <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
        <h3 className="fw-bold mb-0">Add Product</h3>
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
              <VisibilityStatus status={status} setStatus={setStatus} />
            </div>

            <div className="card mb-3">
              <Categories category={category} setCategory={setCategory} />
            </div>
          </div>
        </div>
        <div className="col-xl-8 col-lg-8">
          <div className="card mb-3">
            <BasicInformation name={name} setName={setName} textEditor={textEditor} setTextEditor={setTextEditor} />
          </div>
          <div className="card mb-3">
            <Images setImage={setImage} image={image} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductAdd;
