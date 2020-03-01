import React from 'react';

import Navbar from '../components/includes/Navbar';
import Footer from '../components/includes/Footer';
export default (props) => {
    return (
        <div>
            <Navbar />
                {props.children}
            <Footer />
        </div>
    );
};