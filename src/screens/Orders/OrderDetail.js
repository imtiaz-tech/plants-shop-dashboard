import React, { useEffect } from "react";
import PageHeader1 from "../../components/common/PageHeader1";
import AddressBlock from "../../components/Orders/OrdersDetail/AddressBlock";
import CardBlock from "../../components/Orders/OrdersDetail/CardBlock";
import OrderSummeryBlock from "../../components/Orders/OrdersDetail/OrderSummeryBlock";
import StatusOrderBlock from "../../components/Orders/OrdersDetail/StatusOrderBlock";
import { useParams } from "react-router-dom";
import { getSingleOrder } from "../../redux/slices/products";
import { useDispatch, useSelector } from "react-redux";
import OverlaySpinner from "../../components/Uicomponent/OverlaySpinner";

function OrderDetail() {
  //useDispatch() hook is used to dispatch actions to the Redux store
  const dispatch = useDispatch();
  // useParams hooks of React-Router that returns a dynamic parameter of the URL that the user is currently on
  let params = useParams();
  const { id } = params;
  //useSelector hook is a feature provided by the React-Redux library that allows React components to access the state stored in a Redux store.
  const { order,isSingleOrderLoading } = useSelector((state) => state.products || {});
 // function useEffect call when single order details by id required from order list
  useEffect(() => {
    dispatch(getSingleOrder(id));
  }, [id]);

  return isSingleOrderLoading ? (
    <OverlaySpinner/>
  ) : (
    <div className="body d-flex py-3">
      <div className="container-xxl">
        <PageHeader1 pagetitle="Order Details" Orderdetail={true} />
        {/* cardblock is used for showing data name,email,phone and order created at  */}
        <CardBlock />
        <div className="row g-3 mb-3 row-cols-1 row-cols-md-1 row-cols-lg-3 row-cols-xl-3 row-cols-xxl-3 row-deck">
        {/* AddressBlock is used for showing data firstname,lastname,address,city,email,postcode etc. */}
          <AddressBlock />
        </div>
        <div className="row g-3 mb-3">
          <div className="col-xl-12 col-xxl-8">
            <div className="card">
              <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                <h6 className="mb-0 fw-bold ">Order Summary</h6>
              </div>
              <div className="card-body">
                <div className="product-cart">
                  <div className="checkout-table table-responsive">
                    <div id="myCartTable_wrapper" className="dataTables_wrapper dt-bootstrap5 no-footer">
                      <div className="row">
                      {/* OrderSummeryBlock is used showing data product image,name,quantity of products in one order and price */}
                        <OrderSummeryBlock />
                      </div>
                    </div>
                  </div>
                  <div className="checkout-coupon-total checkout-coupon-total-2 d-flex flex-wrap justify-content-end">
                    <div className="checkout-total">
                      <div className="single-total total-payable">
                        <p className="value">Total Payable:</p>
                        <p className="price">
                          {/* function for get total price of order */}
                          {order?.cart?.reduce((total, item) => total + item.unitPrice * item.quantity, 0)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-12 col-xxl-4">
          {/* StatusOrderBlock is used for showing status  */}
            <StatusOrderBlock order={order} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default OrderDetail;
