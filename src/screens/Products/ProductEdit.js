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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [textEditor, setTextEditor] = useState("");
  const [price, setPrice] = useState("");
  const [skuNum, setSkuNum] = useState("");
  const [quantity, setQuantity] = useState("");
  const [status, setStatus] = useState(true);
  const [category, setCategory] = useState(null);
  const [image, setImage] = useState("");

  let params = useParams();
  const { id } = params;

  const { product, isSingleProductLoading } = useSelector((state) => state.products || {});

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

  useEffect(() => {
    dispatch(getSingleProduct(id));
    dispatch(getCategories({ all: true }));
  }, [id]);

  const saveUpdateProduct = () => {
    const data = { id, name, textEditor, price, skuNum, quantity, image, category, status };
    dispatch(updateSingleProduct(data)).then(() => {
      navigate("/product-list");
    });
  };

  return isSingleProductLoading ? (
    <OverlaySpinner />
  ) : (
    <div className="container-xxl">
      <div className="row align-items-center">
        <div className="border-0 mb-4">
          <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
            <h3 className="fw-bold mb-0">Edit Product</h3>
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
                  <BasicInformation
                    name={name}
                    setName={setName}
                    textEditor={textEditor}
                    setTextEditor={setTextEditor}
                  />
                </div>

                <div className="card mb-3">
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
