import React from "react";
import "../App.scss";
import { connect } from "react-redux";

function Main(props) {
  return (
    <div>
      <h2>Welcome to Farm Fresh Produce</h2>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  {}
)(Main);
