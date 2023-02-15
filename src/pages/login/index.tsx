import { NextPage } from 'next'
import React from 'react'

import Navigation from 'components/Navigation/Navigation'
import FooterComponent from 'components/Footer/FooterComponent';
import LoginForm from 'components/LoginForm/LoginForm';

const LoginPage: NextPage = () => {
    return (
        <div style={{backgroundColor: '#D9D6DE'}}>
            <Navigation isSearchShow={false} />
            <LoginForm />
            <FooterComponent />
        </div>
    );
};

export default LoginPage;