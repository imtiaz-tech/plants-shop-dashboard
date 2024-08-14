import React, { useState } from "react";

function VisibilityStatus(props) {
  const { status, setStatus } = props;
  return (
    <>
      <div className="card-header py-3 d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
        <h6 className="m-0 fw-bold">Visibility Status</h6>
      </div>
      <div className="card-body">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="couponsstatus"
            checked={status}
            onChange={(e) => {
              setStatus(true);
            }}
          />

          <label className="form-check-label">Published</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="couponsstatus"
            checked={!status}
            onChange={(e) => {
              setStatus(false);
            }}
          />
          <label className="form-check-label">UnPublished</label>
        </div>
      </div>
    </>
  );
}
export default VisibilityStatus;
