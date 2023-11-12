import React, { useEffect, useState } from "react";
import Wrapper from "../assets/wrappers/RegisterPage";
import { FormRow, Text, Alert } from "../components";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";

const initialState = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  confirm_password: "",
  isMember: true,
};

function Register() {
  const [values, setValues] = useState(initialState);
  //global state and useNavigate
  const navigate = useNavigate();
  const { showAlert, isLoading, displayAlert, setupUser , user } = useAppContext();

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    const { firstname, lastname, email, password, isMember, confirm_password } =
      values;

    if (
      !email ||
      !password ||
      (!isMember && !firstname) ||
      (!isMember && !lastname) ||
      (!isMember && !confirm_password)
    ) {
      displayAlert("Please provide all value!", "danger");
      return;
    }

    if (!isMember && confirm_password !== password) {
      displayAlert("confirm password must be the same with password!");
      return;
    }

    const currentUser = { firstname, lastname, email, password };

    if (isMember) {
      setupUser({
        currentUser,
        endPoint: "login",
        alertText: "Login Successful! Redirecting...",
      });
    } else {
      setupUser({
        currentUser,
        endPoint: "register",
        alertText: "User Created! Redirecting...",
      });
    }
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      });
    }
  }, [user]);

  return (
    <Wrapper>
      <form className="form" onSubmit={onSubmit}>
        <Text width="200px" />
        {showAlert && <Alert />}
        <div>
          {/*name input*/}
          {!values.isMember && (
            <FormRow
              type="text"
              name="firstname"
              values={values.firstname}
              handleChange={handleChange}
            />
          )}
          {!values.isMember && (
            <FormRow
              type="text"
              name="lastname"
              values={values.lastname}
              handleChange={handleChange}
            />
          )}
          {/*email input*/}
          <FormRow
            type="email"
            name="email"
            values={values.email}
            handleChange={handleChange}
          />
          {/*password input*/}
          <FormRow 
            type="password"
            name="password"
            values={values.password} 
            handleChange={handleChange}
          />
          {!values.isMember && (
            <FormRow
              type="password"
              name="confirm_password"
              values={values.password}
              handleChange={handleChange}
              labelText="Repeat password"
            />
          )}
        </div>
        <button type="submit" className="btn btn-block shadow">
          {isLoading ? "loading..." : "Submit"}
        </button>
        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <button
            type="button"
            onClick={toggleMember}
            className="member-btn"
            disabled={isLoading}
          >
            {values.isMember ? " Register" : " Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
}

export default Register;
