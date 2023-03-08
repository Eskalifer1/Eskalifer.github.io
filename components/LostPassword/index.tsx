import dynamic from 'next/dynamic';
import React from 'react';
import FormComponent from './Form';
import loginImage from "../../assets/images/loginPhoto.png";

const HalfPageImage = dynamic(() => import('components/Images/halfPageImage'))

const LostPasswordForm = () => {
    return (
        <div className='wrap flex bg-[#D9D6DE]'>
            <HalfPageImage source={loginImage} alt={"Login Image"} />
            <FormComponent />
        </div>
    );
};

export default LostPasswordForm;