import React from "react";
import { Dropdown } from "react-bootstrap";
import Profile from "../../assets/images/profile_av.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { logout } from "../../redux/slices/auth";

function Header() {
  //useSelector hook is a feature provided by the React-Redux library that allows React components to access the state stored in a Redux store.
  const { user } = useSelector((state) => state.auth || {});
   //useDispatch() hook is used to dispatch actions to the Redux store
  const dispatch = useDispatch();
  // onLogout called when clicked on signout
  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="header">
      <nav className="navbar py-4">
        <div className="container-xxl">
          <div className="h-right d-flex align-items-center order-1">
          {/*Dropdown in React JS list is a graphical user interface element that gives users a list of possibilities and allows them to select one value from the list. */}
            <Dropdown className="dropdown user-profilem ms-2 ms-sm-3 d-flex align-items-center zindex-popover">
              <div className="u-info me-2">
                <p className="mb-0 text-end line-height-sm ">
                  <span className="font-weight-bold">{user.name}</span>
                </p>
                <small>Admin Profile</small>
              </div>
              {/* Dropdowns are toggleable, contextual overlays for displaying lists of links and more */}
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
              {/* Dropdown menus are a classic way to offer users a number of options, without taking them to a new page */}
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
                          <span className="font-weight-bold">{user.name}</span>
                        </p>
                        <small>{user.email}</small>
                      </div>
                    </div>
                    <div>
                      <hr className="dropdown-divider border-dark " />
                    </div>
                  </div>
                  <div className="list-group m-2 ">
                  {/* onLogout function called when clicked on Sign out */}
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
