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
  const dispatch = useDispatch();

  let params = useParams();
  const { id } = params;
  console.log("🚀 ~ OrderDetail ~ id:", id)

  const { order,isSingleOrderLoading } = useSelector((state) => state.products || {});

  useEffect(() => {
    dispatch(getSingleOrder(id));
  }, [id]);

  return isSingleOrderLoading ? (
    <OverlaySpinner/>
  ) : (
    <div className="body d-flex py-3">
      <div className="container-xxl">
        <PageHeader1 pagetitle="Order Details" Orderdetail={true} />
        <CardBlock />
        <div className="row g-3 mb-3 row-cols-1 row-cols-md-1 row-cols-lg-3 row-cols-xl-3 row-cols-xxl-3 row-deck">
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
                        <OrderSummeryBlock />
                      </div>
                    </div>
                  </div>
                  <div className="checkout-coupon-total checkout-coupon-total-2 d-flex flex-wrap justify-content-end">
                    <div className="checkout-total">
                      <div className="single-total total-payable">
                        <p className="value">Total Payable:</p>
                        <p className="price">
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
            <StatusOrderBlock order={order} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default OrderDetail;
