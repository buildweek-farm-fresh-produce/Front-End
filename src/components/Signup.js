import React from "react";
import { withFormik, Form, Field } from "formik"; //withFormik is used to create a higher order component
import * as Yup from "yup";
import styled from "styled-components";

const SyledMainDiv = styled.div`
  margin: 10px auto;
  border: 5px solid #a4a37a;
  width: 600px;
  background: white;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
`;
const UserDiv = styled.div`
  label {
    display: flex;
    flex-direction: row;
  }
  border: 2px solid red;

  h2 {
    border: 2px solid green;
  }

  input {
    border: 2px solid red;
    display: block;
    margin: 20px auto;
    line-height: 37px;
    font-size: 1.7rem;
  }
`;

const SignUp = ({ values, errors, touched, isSubmitting }) => {
  return (
    <SyledMainDiv>
      <Form>
        <UserDiv>
          {touched.username && errors.username && <p>{errors.username}</p>}
          <label>
            <h2>Username:</h2>
            <Field type="username" name="username" placeholder="Username" />
          </label>
        </UserDiv>
        <div>
          {touched.email && errors.email && <p>{errors.email}</p>}
          <label>
            Email:
            <Field type="email" name="email" placeholder="Email" />
          </label>
        </div>
        <div>
          {touched.password && errors.password && <p>{errors.password}</p>}
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
        <button disabled={isSubmitting}>Submit</button>
      </Form>
    </SyledMainDiv>
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
  validationSchema: Yup.object().shape({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Email is not valid")
      .required("Email is required"),
    password: Yup.string()
      .min(9, "Password must be 9 characters or more")
      .required("Password is required")
  }),
  handleSubmit(values, { resetForm, setSubmitting, setErrors }) {
    setTimeout(() => {
      if (values.email === "tolu@test.com") {
        setErrors({ email: "The Email is taken" });
      } else {
        resetForm();
      }
      setSubmitting(false);
    }, 2000);
    console.log(values);
  }
})(SignUp);

export default FormikSignUp;
