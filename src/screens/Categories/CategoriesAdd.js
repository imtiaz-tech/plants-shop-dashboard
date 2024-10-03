import React from "react";
import VisibilityStatus from "../../components/Categories/VisibilityStatus";
import BasicInformation from "../../components/Categories/BasicInformation";
import { useDispatch } from "react-redux";
import { addCategory } from "../../redux/slices/products";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CategoriesAdd() {
      //useNavigate hook provides a simple API for navigating between pages in your React application.
  const navigate = useNavigate();
    //useDispatch() hook is used to dispatch actions to the Redux store
  const dispatch = useDispatch();
      //useState hook  used for setName,setStatus
  const [name, setName] = useState("");
  const [status, setStatus] = useState(true);
  // saveCategory function is used for save category it takes two parameters name and status
  const saveCategory = (event) => {
    event.preventDefault();
    const data = { name, status };
    dispatch(addCategory(data)).then(()=>{
      navigate("/categories-list");
    });
  };

  return (
    <div className="container-xxl">
      <div className="row align-items-center">
        <div className="border-0 mb-4">
          <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
            <h3 className="fw-bold mb-0">Add Category</h3>
          {/* saveCategory function call when user click on save button to save category */}
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
            {/* VisibilityStatus is used for add status published or unpublished */}
              <VisibilityStatus status={status} setStatus={setStatus} />
            </div>
          </div>
        </div>
        <div className="col-xl-8 col-lg-8">
          <div className="card mb-3">
          {/* BasicInformation is used for add name to category */}
            <BasicInformation name={name} setName={setName} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default CategoriesAdd;
