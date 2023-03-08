import dynamic from "next/dynamic";
import React from "react";
import FormCopmponent from "./Form";
import loginImage from "../../assets/images/loginPhoto.png";

const HalfPageImage = dynamic(() => import('components/Images/halfPageImage'))

const LoginForm = () => {
  return (
    <div className="wrap flex">
      <HalfPageImage source={loginImage} alt={"Login Image"}/>
      <FormCopmponent />
    </div>
  );
};

export default LoginForm;
