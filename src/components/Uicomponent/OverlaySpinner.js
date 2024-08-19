import React from "react";
import { Spinner } from "react-bootstrap";

function OverlaySpinner() {
  return (
    <div className="border-top mt-5 pt-3">
      <Spinner animation="border" style={{ width: "3rem", height: "3rem" }} className="me-3" />
    </div>
  );
}

export default OverlaySpinner;
