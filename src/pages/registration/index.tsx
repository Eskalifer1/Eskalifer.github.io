import FooterComponent from 'components/Footer/FooterComponent';
import Navigation from 'components/Navigation/Navigation';
import Registration from 'components/Registration/Registration';
import React from 'react';

const RegistrationPage = () => {
    return (
        <div style={{ backgroundColor: '#E3F6FD' }}>
            <Navigation />
            <Registration />
            <FooterComponent />
        </div>
    );
};

export default RegistrationPage;