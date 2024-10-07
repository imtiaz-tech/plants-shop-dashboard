import React, { useEffect } from "react";
import Sidebar from "./components/common/Sidebar";
import AuthIndex from "./screens/AuthIndex";
import MainIndex from "./screens/MainIndex";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function App(props) {
  //useNavigate hook provides a simple API for navigating between pages in your React application.
  const navigate = useNavigate();
  //useSelector hook is a feature provided by the React-Redux library that allows React components to access the state stored in a Redux store.
  // we are getting auth from the store
  const auth = useSelector((state) => state.auth);
  //useEffect call on first render if token navigate to home page otherwise navigate to signin 
  useEffect(() => {
    if (auth.token) {
      navigate("/");
    } else {
      navigate("/sign-in");
    }
  }, [auth.token]);

  return auth.token ? (
    <div id="ebazar-layout" className="theme-blue">
      <Sidebar/>
      <MainIndex />
    </div>
  ) : (
    <div id="ebazar-layout" className="theme-blue">
      <AuthIndex />
    </div>
  );
}
export default App;
