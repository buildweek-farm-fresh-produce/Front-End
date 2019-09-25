import React from "react";
import "../App.scss";
import { connect } from "react-redux";

function Main(props) {
  return (
    <div>
      <h2>
        Put some information and introduction in the main body of the page &{" "}
        {props.user.id}
      </h2>
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
