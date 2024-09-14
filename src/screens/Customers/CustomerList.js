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
  const dispatch = useDispatch();
  const { users, isUsersLoading,usersCount } = useSelector((state) => state.products || {});

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);

  const nPages = Math.ceil(usersCount / recordsPerPage);
  
  const getUsersByPage = (pageNumber) => {
    const data = {
      currentPage: pageNumber,
      recordsPerPage,
    };
    dispatch(getUsers(data));
  };
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
    getUsersByPage(pageNumber);
  };

  useEffect((currentPage) => {
    getUsersByPage(currentPage);
  }, [currentPage]);



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
            <Link to={`/customer-detail/${row._id}`}>{row._id.slice(0, 6)}</Link>
          </span>
        </>
      ),
      sortable: false,
    },
    {
      name: "CUSTOMER",
      selector: (row) => row.name,
      sortable: false,
      minWidth: "200px",
    },
    {
      name: "REGISTER DATE",
      selector: (row) => row.createdAt,
      cell: (row) => <>{moment(row.createdAt).format("DD-MM-YYYY")}</>,
      sortable: false,
    },
    {
      name: "MAIL",
      selector: (row) => row.email,
      sortable: false,
    },
    {
      name: "ACTION",
      selector: (row) => row.isActive,
      sortable: false,
      cell: (row) => <Form.Check type="switch" onChange={(e) => onStatusChange(e, row)} checked={row.isActive} />,
    },
  ];

  return isUsersLoading ? (
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
                      <DataTable
                        columns={columns}
                        data={users}
                        defaultSortField="title"
                        // pagination
                        selectableRows={false}
                        className="table myDataTable table-hover align-middle mb-0 d-row nowrap dataTable no-footer dtr-inline"
                        highlightOnHover={true}
                      />
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
