import dynamic from "next/dynamic";
import React from "react";
import registrationImage from "./../../assets/images/registration.jpg";
import RegistrationForm from "./RegistrationForm";

const HalfPageImage = dynamic(() => import("components/Images/HalfPageImage"));

const Registration = () => {
  return (
    <div className="wrap flex">
      <div className="minmd:min-w-[50%] min-w-[100%]">
        <RegistrationForm />
      </div>
      <HalfPageImage source={registrationImage} alt={"Registration Image"} />
    </div>
  );
};

export default Registration;
