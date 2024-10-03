import React from "react";
import { Dropdown } from "react-bootstrap";
import Profile from "../../assets/images/profile_av.svg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { logout } from "../../redux/slices/auth";

function Header() {
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="header">
      <nav className="navbar py-4">
        <div className="container-xxl">
          <div className="h-right d-flex align-items-center order-1">
            <Dropdown className="dropdown user-profilem ms-2 ms-sm-3 d-flex align-items-center zindex-popover">
              <div className="u-info me-2">
                <p className="mb-0 text-end line-height-sm ">
                  <span className="font-weight-bold">superadmin</span>
                </p>
                <small>Admin Profile</small>
              </div>
              <Dropdown.Toggle
                as="a"
                className="nav-link dropdown-toggle pulse p-0 mb-3"
                href="#!"
                role="button"
              >
                <img
                  className="avatar lg rounded-circle img-thumbnail"
                  src={Profile}
                  alt="profile"
                />
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu rounded-lg shadow border-0 dropdown-animation dropdown-menu-end p-0 m-0 mt-5 ">
                <div className="card border-0   w280">
                  <div className="card-body pb-0 ">
                    <div className="d-flex py-1">
                      <img
                        className="avatar rounded-circle"
                        src={Profile}
                        alt=""
                      />
                      <div className="flex-fill ms-3">
                        <p className="mb-0">
                          <span className="font-weight-bold">superadmin</span>
                        </p>
                        <small>admin@planshop.com</small>
                      </div>
                    </div>
                    <div>
                      <hr className="dropdown-divider border-dark " />
                    </div>
                  </div>
                  <div className="list-group m-2 ">
                    <button
                      className="list-group-item list-group-item-action border-0"
                      onClick={() => onLogout()}
                    >
                      <i className="icofont-logout fs-5 me-3"></i>Signout
                    </button>
                  </div>
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <button
            className="navbar-toggler p-0 border-0 menu-toggle order-3"
            type="button"
            onClick={() => {
              var sidebar = document.getElementById("mainsidemenu");
              if (sidebar) {
                if (sidebar.classList.contains("open")) {
                  sidebar.classList.remove("open");
                } else {
                  sidebar.classList.add("open");
                }
              }
            }}
          >
            <span className="fa fa-bars"></span>
          </button>
          <div className="order-0 col-lg-4 col-md-4 col-sm-12 col-12 mb-4"></div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
