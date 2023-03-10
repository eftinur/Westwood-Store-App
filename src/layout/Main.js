import React from 'react';
import Announcement from '../components/Announcement/Announcement';
import Header from '../components/Header/Header';
import { Outlet} from "react-router-dom"
import Footer from '../components/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Announcement />
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;