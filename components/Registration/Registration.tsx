import dynamic from "next/dynamic";
import React from "react";
import RegistrationForm from "./RegistrationForm";
const ManRegistrationImage = dynamic(
  () => import("components/Images/BooksImage")
);

const Registration = () => {
  return (
    <div className="wrap flex">
      <RegistrationForm />
      <ManRegistrationImage />
    </div>
  );
};

export default Registration;
