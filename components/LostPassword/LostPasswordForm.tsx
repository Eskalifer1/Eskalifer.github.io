import dynamic from 'next/dynamic';
import React from 'react';
import FormComponent from './Form';

const BooksImage = dynamic(() => import('components/Images/BooksImage'))

const LostPasswordForm = () => {
    return (
        <div className='wrap flex bg-[#D9D6DE]'>
            <BooksImage />
            <FormComponent />
        </div>
    );
};

export default LostPasswordForm;