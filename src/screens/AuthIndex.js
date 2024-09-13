import React from "react";
import { Route, Routes as ReactRoutes } from "react-router-dom";
import SignIn from "../components/Auth/SignIn";
import Page404 from "../components/Auth/Page404";

function AuthIndex() {
  return (
    <div className="main p-2 py-3 p-xl-5 ">
      <div className="body d-flex p-0 p-xl-5">
        <div className="container-xxl">
          <div className="row g-0">
            <ReactRoutes>
              <Route exact path={"/sign-in"} element={<SignIn />} />
              <Route exact path={"/page-404"} element={<Page404 />} />
            </ReactRoutes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthIndex;
