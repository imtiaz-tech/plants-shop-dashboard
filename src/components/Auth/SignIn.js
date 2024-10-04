import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signin } from "../../redux/slices/auth";
function SignIn() {
  const dispatch = useDispatch();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
 //  onLogin function call when user click on SignIn button it require 2 parameters email, password

  const onLogin = (event) => {
    event.preventDefault();
    const adminData = { email, password };
    dispatch(signin(adminData));
  };

  return (
    <div className="col-lg-6 d-flex justify-content-center align-items-center border-0 rounded-lg auth-h100 ">
      <div
        className="w-100 p-3 p-md-5 card border-0 shadow-sm"
        style={{ maxwidth: "32rem" }}
      >
        <form className="row g-1 p-3 p-md-4 mt-5">
          <div className="col-12 text-center mb-0">
            <h1>Sign in</h1>
            <br />
            <br />
            <br />
          </div>
          <div className="col-12">
            <div className="mb-2">
              <label className="form-label">Email address</label>
              <input
                name="email"
                type="email"
                className="form-control form-control-lg lift"
                placeholder="name@example.com"
                value={email}
                //onchange function called when setemail in input fields
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
          </div>
          <div className="col-12">
            <div className="mb-2">
              <div className="form-label">
                <span className="d-flex justify-content-between align-items-center">
                  Password
                </span>
              </div>
              <input
                name="password"
                type="password"
                value={password}
                className="form-control form-control-lg lift"
                placeholder="***************"
                //onchange function called when setpassword in input fields
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Remember me
              </label>
            </div>
          </div>
          <div className="col-12 text-center mt-4">
            {/* onLogin function call when user click on SignIn button  */}
            <button
              className="btn btn-lg btn-block btn-light lift text-uppercase"
              onClick={onLogin}
            >
              SignIn
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
