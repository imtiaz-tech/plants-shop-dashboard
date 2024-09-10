import React from "react";
import { OrderDetailData } from "../../Data/OrderDetailData";
import {  useSelector } from "react-redux";
import moment from "moment";


function CardBlock() {
    const { order } = useSelector((state) => state.products || {});

  return (
    <div className="row g-3 mb-3 row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 row-cols-xl-4">
      <div className="col">
        <div className="alert-success alert mb-0">
          <div className="d-flex align-items-center">
            <div className="avatar rounded no-thumbnail bg-success text-light">
              <i className="fa fa-user fa-lg fa-lg"></i>
            </div>
            <div className="flex-fill ms-3 text-truncate">
              <div className="h6 mb-0">Name</div>
              <span className="small">{order?.userId?.name}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="alert-success alert mb-0">
          <div className="d-flex align-items-center">
            <div className="avatar rounded no-thumbnail bg-warning text-light">
              <i className="fa fa-envelope fa-lg fa-lg"></i>
            </div>
            <div className="flex-fill ms-3 text-truncate">
              <div className="h6 mb-0">Email</div>
              <span className="small">{order.userId?.email}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="alert-success alert mb-0">
          <div className="d-flex align-items-center">
            <div className="avatar rounded no-thumbnail bg-info text-light">
              <i className="fa fa-phone-square fa-lg fa-lg"></i>
            </div>
            <div className="flex-fill ms-3 text-truncate">
              <div className="h6 mb-0">Phone No</div>
              <span className="small">{order.billingDetails?.phoneNumber}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="alert-success alert mb-0">
          <div className="d-flex align-items-center">
            <div className="avatar rounded no-thumbnail bg-info text-light">
              <i className="fa fa-shopping-cart fa-lg fa-lg"></i>
            </div>
            <div className="flex-fill ms-3 text-truncate">
              <div className="h6 mb-0">Order Created at</div>
              <span className="small">{moment(order.createdAt).format("DD-MM-YYYY")}</span>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CardBlock;
