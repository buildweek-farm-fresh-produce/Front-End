import React from "react";
import { withFormik, Form, Field } from "formik"; //withFormik is used to create a higher order component
import Yup from "yup";

const SignUp = ({ values, handleChange }) => {
  return (
    <div>
      <Form>
        <div>
          <label>
            Username:
            <Field type="username" name="username" placeholder="Username" />
          </label>
        </div>
        <div>
          <label>
            Email:
            <Field type="email" name="email" placeholder="Email" />
          </label>
        </div>
        <div>
          <label>
            Password:
            <Field type="password" name="password" placeholder="Password" />
          </label>
        </div>
        <div>
          <label>
            State:
            <Field type="state" name="state" placeholder="State" />
          </label>
        </div>
        <div>
          <label>
            Address:
            <Field type="address" name="address" placeholder="Address" />
          </label>
        </div>
        <label>
          Farmer:
          <Field name="farmer" type="checkbox" checked={values.farmer} />
        </label>
        <label>
          Consumer:
          <Field name="consumer" type="checkbox" checked={values.consumer} />
        </label>
        <button>Submit</button>
      </Form>
    </div>
  );
};

const FormikSignUp = withFormik({
  mapPropsToValues({
    username,
    email,
    password,
    state,
    address,
    farmer,
    consumer
  }) {
    return {
      username: username || "",
      email: email || "",
      password: password || "",
      state: state || "",
      address: address || "",
      farmer: farmer || false,
      consumer: consumer || false
    };
  },
  handleSubmit(values) {
    console.log(values);
  }
})(SignUp);

export default FormikSignUp;
