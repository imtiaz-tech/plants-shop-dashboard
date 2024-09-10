import React from "react";
import { useSelector } from "react-redux";

function AddressBlock() {
  const { order } = useSelector((state) => state.products || {});
  return (
    <>
      <div className="col">
        <div className="card">
          <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
            <h6 className="mb-0 fw-bold ">Billing Address</h6>
          </div>
          <div className="card-body">
            <div className="row g-3">
            <div className="col-12">
                <label className="form-label col-6 col-sm-5">Name:</label>
                <span>
                  <strong>{order.billingDetails?.firstName}  {order.billingDetails?.lastName}</strong>
                </span>
              </div>
              <div className="col-12">
                <label className="form-label col-6 col-sm-5">Address(Apartment Address):</label>
                <span>
                  <strong>{order.billingDetails?.address}  ({order.billingDetails?.apartmentAddress})</strong>
                </span>
              </div>
              <div className="col-12">
                <label className="form-label col-6 col-sm-5">State(city):</label>
                <span>
                  <strong>{order.billingDetails?.state}  ({order.billingDetails?.city})</strong>
                </span>
              </div>
              <div className="col-12">
                <label className="form-label col-6 col-sm-5">Email:</label>
                <span>
                  <strong>{order.billingDetails?.email}</strong>
                </span>
              </div>
              <div className="col-12">
                <label className="form-label col-6 col-sm-5">Phone Number:</label>
                <span>
                  <strong>{order.billingDetails?.phoneNumber}</strong>
                </span>
              </div>
              <div className="col-12">
                <label className="form-label col-6 col-sm-5">Post Code:</label>
                <span>
                  <strong>{order.billingDetails?.postCode}</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddressBlock;
