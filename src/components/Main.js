import React from "react";
import "../App.scss";
import { connect } from "react-redux";

function Main() {
  return (
    <div>
      <h2>
        Put some information and introduction in the main body of the page
      </h2>
      <a href="/dashboard">Go To Dashboard</a>
      
      <div>
      <a href="/login">Go To Login</a>
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
)(Main);
