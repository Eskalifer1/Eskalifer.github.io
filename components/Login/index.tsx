import dynamic from "next/dynamic";
import React from "react";
import LoginForm from "./LoginForm";
import loginImage from "../../assets/images/loginPhoto.png";

const HalfPageImage = dynamic(() => import('components/Images/HalfPageImage'))

const Login = () => {
  return (
    <div className="wrap flex">
      <HalfPageImage source={loginImage} alt={"Login Image"}/>
      <LoginForm />
    </div>
  );
};

export default Login;
