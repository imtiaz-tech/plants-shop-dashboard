import React, { useEffect } from "react";
import VisibilityStatus from "../../components/Categories/VisibilityStatus";
import BasicInformation from "../../components/Categories/BasicInformation";
import { useDispatch, useSelector } from "react-redux";
import { updateSingleCategory, getSingleCategory } from "../../redux/slices/products";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function CategoriesAdd() {
    //useNavigate hook provides a simple API for navigating between pages in your React application.
  const navigate = useNavigate();
    //useDispatch() hook is used to dispatch actions to the Redux store
  const dispatch = useDispatch();
   //useState hook  used for setName,setStatus
  const [name, setName] = useState("");
  const [status, setStatus] = useState(true);
  // useParams hooks of React-Router that returns a dynamic parameter of the URL that the user is currently on
  let params = useParams();
  const { id } = params;
  const { category } = useSelector((state) => {
    return state.products || {};
  });
  // useEffect is run when user click on edit button to set data in input fields for edit
  useEffect(() => {
    setName(category?.name);
    setStatus(category?.status);
  }, [category]);
 //useEffect is used for getSingleCategory by id for edit category
  useEffect(() => {
    dispatch(getSingleCategory(id));
  }, [id]);
  //saveUpdateCategory call when user click on save button after edit category this function takes 3 parameters id,name,status
  //after save category navigate to categories list 
  const saveUpdateCategory = (event) => {
    const data = { id, name, status };
    dispatch(updateSingleCategory(data)).then(()=>{
      navigate("/categories-list");
    })
  };

  return (
    <div className="container-xxl">
      <div className="row align-items-center">
        <div className="border-0 mb-4">
          <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
            <h3 className="fw-bold mb-0">Edit Category</h3>
            {/* saveUpdateCategory function call when user click on save button to save category */}
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
