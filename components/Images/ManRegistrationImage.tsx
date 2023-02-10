import React from 'react';
import Image from 'next/image';
import registerImage from '../../assets/images/registration.jpg'

import classes from '@/styles/BooksImage.module.css'

const ManRegistrationImage = () => {
    return (
        <div className={classes.formLeft}>
            <Image src={registerImage} alt='Registration Image' priority className={classes.image} />
        </div>
    );
};

export default ManRegistrationImage;