import React from "react";
import "../App.scss";
import "./Header.js";

import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <h1>Farm Fresh Header Here</h1>
      <div className="login">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    stateObj: state.Obj
  };
};

export default connect(
  mapStateToProps,
  {}
)(Header);
