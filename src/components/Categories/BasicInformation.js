import React from "react";

function BasicInformation(props) {
  //props pass from parent component
  const { name, setName } = props;
  return (
    <>
      <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
        {/* Heading */}
        <h6 className="mb-0 fw-bold ">Basic information</h6>
      </div>
      <div className="card-body">
        <form>
          <div className="row g-3 align-items-center">
            <div className="col-md-6">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                //onchange function called when setname in input fields
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default BasicInformation;
