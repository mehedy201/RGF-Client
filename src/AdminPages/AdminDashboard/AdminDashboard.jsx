// import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import logoImage from '../../assets/FInal_Logo-1.webp';
import './AdminDashboard.css'

const AdminDashboard = () => {
    return (
        <div className='py-md-4'>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 bg-light dashboard_lift_style">
                        <img className='mx-auto' style={{height: '70px', width: 'auto'}} src={logoImage} alt="" />
                        <div className='py-3'>
                            <Link to={'/dashbord/add-product'} className='d-block fw-bold my-2 border p-2 dashboard_link_style'>Add Product</Link>
                            <Link to={'/dashbord/manage-product'} className='d-block fw-bold my-2 border p-2 dashboard_link_style'>Add Modeling Image</Link>
                            <Link to={'/dashbord/manage-product'} className='d-block fw-bold my-2 border p-2 dashboard_link_style'>Manage Product</Link>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <h2 className="text-center fs-4 fw-bold bg-light py-3">Wellcome to RGF Admin Dashbord</h2>
                        <div className='py-4'>
                            <Outlet/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;