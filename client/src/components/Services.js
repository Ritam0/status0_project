import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import "./Services.css";
import home_doctor_pic from "./image/home_doctor_pic.jpg";
import DoctorsList from './doctors';
import AmbulencePage from './ambulance';
import MedicalShopPage from './Medical_store';
import Navbar from './Navbar';



const Services = () => {
    return (
        <div>

            

            <main id='services_main'>
                <section id='serv_heading'>
                    "Your Health Our Responsibility"
                    <div className="serv_sub_heading">
                        Our Facilities
                    </div>
                </section>
                <section id='serv_cards'>



                    <div className="card">
                        <div className="content">
                            <p className="heading">Doctors</p>
                            <p className="para">
                                Dedicated to your well-being, our diverse team of skilled doctors combines expertise with compassion. Experience personalized care and comprehensive medical solutions tailored to your needs
                            </p>
                            <NavLink className="nav-link" to="/doctors">
                                <button className="btn">Read More</button>
                            </NavLink>
                        </div>
                    </div>








                </section>


            </main>



        </div>
    )
}

export default Services