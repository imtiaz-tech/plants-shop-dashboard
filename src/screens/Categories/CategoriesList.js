import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageHeader1 from "../../components/common/PageHeader1";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, deleteSingleCategory } from "../../redux/slices/products";
import moment from "moment";
import ConfirmationModal from "../../components/Modals/ConfirmationModal";
import OverlaySpinner from "../../components/Uicomponent/OverlaySpinner";
import Pagination from "../../components/Categories/Pagination";

function CategoriesList() {
    //useDispatch() hook is used to dispatch actions to the Redux store
  const dispatch = useDispatch();
  const { categories, categoriesCount, isLoading } = useSelector((state) => state.products || {});
    //useState hook  used for setIsModal,setDeleteId,setCurrentPage,recordsPerPage
  const [isModal, setIsModal] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
    //Math.ceil method used for get no of pages for pagination
  const nPages = Math.ceil(categoriesCount / recordsPerPage);
    // getCategoriesByPage function used for showing customers on customer information page it used two parameters currentpage recordsperpage.
  const getCategoriesByPage = (pageNumber) => {
    const data = {
      currentPage: pageNumber,
      recordsPerPage,
    };
    dispatch(getCategories(data));
  };
   // useEffect call when dashboard user click on sidebar menu Categories and by default set getCategoriesByPage current page
  useEffect(() => {
    getCategoriesByPage(currentPage);
  }, []);
   // goToPage function pass to pagination for next or previous page rendering
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
    getCategoriesByPage(pageNumber);
  };
  //  deleteCategory function used for delete single category by id it requires 1 parameter catedoryId after delete category getCategoriesByPage function called 
  const deleteCategory = () => {
    dispatch(deleteSingleCategory(deleteId)).then(() => {
      getCategoriesByPage(currentPage);
    });
    setIsModal(false);
  };
  // show modal for delete category it require two parameter setIsModal,setDeleteId and after this delete operation occured
  const onDeleteClick = (categoryId) => {
    setIsModal(true);
    setDeleteId(categoryId);
  };

  return isLoading ? (
    // import OverlaySpinner for loading
    <OverlaySpinner />
  ) : (
    <div className="body d-flex py-3">
      <div className="container-xxl">
        {/* link to categories add page */}
        <PageHeader1 pagetitle="Categorie List" righttitle="Add Categories" link="/categories-add" routebutton={true} />
        <div className="row g-3 mb-3">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <div id="myDataTable_wrapper" className="dataTables_wrapper dt-bootstrap5 no-footer">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="table-responsive">
                        <table
                          id="myDataTable"
                          className="table table-hover align-middle mb-0 nowrap dataTable no-footer dtr-inline"
                          style={{ width: "100%" }}
                          role="grid"
                          aria-describedby="myDataTable_info"
                        >
                          <thead>
                            <tr role="row">
                              <th
                                className="sorting_asc"
                                tabIndex="0"
                                aria-controls="myDataTable"
                                rowSpan="1"
                                colSpan="1"
                                style={{ width: "32.2px" }}
                                aria-label="Id: activate to sort column descending"
                                aria-sort="ascending"
                              >
                                Id
                              </th>
                              <th
                                className="sorting"
                                tabIndex="0"
                                aria-controls="myDataTable"
                                rowSpan="1"
                                colSpan="1"
                                style={{ width: "117.2px" }}
                                aria-label="Categorie: activate to sort column ascending"
                              >
                                Categorie
                              </th>
                              <th
                                className="dt-body-right sorting"
                                tabIndex="0"
                                aria-controls="myDataTable"
                                rowSpan="1"
                                colSpan="1"
                                style={{ width: "118.2px" }}
                                aria-label="Date: activate to sort column ascending"
                              >
                                Date
                              </th>
                              <th
                                className="sorting"
                                tabIndex="0"
                                aria-controls="myDataTable"
                                rowSpan="1"
                                colSpan="1"
                                style={{ width: "59.2px" }}
                                aria-label="Status: activate to sort column ascending"
                              >
                                Status
                              </th>
                              <th
                                className="dt-body-right sorting"
                                tabIndex="0"
                                aria-controls="myDataTable"
                                rowSpan="1"
                                colSpan="1"
                                style={{ width: "75.2px" }}
                                aria-label="Action: activate to sort column ascending"
                              >
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                           {/* map method calls on array of Categories for showing all Categories on Categories list page*/}
                            {categories?.map((category) => (
                              <tr id="row11" role="row" className="odd">
                                <td className="sorting_1" tabIndex="0">
                                {/* get category id from category to shows on categories list page */}
                                  {category._id.slice(0, 6)}
                                </td>
                              {/* get category name from category to shows on categories list page */}
                                <td>{category.name}</td>
                              {/* get created date from category to shows on categories list page */}
                                <td className=" dt-body-right">{moment(category.createdAt).format("DD-MM-YYYY")}</td>
                                <td>
                                  <span className={`badge ${category.status ? "bg-success" : "bg-warning"}`}>
                              {/* get category status from category to shows on categories list page */}
                                    {category.status ? "Published" : "Unpublished"}
                                  </span>
                                </td>
                                <td className=" dt-body-right">
                                  <div className="btn-group" role="group" aria-label="Basic outlined example">
                                  {/* get category id from category and link to category edit page */}
                                    <Link to={`/categories-edit/${category._id}`} className="btn btn-outline-secondary">
                                      <i className="icofont-edit text-success"></i>
                                    </Link>
                                  {/* onDeleteClick function call when user click on delete button before action execute it shows confirmation modal */}
                                    <button
                                      onClick={() => {
                                        onDeleteClick(category._id);
                                      }}
                                      type="button"
                                      className="btn btn-outline-secondary deleterow"
                                    >
                                      <i className="icofont-ui-delete text-danger"></i>
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                        {/* pagination used for showing Categories by page */}
                        <Pagination nPages={nPages} currentPage={currentPage} goToPage={goToPage} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        {/* pass deleteCategory function to confirmation modal to delete category */}
      <ConfirmationModal setIsModal={setIsModal} isModal={isModal} onConfirm={deleteCategory} />
    </div>
  );
}
export default CategoriesList;
