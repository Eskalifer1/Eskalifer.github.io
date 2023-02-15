import React from "react";
import RegistrationForm from "./RegistrationForm";
import ManRegistrationImage from "components/Images/ManRegistrationImage";

const Registration = () => {
  return (
    <div className="wrap flex">
      <RegistrationForm />
      <ManRegistrationImage />
    </div>
  );
};

export default Registration;
