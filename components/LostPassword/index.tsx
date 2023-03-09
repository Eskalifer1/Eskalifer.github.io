import dynamic from 'next/dynamic';
import React from 'react';
import LostPasswordForm from './LostPasswordForm';
import loginImage from "../../assets/images/loginPhoto.png";

const HalfPageImage = dynamic(() => import('components/Images/HalfPageImage'))

const LostPassword = () => {
    return (
        <div className='wrap flex bg-[#D9D6DE]'>
            <HalfPageImage source={loginImage} alt={"Login Image"} />
            <LostPasswordForm />
        </div>
    );
};

export default LostPassword;