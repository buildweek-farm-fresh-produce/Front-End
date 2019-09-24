import React from "react";
import "../App.scss";
import { connect } from "react-redux";

function CustomerDashboard() {
  return (
    <div>
      <h2>STuff</h2>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    state: state
  };
};

export default connect(
  mapStateToProps,
  {}
)(CustomerDashboard);
