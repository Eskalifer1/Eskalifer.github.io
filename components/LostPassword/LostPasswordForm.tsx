import React from 'react';
import classes from '@/styles/LostPawssord.module.css'
import BooksImage from 'components/Images/BooksImage';
import FormComponent from './Form';

const LostPasswordForm = () => {
    return (
        <div className={`wrap ${classes.lost}`}>
            <BooksImage />
            <FormComponent />
        </div>
    );
};

export default LostPasswordForm;