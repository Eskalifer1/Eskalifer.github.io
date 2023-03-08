import dynamic from "next/dynamic";
import React from "react";
import RegistrationForm from "./RegistrationForm";
import registrationImage from "./../../assets/images/registration.jpg"

const HalfPageImage = dynamic(() => import('components/Images/halfPageImage'))

const Registration = () => {
  return (
    <div className="wrap flex">
      <RegistrationForm />
      <HalfPageImage source={registrationImage} alt={"Registration Image"} />
    </div>
  );
};

export default Registration;
