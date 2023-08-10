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

                    <form action="">
                        <div class="form-container">
                            <form class="form">
                                <div class="form-group">
                                    <label for="name">Name</label>
                                    <input type="text" id="name" name="name" required="" />
                                </div>
                                <div class="form-group">
                                    <label for="textarea">How Can We Help You?</label>
                                    <textarea name="textarea" id="textarea" rows="10" cols="50" required=""></textarea>
                                </div>
                                <button class="cssbuttons-io">
                                    Submit
                                </button>
                            </form>
                        </div>

                    </form>
                </section>

            </section>

        </div>
    )
}

export default Feedback