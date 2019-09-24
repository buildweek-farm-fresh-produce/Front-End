import React from "react";
import "../App.scss";
import { connect } from "react-redux";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import Loader from "react-loader-spinner";
import { login, handleChange, farmerAC } from "../actions";

const Login = props => {
  // console.log("Login", props);

  const textChange = e => {
    props.handleChange(e);
  };

  const submitLogin = e => {
    e.preventDefault();
    props.login(e);
  };

  const farmerRadio = e => {
    props.farmerAC(e);
  };

  return (
    <div>
      <form onSubmit={submitLogin} className="loginForm">
        <h2>{props.authLoading ? "Please Wait" : "Login:"}</h2>
        <input
          type="text"
          name="username"
          placeholder="Email Address"
          value={props.credentials.username}
          onChange={e => textChange(e)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={props.credentials.password}
          onChange={e => textChange(e)}
        />
        <div className="radio">
          <div>
            <label htmlFor="farmer">Customer: </label>
            <input
              type="radio"
              name="farmer"
              value="false"
              checked={!props.farmer}
              onChange={farmerRadio}
            />
          </div>
          <div>
            <label htmlFor="farmer">Farmer: </label>
            <input
              type="radio"
              name="farmer"
              value="true"
              checked={props.farmer}
              onChange={farmerRadio}
            />
          </div>
        </div>

        <button className="loginButton">Log In</button>
      </form>
      <div className="loading">
        {props.isLoading && (
          <>
            <h2>Loading...</h2>
            <Loader type="Rings" color="red" height={80} width={80} />
          </>
        )}
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    credentials: state.credentials,
    authLoading: state.authLoading,
    farmer: state.farmer
  };
};

export default connect(
  mapStateToProps,
  { login, handleChange, farmerAC }
)(Login);
