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
  /* border: 2px solid green; */
  width: 600px;

  h2 {
    /* border: 2px solid green; */
  }

  input {
    /* border: 2px solid red; */
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
  /* border: 2px solid red; */
  width: 600px;

  h2 {
    /* border: 2px solid green; */
    margin-right: 58px;
  }

  input {
    /* border: 2px solid red; */
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
  /* border: 2px solid orange; */
  width: 600px;

  h2 {
    /* border: 2px solid green; */
    margin-right: 9px;
  }

  input {
    /* border: 2px solid red; */
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
  /* border: 2px solid black; */
  width: 600px;

  h2 {
    /* border: 2px solid green; */
    margin-right: 70px;
  }

  input {
    /* border: 2px solid red; */
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
  /* border: 2px solid blue; */
  width: 600px;

  h2 {
    /* border: 2px solid green; */
    margin-right: 32px;
  }

  input {
    /* border: 2px solid red; */
    display: flex;
    margin: 20px auto;
    line-height: 37px;
    font-size: 1.7rem;
  }
`;

const Submit = styled.div`
  label {
    display: flex;
    flex-direction: row;
  }
  /* border: 2px solid blue; */
  width: 600px;

  h2 {
    /* border: 2px solid green; */
    margin-right: 32px;
  }
  /* 
  input {
    border: 2px solid red;
    display: flex;
    margin: 20px auto;
    line-height: 37px;
    font-size: 1.7rem;
  } */
`;


const SignUp = props =>{
    const{ 
    values, 
    errors, 
    touched, 
    isSubmitting,
    setFieldValue,
 }= props;

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
        <Submit>
          <div>
            <div className="farmer">
              <label>
                <h2 style={{ marginTop: " -11px", marginRight: "47px" }}>
                  Farmer:
                </h2>
                <input
                name="test" 
                type="radio" 
                value="true"
                checked={values.test === "Farmer"} 
                onChange={()=>setFieldValue("test","Farmer")}
                />
              </label>
            </div>

            <label>
              <h2 style={{ marginTop: " -11px", marginRight: "9px" }}>Consumer:</h2>
              <input
                name="test"
                value="false"
                type="radio"
                checked={values.test==="Consumer"}
                onChange={()=>setFieldValue("test","Consumer")}

              />
            </label>
            <div>
              <button type="submit" disabled={isSubmitting}>Submit</button>
            </div>
          </div>
        </Submit>
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
