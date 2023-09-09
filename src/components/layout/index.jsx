/* eslint-disable react/prop-types */

import Header from '../header';
import Footer from '../footer';
import { useState } from 'react';
import BackToTopBtn from '../utils/BackToTopBtn';

const Layout = ({ children }) => {
    const [active, setActive] = useState('home');

    return (
        <div>
            <Header active={active} setActive={setActive} />
            <main className='main'>
                {children}
            </main>
            <Footer />
            <BackToTopBtn />
        </div>
    )
}

export default Layout;