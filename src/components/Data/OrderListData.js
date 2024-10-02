import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../redux/slices/products";
import OverlaySpinner from "../../components/Uicomponent/OverlaySpinner";

function OrdersList() {
  const dispatch = useDispatch();
  const { orders, isOrdersLoading } = useSelector((state) => state.products || {});
  // useEffect function call when user click on sidebar menu orders
  useEffect(() => {
    dispatch(getOrders());
  }, []);

  return isOrdersLoading ? (
    <OverlaySpinner />
  ) : (
    <div className="body d-flex py-3">
      <div className="container-xxl">
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
                                CUSTOMER NAME
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
                                PRICE
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
                            </tr>
                          </thead>
                          <tbody>
                            {orders.map((order) => (
                              <tr id="row11" role="row" className="odd">
                                <td className="sorting_1" tabIndex="0">
                                  <Link to={`/order-detail/${order._id}`} className="">
                                    {order._id.slice(0, 6)}
                                  </Link>
                                </td>
                                <td>{order.billingDetails.firstName}</td>
                                <td className=" dt-body-right">
                                  {order.cart.reduce((total, item) => total + item.unitPrice * item.quantity, 0)}
                                </td>
                                <td>
                                  <span
                                    className={`badge ${order.status === "Completed" ? "bg-success" : "bg-warning"}`}
                                  >
                                    {order.status}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
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
export default OrdersList;
