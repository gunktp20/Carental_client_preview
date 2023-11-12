import { FormRow, Alert } from "../../components";
import { useAppContext } from "../../context/appContext";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { useState } from "react";

const Profile = () => {
  const {
    user,
    logoutUser,
    isLoading,
    showAlert,
    insertPhoneNumber,
    displayAlert,
  } = useAppContext();

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const [values, setValues] = useState({
    phoneNumber: user.phoneNumber ? user.phoneNumber : "",
  });

  const onSubmit = (event) => {
    event.preventDefault();
    const { phoneNumber } = values;
    if (!phoneNumber) {
      return displayAlert("Please provide phone-number!", "danger");
    }
    insertPhoneNumber({ phoneNumber });
  };

  return (
    <Wrapper>
      <div className="form">
        <h3>profile</h3>
        <div className="warning">{showAlert && <Alert />}</div>
        <div className="form-center">
          <FormRow
            type="text"
            name="firstname"
            readOnly={true}
            value={user.firstname}
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            name="lastName"
            readOnly={true}
            value={user.lastname}
            handleChange={handleChange}
          />
          <FormRow
            type="email"
            name="email"
            readOnly={true}
            value={user.email}
            handleChange={handleChange}
          />
          {user.phoneNumber && (
            <FormRow
              type="text"
              name="phone_number"
              readOnly={true}
              value={values.phoneNumber}
              handleChange={handleChange}
            />
          )}
          {(!user.phoneNumber && user.role === "user") && (
            <FormRow
              type="text"
              name="phoneNumber"
              labelText="phoneNumber"
              readOnly={false}
              value={values.phoneNumber}
              handleChange={handleChange}
            />
          )}

          {user.role === "admin" &&
            <FormRow
            type="text"
            name="role"
            readOnly={true}
            value="Admin"
            handleChange={handleChange}
          />
          }

          {!user.phoneNumber && user.role !== "admin" && (
            <button
              className="btn btn-success"
              type="submit"
              disabled={isLoading}
              onClick={(event) => {
                onSubmit(event);
              }}
            >
              {isLoading ? "Please Wait..." : "Save Change"}
            </button>
          )}

          <button
            className="btn btn-danger"
            type="submit"
            disabled={isLoading}
            onClick={() => {
              logoutUser();
            }}
          >
            {isLoading ? "Please Wait..." : "Logout"}
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Profile;
