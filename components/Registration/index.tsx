import dynamic from "next/dynamic";
import React from "react";
import registrationImage from "./../../assets/images/registration.jpg"

const HalfPageImage = dynamic(() => import('components/Images/HalfPageImage'))
const RegistrationForm = dynamic(() => import('./RegistrationForm'), {ssr: false})

const Registration = () => {
  return (
    <div className="wrap flex">
      <RegistrationForm />
      <HalfPageImage source={registrationImage} alt={"Registration Image"} />
    </div>
  );
};

export default Registration;
