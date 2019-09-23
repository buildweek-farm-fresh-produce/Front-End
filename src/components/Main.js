import React from "react";
import "../App.scss";
import { connect } from "react-redux";

function Main() {
  return (
    <div>
      <h2>
        Put some information and introduction in the main body of the page
      </h2>
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
