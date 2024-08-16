import React, { useEffect } from "react";
import VisibilityStatus from "../../components/Categories/VisibilityStatus";
import BasicInformation from "../../components/Categories/BasicInformation";
import { useDispatch, useSelector } from "react-redux";
import { updateSingleCategory, getSingleCategory } from "../../redux/slices/products";
import { useState } from "react";
import { useParams,useNavigate } from "react-router-dom";

function CategoriesAdd() {
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [status, setStatus] = useState(true);
  let params = useParams();
  const { id } = params;
  const { category } = useSelector((state) => {
    return state.products || {};
  });

  useEffect(() => {
    setName(category?.name);
    setStatus(category?.status);
  }, [category]);

  useEffect(() => {
    dispatch(getSingleCategory(id));
  }, [id]);

  const saveUpdateCategory = (event) => {
    const data = { id, name, status };
    dispatch(updateSingleCategory(data));
    navigate("/categories-list")
  };

  return (
    <div className="container-xxl">
      <div className="row align-items-center">
        <div className="border-0 mb-4">
          <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
            <h3 className="fw-bold mb-0">Edit Category</h3>
            <button
              type="submit"
              className="btn btn-primary btn-set-task w-sm-100 text-uppercase px-5"
              onClick={saveUpdateCategory}
            >
              Save
            </button>
          </div>
        </div>
      </div>
      <div className="row g-3">
        <div className="col-xl-4 col-lg-4">
          <div className="sticky-lg-top">
            <div className="card mb-3">
              <VisibilityStatus status={status} setStatus={setStatus} />
            </div>
          </div>
        </div>
        <div className="col-xl-8 col-lg-8">
          <div className="card mb-3">
            <BasicInformation name={name} setName={setName} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default CategoriesAdd;
