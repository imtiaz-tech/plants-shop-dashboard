import React from "react";
import {  useSelector } from "react-redux";
import moment from "moment";


function CardBlock() {
   //useSelector hook is a feature provided by the React-Redux library that allows React components to access the state stored in a Redux store.
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
              {/* get name for showing on single order detail page */}
              <span className="small">{order?.billingDetails?.firstName}</span>
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
              {/* get email for showing on single order detail page */}
              <span className="small">{order?.billingDetails?.email}</span>
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
             {/* get phoneNumber for showing on single order detail page */}
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
             {/* get order created date for showing on single order detail page */}
              <span className="small">{moment(order.createdAt).format("DD-MM-YYYY")}</span>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CardBlock;
