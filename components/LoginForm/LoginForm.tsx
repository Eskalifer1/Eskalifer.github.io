import React from 'react';

import classes from '@/styles/StartForm.module.css'
import BooksImage from 'components/Images/BooksImage';
import FormCopmponent from './Form';


const LoginForm = () => {
    return (
        <div className={`wrap ${classes.login}`}>
            <BooksImage />
            <FormCopmponent />
        </div>
    );
};

export default LoginForm;