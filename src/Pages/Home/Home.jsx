// import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';

const Home = () => {
    return (
        <>
            <Header/>
            <div>
                <Outlet/>
            </div>
            <Footer/>
        </>
    );
};

export default Home;