import dynamic from "next/dynamic";
import React from "react";
import FormCopmponent from "./Form";

const BooksImage = dynamic(() => import('components/Images/BooksImage'))

const LoginForm = () => {
  return (
    <div className="wrap flex">
      <BooksImage />
      <FormCopmponent />
    </div>
  );
};

export default LoginForm;
