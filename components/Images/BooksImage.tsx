import React from 'react';
import Image from 'next/image';
import loginImage from '../../assets/images/loginPhoto.png'

import classes from '@/styles/BooksImage.module.css'

const BooksImage = () => {
    return (
        <div className={classes.formLeft}>
            <Image src={loginImage} alt='login Image' priority className={classes.image} />
        </div>
    );
};

export default BooksImage;