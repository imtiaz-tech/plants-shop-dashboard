import React, { useEffect } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import PageHeader1 from "../../components/common/PageHeader1";
import AddressBlock from "../../components/Customers/CustomerDetails/AddressBlock";
import { useDispatch, useSelector } from "react-redux";
import { getOrdersByUserId } from "../../redux/slices/products";
import { useParams } from "react-router-dom";

function CustomerDetail() {
  const dispatch = useDispatch();

  let params = useParams();
  const { id } = params;
  const { userOrders } = useSelector((state) => state.products || {});
  console.log("🚀 ~ CustomerDetail ~ userOrders:", userOrders);

  useEffect(() => {
    dispatch(getOrdersByUserId(id));
  }, [id]);

  const CustomerDetailDatatable = {
    columns: [
      {
        name: "No.",
        sortable: false,
        maxWidth: "150px",
        cell: (row) => (
          <Link to={`/order-detail/${row._id}`} className="">
            {row._id.slice(0, 6)}
          </Link>
        ),
      },
      {
        name: "Order Date",
        sortable: false,
        cell: (row) => <>{moment(row.createdAt).format("DD-MM-YYYY")}</>,
      },
      {
        name: "Price",
        sortable: false,
        cell: (row) => <>PKR {row?.cart?.reduce((total, item) => total + item.unitPrice * item.quantity, 0)}</>,
      },
      {
        name: "Status",
        sortable: false,
        cell: (row) => (
          <span className={`badge ${row.status === "Completed" ? "bg-success" : "bg-warning"}`}>{row.status}</span>
        ),
      },
    ],
  };

  return (
    <div className="body d-flex py-3">
      <div className="container-xxl">
        <PageHeader1 pagetitle="Customer Detail" />
        <div className="row g-3 mb-xl-3">
          <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
            {/* <AddressBlock /> */}
            <div className="card">
              <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                <h6 className="mb-0 fw-bold ">Customer Order</h6>
              </div>
              <div className="card-body">
                <div id="myProjectTable_wrapper" className="dataTables_wrapper dt-bootstrap5 no-footer">
                  <div className="row">
                    <div className="col-sm-12">
                      <DataTable
                        columns={CustomerDetailDatatable.columns}
                        data={userOrders}
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
