import React from "react";
import "../App.scss";
import { connect } from "react-redux";

function Header() {
  return (
    <div className="header">
      <h1>Farm Fresh Header Here</h1>
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
