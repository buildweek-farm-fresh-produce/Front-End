import React from "react";
import "../App.scss";
import "./Header.js";
import tomato from "../img/tomato.svg";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutAC } from "../actions";

function Header(props) {
  // console.log(props.consumer);

  const logOutHandle = () => {
    localStorage.setItem("token", "");
    localStorage.setItem("id", "");
    props.logoutAC();
  };
  console.log(props);
  return (
    <div className="header">
      <div className="title">
        <img src={tomato} alt="Tomato" className="tomato" />
        <h1>Farm Fresh Produce</h1>
        <img src={tomato} alt="Tomato" className="tomato" />
      </div>
      <div className="navBar">
        <Link to="/" className="link">
          Home
        </Link>

        <Link to="/shop" className="link">
          Shop
        </Link>

        {localStorage.getItem("token") === "" && (
          <Link to="/signup" className="link">
            SignUp
          </Link>
        )}

        {localStorage.getItem("token") !== "" &&
          (props.isFarmer ? (
            <Link to="/farmer" className="link">
              Stock
            </Link>
          ) : (
            <Link to="/dashboard" className="link">
              Cart
            </Link>
          ))}

        {localStorage.getItem("token") === "" ? (
          <Link to="/login" className="link">
            Login
          </Link>
        ) : (
          <Link to="/" onClick={logOutHandle} className="link">
            Logout
          </Link>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    consumer: state.consumer,
    isFarmer: state.isFarmer
  };
};

export default connect(
  mapStateToProps,
  { logoutAC }
)(Header);
