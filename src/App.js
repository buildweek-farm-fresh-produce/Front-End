import React from "react";
import "./App.css";
import { connect } from "react-redux";

function App() {
  return (
    <div className="App">
      <h1>Farm Fresh</h1>
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
)(App);
