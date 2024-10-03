import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../redux/slices/products";
import { Link } from "react-router-dom";

function RecentTransaction() {
    //useDispatch() hook is used to dispatch actions to the Redux store
  const dispatch = useDispatch();

  const { orders } = useSelector((state) => state.products || {});
   // useEffeect call when dashboard page render and  user click on dashboardr on sidebar menu and this useEffect return those orders whose status is pending
   //it require 1 parameter status
  useEffect(() => {
    const data = {
      status: "Pending",
    };
    dispatch(getOrders(data));
  }, []);

  const columns = [
    {
      name: " ID",
      selector: (row) => row._id,
      cell: (row) => (
        <>
          <span className="px-2">
           {/* get order id from order for showing on dashboard page   */}
            <Link to={`/order-detail/${row._id}`}>{row._id.slice(0, 6)}</Link>
          </span>
        </>
      ),
      sortable: false,
    },
    {
      name: "CUSTOMER NAME",
       //  get firstName  from order for showing on dashboard page   
      selector: (row) => row.billingDetails?.firstName,
      sortable: false,
      minWidth: "200px",
    },
    {
      name: "PRICE",
      selector: (row) => row.price,
        // reduce method used for to get total price of single order and shows on customer detail page 
        cell: (row) => <>PKR {row?.cart?.reduce((total, item) => total + item.unitPrice * item.quantity, 0)}</>,
      sortable: false,
    },
    {
      name: "STATUS",
      selector: (row) => row.status,
      cell: (row) => (
        //  get order status from orders for showing on customer detail page 
        <span className={`badge ${row.status === "Completed" ? "bg-success" : "bg-warning"}`}>{row.status}</span>
      ),
      sortable: false,
    },
  ];

  return (
    <div className="card">
      <div className="card-header py-3 d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
        {/* Heading */}
        <h6 className="m-0 fw-bold">Recent Transactions</h6>
      </div>
      <div className="card-body">
        <div id="myDataTable_wrapper" className="dataTables_wrapper dt-bootstrap5 no-footer">
          <div className="row">
            <div className="col-sm-12">
             {/* import datatable from react-data-table-component for showing order data in rows and columns */}
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
