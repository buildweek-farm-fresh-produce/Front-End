import React from "react";
import "../App.scss";
import { connect } from "react-redux";

function Login() {
  return (
    <div className="login">
      <h1>Login Form</h1>
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
)(Login);
