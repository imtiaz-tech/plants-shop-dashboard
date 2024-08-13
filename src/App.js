import React, { useEffect } from "react";
import AddModal from "./components/common/AddModal";
import Sidebar from "./components/common/Sidebar";
import AuthIndex from "./screens/AuthIndex";
import MainIndex from "./screens/MainIndex";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function App(props) {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

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
