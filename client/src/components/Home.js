import React from 'react'
import Navbar from './Navbar'
import Services from './Services'
import Footer from './Footer'
import './Home.css';
import home_doctor_pic from "./image/home_doctor_pic.jpg"

const Home = () => {
    return (
        <div>
            <Navbar />
           
            <main id='home_main'>

                <section id='left_sec'>
                    <section id='home_heading'>
                        Healthy <span> Insights </span>
                    </section>
                    <section id='home_desc'>
                    Empowering Health and Wellness: Your Trusted Source for Medical Insights and Care
                    </section>
                    <section id='home_left_btn'>
                        <a href="#services_main">
                            <button className="button">
                                <span className="button-content" >Our Services</span>
                            </button>
                        </a>

                    </section>

                </section>
                <section id='right_sec'>
                    <img src={home_doctor_pic} alt="pic" />
                </section>


            </main>


            <Services />
            {/* <Footer /> */}

        </div>
    )
}

export default Home