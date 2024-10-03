import React from "react";
import { useSelector } from "react-redux";

function Categories(props) {
  //props pass from parent component
  const { category, setCategory } = props;
  //useSelector hook is a feature provided by the React-Redux library that allows React components to access the state stored in a Redux store.
  const { categories } = useSelector((state) => state.products || {});
 // changeCategory function run when select category product add time
  const changeCategory = (event) => {
    const categoryId = event.target.value;
    setCategory(categoryId);
  };

  return (
    <>
      <div className="card-header py-3 d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
        {/* Heading */}
        <h6 className="m-0 fw-bold">Categories</h6>
      </div>
      <div className="card-body">
        <label className="form-label">Categories Select</label>
          {/* onchange function called when changeCategory in input fields */}
        <select onChange={changeCategory} value={category} className="form-select" size="5">
        {/* map method calls on array of Categories for showing all Categories on product add page*/}
          {categories.map((category) => (
            <option value={category._id}>{category.name}</option>
          ))}
        </select>
      </div>
    </>
  );
}
export default Categories;
