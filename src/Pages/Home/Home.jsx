import { Spin } from 'antd';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import { createContext, useState, Suspense } from 'react';
const Footer = React.lazy(() => import('../../Components/Footer/Footer'));

export const PRIVET_CONTEXT = createContext();
const Home = () => {
    
const [userName, setUserName] = useState('')
const [pass, setPass] = useState('');
const value = {userName, setUserName, pass, setPass };
    return (
        <>
        <PRIVET_CONTEXT.Provider value={value}>
            <Header/>
            <div>
                <Outlet/>
            </div>
            <Suspense fallback={<div className='d-flex justify-content-center'><Spin/></div>}>
                <Footer/>
            </Suspense>
        </PRIVET_CONTEXT.Provider>
        </>
    );
};

export default Home;