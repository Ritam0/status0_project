import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import "./Services.css";
import home_doctor_pic from "./image/home_doctor_pic.jpg";
import DoctorsList from './doctors';
import AmbulencePage from './ambulance';
import MedicalShopPage from './Medical_store';



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
                            <p className="heading">Ambulance Service</p>
                            <p className="para">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
                                laboriosam at voluptas minus culpa deserunt delectus sapiente
                                inventore pariatur
                            </p>
                            <button className="btn"><NavLink className="nav-link" to="/ambulance">Read More</NavLink></button>
                        </div>
                    </div>

                    <div className="card">
                        <div className="content">
                            <p className="heading">Doctors</p>
                            <p className="para">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
                                laboriosam at voluptas minus culpa deserunt delectus sapiente
                                inventore pariatur
                            </p>
                            <button className="btn"><NavLink className="nav-link" to="/doctors">Read More</NavLink></button>
                        </div>
                    </div>

                    <div className="card">
                        <div className="content">
                            <p className="heading">Medicine Shops</p>
                            <p className="para">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
                                laboriosam at voluptas minus culpa deserunt delectus sapiente
                                inventore pariatur
                            </p>
                            <button className="btn"><NavLink className="nav-link" to="/Medical_store">Read More</NavLink></button>
                        </div>
                    </div>
                    





                </section>


            </main>



        </div>
    )
}

export default Services