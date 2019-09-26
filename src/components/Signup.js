import React from "react";
import { withFormik, Form, Field } from "formik"; //withFormik is used to create a higher order component
import * as Yup from "yup";
import "../App.scss";
import styled from "styled-components";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const SignUp = props => {
  const { values, errors, touched, isSubmitting, setFieldValue } = props;
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
            <Field type="state_id" name="state_id" placeholder="State" />
          </label>
        </StateDiv>
        <AddressDiv>
          <label>
            <h2>Address:</h2>
            <Field type="city_id" name="city_id" placeholder="City" />
          </label>
        </AddressDiv>
        <RadioButtons>
          <div>
            <label>
              <h2>Customer:</h2>
            </label>
            <input
              name="type"
              value="false"
              type="radio"
              checked={values.type === "Customer"}
              onChange={() => setFieldValue("type", "Customer")}
            />
          </div>
          <div>
            <label>
              <h2>Farmer:</h2>
            </label>
            <input
              name="type"
              type="radio"
              value="true"
              checked={values.type === "Farmer"}
              onChange={() => setFieldValue("type", "Farmer")}
            />
          </div>
        </RadioButtons>
        <div>
          <SubmitButton className="loginButton" disabled={isSubmitting}>
            Submit
          </SubmitButton>
        </div>
      </Form>
    </SyledMainDiv>
  );
};

const FormikSignUp = withFormik({
  mapPropsToValues({ username, email, password, city_id, state_id }) {
    return {
      username: username || "",
      email: email || "",
      password: password || "",
      city_id: city_id || "",
      state_id: state_id || ""
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
  handleSubmit(values, { setStatus, resetForm, setSubmitting, setErrors }) {
    let testObj = {
      username: values.username || "",
      email: values.email || "",
      password: values.password || "",
      city_id: "1",
      state_id: "1"
    };
    let API;
    values.type === "Customer"
      ? (API = "https://farm-fresh-bw.herokuapp.com/api/auth/shop/register")
      : (API = "https://farm-fresh-bw.herokuapp.com/api/auth/farmer/register");
    axiosWithAuth()
      .post(API, testObj)
      .then(res => {
        setStatus(res.data);
        console.log(testObj);
        console.log(res.data);
        resetForm();
      })
      .catch(err => {
        console.log(testObj);
        console.log(err);
      });
  }
})(SignUp);

//Styled Components
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
  width: 500px;
  margin-left: 20px;
  label {
    display: flex;
    flex-direction: row;
  }
  input {
    display: flex;
    margin: 20px auto;
    line-height: 37px;
    font-size: 1.7rem;
  }
`;
const EmailDiv = styled.div`
  width: 500px;
  margin-left: 20px;
  label {
    display: flex;
    flex-direction: row;
  }
  h2 {
    margin-right: 58px;
  }
  input {
    display: flex;
    margin: 20px auto;
    line-height: 37px;
    font-size: 1.7rem;
  }
`;
const PasswordDiv = styled.div`
  width: 500px;
  margin-left: 20px;
  label {
    display: flex;
    flex-direction: row;
  }
  h2 {
    margin-right: 9px;
  }
  input {
    display: flex;
    margin: 20px auto;
    line-height: 37px;
    font-size: 1.7rem;
  }
`;
const StateDiv = styled.div`
  width: 500px;
  margin-left: 20px;
  label {
    display: flex;
    flex-direction: row;
  }
  h2 {
    margin-right: 70px;
  }
  input {
    display: flex;
    margin: 20px auto;
    line-height: 37px;
    font-size: 1.7rem;
  }
`;
const AddressDiv = styled.div`
  width: 500px;
  margin-left: 20px;
  label {
    display: flex;
    flex-direction: row;
  }
  h2 {
    margin-right: 32px;
  }
  input {
    display: flex;
    margin: 20px auto;
    line-height: 37px;
    font-size: 1.7rem;
  }
`;
const RadioButtons = styled.div`
  font-size: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    margin: 10px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    label {
      margin-right: 10px;
    }
    input {
      margin-top: 6px;
    }
  }
`;
const SubmitButton = styled.button`
  padding: 10px;
  height: 55px;
  width: 125px;
  background: rgba(153, 170, 119, 1);
  color: white;
  border-radius: 25px;
  line-height: 20px;
  font-size: 1.8rem;
  border: 3px solid #656f7c;
  border-radius: 25px;
  box-shadow: 2px 2px 3px #000;
  font-family: "Playfair Display", serif;
  margin-left: 0px;
  margin-bottom: 20px;
`;

export default FormikSignUp;
