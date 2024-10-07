import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import PageHeader1 from "../../components/common/PageHeader1";
import moment from "moment";
import { getUsers,updateUserStatus } from "../../redux/slices/products";
import { useDispatch, useSelector } from "react-redux";
import OverlaySpinner from "../../components/Uicomponent/OverlaySpinner";
import Pagination from "../../components/Categories/Pagination";
function CustomerList() {
  //useDispatch() hook is used to dispatch actions to the Redux store
  const dispatch = useDispatch();
  //useSelector hook is a feature provided by the React-Redux library that allows React components to access the state stored in a Redux store.
  const { users, isUsersLoading,usersCount } = useSelector((state) => state.products || {});
       //useState hook  used for setCurrentPage,recordsPerPage
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
  //Math.ceil method used for get no of pages for pagination
  const nPages = Math.ceil(usersCount / recordsPerPage);
  // getUsersByPage function used for showing customers on customer information page it used two parameters currentpage recordsperpage.
  const getUsersByPage = (pageNumber) => {
    const data = {
      currentPage: pageNumber,
      recordsPerPage,
    };
    dispatch(getUsers(data));
  };
  // goToPage function pass to pagination for next or previous page rendering
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
    getUsersByPage(pageNumber);
  };
  // useEffect call when dashboard user click on sidebar menu Customer and by default set getUsersByPage current page
  useEffect(() => {
    getUsersByPage(currentPage);
  }, []);


 // onStatusChange function called when user status changed active to inactive or inactive to active
  const onStatusChange = (e, row) => {
    const data={
        id:row._id,
        isActive:!row.isActive
    }
    dispatch(updateUserStatus(data)).then(()=>{
        dispatch(getUsers());
      })
  }

  const columns = [
    {
      name: " ID",
      selector: (row) => row._id,
      cell: (row) => (
        <>
          <span className="px-2">
            {/* get customer id from users for showing on customer imformation page and id link to customer detail page  */}
            <Link to={`/customer-detail/${row._id}`}>{row._id.slice(0, 6)}</Link>
          </span>
        </>
      ),
      sortable: false,
    },
    {
     //  get customer name from users for showing on customer imformation  page  
      name: "CUSTOMER",
      selector: (row) => row.name,
      sortable: false,
      minWidth: "200px",
    },
    {
    //  get customer register date from users for showing on customer imformation  page  
      name: "REGISTER DATE",
      selector: (row) => row.createdAt,
      cell: (row) => <>{moment(row.createdAt).format("DD-MM-YYYY")}</>,
      sortable: false,
    },
    {
    //  get customer email from users for showing on customer imformation  page  
      name: "MAIL",
      selector: (row) => row.email,
      sortable: false,
    },
    {
    //  get status  from users for showing on customer imformation  page  
      name: "ACTION",
      selector: (row) => row.isActive,
      sortable: false,
      //  onStatusChange function called when dashboard user set status  active or inactive 
      cell: (row) => <Form.Check type="switch" onChange={(e) => onStatusChange(e, row)} checked={row.isActive} />,
    },
  ];

  return isUsersLoading ? (
    // import OverlaySpinner for loading
    <OverlaySpinner />
  ) : (
    <div className="body d-flex py-lg-3 py-md-2">
      <div className="container-xxl">
        <PageHeader1 pagetitle="Customers Information" />
        <div className="row clearfix g-3">
          <div className="col-sm-12">
            <div className="card mb-3">
              <div className="card-body">
                <div id="myProjectTable_wrapper" className="dataTables_wrapper dt-bootstrap5 no-footer">
                  <div className="row">
                    <div className="col-sm-12">
                    {/* import datatable for showing order data in rows and columns */}
                      <DataTable
                        columns={columns}
                        data={users}
                        defaultSortField="title"
                        selectableRows={false}
                        className="table myDataTable table-hover align-middle mb-0 d-row nowrap dataTable no-footer dtr-inline"
                        highlightOnHover={true}
                      />
                    {/* pagination used for showing users by page */}
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
  );
}
export default CustomerList;
