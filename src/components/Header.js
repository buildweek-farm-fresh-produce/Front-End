import React from "react";
import "../App.scss";
import "./Header.js";
import tomato from "../img/tomato.svg";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
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
        <Link to="/login" className="link">
          Login
        </Link>
        {/* <Link to="/register" className="link">
          Register
        </Link> */}
        <Link to="/signup" className="link">
          SignUp
        </Link>
        <Link to='/shop' className='link'>Shop</Link>
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
)(Header);
