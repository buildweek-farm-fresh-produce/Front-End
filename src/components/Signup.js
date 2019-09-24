import React from "react";
import { withFormik } from "formik"; //withFormik is used to create a higher order component
import Yup from "yup";

const SignUp = ({ values, handleChange, handleSubmit}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="username"
            name="username"
            placeholder="Username"
            value={values.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="state"
            name="state"
            placeholder="State"
            value={values.state}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="address"
            name="address"
            placeholder="Address"
            value={values.address}
            onChange={handleChange}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

const FormikSignUp = withFormik({
  mapPropsToValues({ username, email, password, state, address }) {
    return {
      username: username || "",
      email: email || "",
      password: password || "",
      state: state || "",
      address: address || ""
    };
  },
  handleSubmit(values){
      console.log(values)
  }
})(SignUp);

export default FormikSignUp;
