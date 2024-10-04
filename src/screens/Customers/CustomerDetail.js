import React, { useEffect } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import PageHeader1 from "../../components/common/PageHeader1";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../redux/slices/products";
import { useParams } from "react-router-dom";
import OverlaySpinner from "../../components/Uicomponent/OverlaySpinner";
import AddressBlock from "../../components/Customers/CustomerDetails/AddressBlock";

function CustomerDetail() {
  //useDispatch() hook is used to dispatch actions to the Redux store
  const dispatch = useDispatch();
  // useParams hooks of React-Router that returns a dynamic parameter of the URL that the user is currently on
  let params = useParams();
  const { id } = params;
  //useSelector hook is a feature provided by the React-Redux library that allows React components to access the state stored in a Redux store.
  const { orders, isUserOrdersLoading } = useSelector((state) => state.products || {});
 // useEffeect call when dashboard user click on Id customer information page and this useEffect output is getorders by userId
  useEffect(() => {
    const data = { userId: id };
    dispatch(getOrders(data));
  }, [id]);

  const CustomerDetailDatatable = {
    columns: [
      {
        name: "No.",
        sortable: false,
        maxWidth: "150px",
        cell: (row) => (
                //  get order id from orders for showing on customer detail page and this id link to order detail page
          <Link to={`/order-detail/${row._id}`} className="">
            {row._id.slice(0, 6)}
          </Link>
        ),
      },
      {
        name: "Order Date",
        sortable: false,
      //  get order date from orders for showing on customer detail page 
        cell: (row) => <>{moment(row.createdAt).format("DD-MM-YYYY")}</>,
      },
      {
        name: "Price",
        sortable: false,
        // reduce method used for to get total price of single order and shows on customer detail page 
        cell: (row) => <>PKR {row?.cart?.reduce((total, item) => total + item.unitPrice * item.quantity, 0)}</>,
      },
      {
        name: "Status",
        sortable: false,
        cell: (row) => (
                //  get order status from orders for showing on customer detail page 
          <span className={`badge ${row.status === "Completed" ? "bg-success" : "bg-warning"}`}>{row.status}</span>
        ),
      },
    ],
  };

  return isUserOrdersLoading ? (
    <OverlaySpinner />
  ) : (
    <div className="body d-flex py-3">
      <div className="container-xxl">
        <PageHeader1 pagetitle="Customer Detail" />
        <div className="row g-3 mb-xl-3">
          <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
            <AddressBlock />
            <div className="card">
              <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                <h6 className="mb-0 fw-bold ">Customer Order</h6>
              </div>
              <div className="card-body">
                <div id="myProjectTable_wrapper" className="dataTables_wrapper dt-bootstrap5 no-footer">
                  <div className="row">
                    <div className="col-sm-12">
                    {/* import datatable from react-data-table-component for showing order data in rows and columns */}
                      <DataTable
                        columns={CustomerDetailDatatable.columns}
                        data={orders}
                        defaultSortField="title"
                        selectableRows={false}
                        className="table myDataTable table-hover align-middle mb-0 d-row nowrap dataTable no-footer dtr-inline"
                        highlightOnHover={true}
                      />
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
export default CustomerDetail;
