import React from 'react';
import BooksImage from 'components/Images/BooksImage';
import FormComponent from './Form';

const LostPasswordForm = () => {
    return (
        <div className='wrap flex bg-[#D9D6DE]'>
            <BooksImage />
            <FormComponent />
        </div>
    );
};

export default LostPasswordForm;