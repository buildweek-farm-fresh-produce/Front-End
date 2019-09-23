import React from "react";
import "../App.scss";
import { connect } from "react-redux";

function Register() {
  return (
    <div className="login">
      <h2>Registration Form</h2>
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
)(Register);
