import React, { useState } from 'react';
import "./Services.css";
import home_doctor_pic from "./image/home_doctor_pic.jpg";

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

                    <div class="card">
                        <div class="content">
                            <p class="heading">Ambulance Service</p>
                            <p class="para">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
                                laboriosam at voluptas minus culpa deserunt delectus sapiente
                                inventore pariatur
                            </p>
                            <button class="btn">Read more</button>
                        </div>
                    </div>

                    <div class="card">
                        <div class="content">
                            <p class="heading">Doctors</p>
                            <p class="para">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
                                laboriosam at voluptas minus culpa deserunt delectus sapiente
                                inventore pariatur
                            </p>
                            <button class="btn">Read more</button>
                        </div>
                    </div>

                    <div class="card">
                        <div class="content">
                            <p class="heading">Medicine Shops</p>
                            <p class="para">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
                                laboriosam at voluptas minus culpa deserunt delectus sapiente
                                inventore pariatur
                            </p>
                            <button class="btn">Read more</button>
                        </div>
                    </div>
                    





                </section>


            </main>



        </div>
    )
}

export default Services