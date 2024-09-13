import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../redux/slices/products";
import { Link } from "react-router-dom";

function RecentTransaction() {
  const dispatch = useDispatch();

  const { orders } = useSelector((state) => state.products || {});

  useEffect(() => {
    const data = {
      status: "Pending",
    };
    dispatch(getOrders(data));
  }, []);

  const columns = [
    {
      name: " ID",
      selector: (row) => row._id.slice(0, 8),
      cell: (row) => (
        <>
          <span className="px-2">
            <Link to={`/order-detail/${row._id}`}>{row._id.slice(0, 6)}</Link>
          </span>
        </>
      ),
      sortable: false,
    },
    {
      name: "CUSTOMER NAME",
      selector: (row) => row.billingDetails?.firstName,
      sortable: false,
      minWidth: "200px",
    },
    {
      name: "PRICE",
      selector: (row) => row.price,
      cell: (row) => <>PKR {row?.cart?.reduce((total, item) => total + item.unitPrice * item.quantity, 0)}</>,
      sortable: false,
    },
    {
      name: "STATUS",
      selector: (row) => row.status,
      cell: (row) => (
        <span className={`badge ${row.status === "Completed" ? "bg-success" : "bg-warning"}`}>{row.status}</span>
      ),
      sortable: false,
    },
  ];

  return (
    <div className="card">
      <div className="card-header py-3 d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
        <h6 className="m-0 fw-bold">Recent Transactions</h6>
      </div>
      <div className="card-body">
        <div id="myDataTable_wrapper" className="dataTables_wrapper dt-bootstrap5 no-footer">
          <div className="row">
            <div className="col-sm-12">
              <DataTable
                columns={columns}
                data={orders}
                defaultSortField="title"
                selectableRows={false}
                highlightOnHover={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RecentTransaction;
