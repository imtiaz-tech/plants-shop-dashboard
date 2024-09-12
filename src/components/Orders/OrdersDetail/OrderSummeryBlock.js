import React from "react";
import DataTable from "react-data-table-component";
import { useSelector } from "react-redux";

function OrderSummeryBlock() {
  const { order } = useSelector((state) => state.products || {});

  const columns = () => {
    return [
      {
        name: "PRODUCT IMAGE",
        selector: (row) => row.productId?.image,
        cell: (row) => (
          <>
            <img className="avatar rounded lg border" src={row.productId?.image} alt="" />
          </>
        ),
        sortable: false,
      },
      {
        name: "PRODUCT NAME",
        selector: (row) => row.productId?.name,
        sortable: false,
        cell: (row) => (
          <>
            <div className="row">
              <h6 className="title ">{row.productId?.name}</h6>
            </div>
          </>
        ),
      },
      {
        name: "No Of Items",
        selector: (row) => row.quantity,
        sortable: false,
      },
      {
        name: "PRICE",
        selector: (row) => row.unitPrice,
        sortable: false,
      },
    ];
  };
  return (
    <div className="col-sm-12">
      {order?.cart?.length && (
        <DataTable
          columns={columns()}
          data={order?.cart}
          selectableRows={false}
          className="table myDataTable table-hover align-middle mb-0 d-row nowrap dataTable no-footer dtr-inline"
          highlightOnHover={true}
        />
      )}
    </div>
  );
}
export default OrderSummeryBlock;
