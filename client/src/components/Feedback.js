import React from 'react'
import Navbar from './Navbar'
import Services from './Services'
import Footer from './Footer'
import './Feedback.css';
import home_doctor_pic from "./image/home_doctor_pic.jpg"

const Feedback = () => {
    return (
        <div>

            <Navbar />

            <section id='feedback_sec'>
                <section id='feedback_form'>
                    <h1>FeedBack</h1>


                    <div className="form-container">
                        <form className="form">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" required="" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="textarea">How Can We Help You?</label>
                                <textarea name="textarea" id="textarea" rows="10" cols="50" required=""></textarea>
                            </div>
                            <button className="cssbuttons-io">
                                Submit
                            </button>
                        </form>
                    </div>

                </section>

            </section>

        </div>
    )
}

export default Feedback