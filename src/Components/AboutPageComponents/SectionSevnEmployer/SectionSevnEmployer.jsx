// import React from 'react';
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";

const SectionSevnEmployer = () => {
    return (
        <section className="py-4">
            <div className="container">
                <div className="row g-3">
                    <div className="col-md-3">
                        <div className="border p-2 py-md-4">
                            <h4 className="text-center">Neil <b>Kelley</b></h4>
                            <small className="d-block text-center py-3">CEO/Founding Partner</small>
                            <div className="d-flex justify-content-center align-items-center">
                              <a className='text-dark fs-3' target='_blank' rel='noreferrer' href="https://www.facebook.com/flnvaz22"><FaFacebookF className='m-2' /></a>
                              <a className='text-dark fs-3' target='_blank' rel='noreferrer' href="https://twitter.com/rgvturf"><FaTwitter className='m-2' /></a>
                              <a className='text-dark fs-3' target='_blank' rel='noreferrer' href="https://www.instagram.com/rgvturf/"><FaInstagram className='m-2' /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="border px-2 py-4">
                            <h4 className="text-center">Omar <b>Pando</b></h4>
                            <small className="d-block text-center py-3">COO/Founding Partner</small>
                            <div className="d-flex justify-content-center align-items-center">
                              <a className='text-dark fs-3' target='_blank' rel='noreferrer' href="https://www.facebook.com/rgvturf"><FaFacebookF className='m-2' /></a>
                              <a className='text-dark fs-3' target='_blank' rel='noreferrer' href="https://twitter.com/rgvturf"><FaTwitter className='m-2' /></a>
                              <a className='text-dark fs-3' target='_blank' rel='noreferrer' href="https://www.instagram.com/rgvturf/"><FaInstagram className='m-2' /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="border px-2 py-4">
                            <h4 className="text-center">Alex <b>Garza</b></h4>
                            <small className="d-block text-center py-3">Team Lead</small>
                            <div className="d-flex justify-content-center align-items-center">
                              <a className='text-dark fs-3' target='_blank' rel='noreferrer' href="https://www.facebook.com/rgvturf"><FaFacebookF className='m-2' /></a>
                              <a className='text-dark fs-3' target='_blank' rel='noreferrer' href="https://twitter.com/rgvturf"><FaTwitter className='m-2' /></a>
                              <a className='text-dark fs-3' target='_blank' rel='noreferrer' href="https://www.instagram.com/rgvturf/"><FaInstagram className='m-2' /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="border px-2 py-4">
                            <h4 className="text-center">Limber <b>Hernandez</b></h4>
                            <small className="d-block text-center py-3">Pro Turf Installer</small>
                            <div className="d-flex justify-content-center align-items-center">
                              <a className='text-dark fs-3' target='_blank' rel='noreferrer' href="https://www.facebook.com/rgvturf"><FaFacebookF className='m-2' /></a>
                              <a className='text-dark fs-3' target='_blank' rel='noreferrer' href="https://twitter.com/rgvturf"><FaTwitter className='m-2' /></a>
                              <a className='text-dark fs-3' target='_blank' rel='noreferrer' href="https://www.instagram.com/rgvturf/"><FaInstagram className='m-2' /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionSevnEmployer;