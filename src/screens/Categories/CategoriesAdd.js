import React from "react";
import VisibilityStatus from "../../components/Categories/VisibilityStatus";
import BasicInformation from "../../components/Categories/BasicInformation";
import { useDispatch } from "react-redux";
import { addCategory } from "../../redux/slices/products";
import { useState } from "react";

function CategoriesAdd() {
  const dispatch = useDispatch();
  
  const [name, setName] = useState("");
  const [status, setStatus] = useState(true);
  const saveCategory = (event) => {
    event.preventDefault();
    const data = { name, status };
    dispatch(addCategory(data));
  };

  return (
    <div className="container-xxl">
      <div className="row align-items-center">
        <div className="border-0 mb-4">
          <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
            <h3 className="fw-bold mb-0">Add Category</h3>
            <button
              type="submit"
              className="btn btn-primary btn-set-task w-sm-100 text-uppercase px-5"
              onClick={saveCategory}>
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
