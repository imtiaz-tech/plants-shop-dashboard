import React, { useEffect } from "react";
import { getCategories } from "../../../redux/slices/products";
import { useDispatch, useSelector } from "react-redux";

function Categories(props) {
  const { currentPage, recordsPerPage, category, setCategory } = props;
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.products || {});
  useEffect(() => {
    const data = {
      currentPage,
      recordsPerPage,
    };
    dispatch(getCategories(data));
  }, []);

  const changeCategory = (event) => {
    const categoryId = event.target.value;
    setCategory(categoryId);
  };

  return (
    <>
      <div className="card-header py-3 d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
        <h6 className="m-0 fw-bold">Categories</h6>
      </div>
      <div className="card-body">
        <label className="form-label">Categories Select</label>
        <select onChange={changeCategory} defaultValue={category} className="form-select" size="5">
          {categories.map((category) => (
            <option value={category._id}>{category.name}</option>
          ))}
        </select>
      </div>
    </>
  );
}
export default Categories;
