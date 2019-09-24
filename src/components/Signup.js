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
  border: 2px solid green;
  width: 600px;

  h2 {
    border: 2px solid green;
  }

  input {
    border: 2px solid red;
    display: flex;
    margin: 20px auto;
    line-height: 37px;
    font-size: 1.7rem;
  }
`;

const EmailDiv = styled.div`
  label {
    display: flex;
    flex-direction: row;
  }
  border: 2px solid red;
  width: 600px;

  h2 {
    border: 2px solid green;
    margin-right: 58px;
  }

  input {
    border: 2px solid red;
    display: flex;
    margin: 20px auto;
    line-height: 37px;
    font-size: 1.7rem;
  }
`;
const PasswordDiv = styled.div`
  label {
    display: flex;
    flex-direction: row;
  }
  border: 2px solid orange;
  width: 600px;

  h2 {
    border: 2px solid green;
    margin-right: 9px;
  }

  input {
    border: 2px solid red;
    display: flex;
    margin: 20px auto;
    line-height: 37px;
    font-size: 1.7rem;
  }
`;

const StateDiv = styled.div`
  label {
    display: flex;
    flex-direction: row;
  }
  border: 2px solid black;
  width: 600px;

  h2 {
    border: 2px solid green;
    margin-right: 70px;
  }

  input {
    border: 2px solid red;
    display: flex;
    margin: 20px auto;
    line-height: 37px;
    font-size: 1.7rem;
  }
`;

const AddressDiv = styled.div`
  label {
    display: flex;
    flex-direction: row;
  }
  border: 2px solid blue;
  width: 600px;

  h2 {
    border: 2px solid green;
    margin-right: 32px;
  }

  input {
    border: 2px solid red;
    display: flex;
    margin: 20px auto;
    line-height: 37px;
    font-size: 1.7rem;
  }
`;

const Submit = styled.span`
  label {
    display: flex;
    flex-direction: row;
  }
  border: 2px solid blue;
  width: 600px;

  h2 {
    border: 2px solid green;
    margin-right: 32px;
  }

  input {
    border: 2px solid red;
    display: flex;
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
        <EmailDiv>
          {touched.email && errors.email && <p>{errors.email}</p>}
          <label>
            <h2>Email:</h2>
            <Field type="email" name="email" placeholder="Email" />
          </label>
        </EmailDiv>
        <PasswordDiv>
          {touched.password && errors.password && <p>{errors.password}</p>}
          <label>
            <h2>Password:</h2>
            <Field type="password" name="password" placeholder="Password" />
          </label>
        </PasswordDiv>
        <StateDiv>
          <label>
            <h2>State:</h2>
            <Field type="state" name="state" placeholder="State" />
          </label>
        </StateDiv>
        <AddressDiv>
          <label>
            <h2>Address:</h2>
            <Field type="address" name="address" placeholder="Address" />
          </label>
        </AddressDiv>

        <span style={{border:'2px solid red'}} className="submit">
          <label>
            Farmer:
            <Field name="farmer" type="checkbox" checked={values.farmer} />
          </label>

          <label>
            Consumer:
            <Field name="consumer" type="checkbox" checked={values.consumer} />
          </label>
          <button disabled={isSubmitting}>Submit</button>
        </span>
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
