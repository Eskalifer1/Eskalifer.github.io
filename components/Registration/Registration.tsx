import React from 'react';
import classes from '@/styles/Registration.module.css'
import RegistrationForm from './RegistrationForm';
import ManRegistrationImage from 'components/Images/ManRegistrationImage';

const Registration = () => {
    return (
        <div className={`wrap ${classes.registration}`}>
            <RegistrationForm />
            <ManRegistrationImage />
        </div>
    );
};

export default Registration;