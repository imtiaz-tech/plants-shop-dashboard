import React from "react";
import DataTable from "react-data-table-component";
import { useSelector } from "react-redux";

function OrderSummeryBlock() {
      //useSelector hook is a feature provided by the React-Redux library that allows React components to access the state stored in a Redux store.
  const { order } = useSelector((state) => state.products || {});
    //  this component used for to show product image,product name,quantity and unit price
  const columns = () => {
    return [
        //  get product image for showing on single order detail page 
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
       //  get product name for showing on single order detail page 
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
      //  get product quantity for showing on single order detail page 
      {
        name: "No Of Items",
        selector: (row) => row.quantity,
        sortable: false,
      },
      //  get product unitPrice for showing on single order detail page 
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
        //import datatable from react-data-table-component for showing order data in rows and columns
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
