import React, { useState } from 'react';
import Navbar from "./Navbar";
import "./About.css";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import Footer from './Footer'
import faq_left_pic from "./image/faq_left_pic.jpg"

const AboutUsPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className='About_bg'>
        <Navbar />

        <main id='about_main'>

          <section id='about_heading'>
            ABOUT <span>US</span>
          </section>
          <section id='about_middle'>

            <section id='about_left_sec'>
              <img src={faq_left_pic} alt="pic" />

              <section id='about_faq_sec'>
                <section id='faq_heading'>
                  FA<span>Q</span>
                </section>

                <section className='faqs' onClick={() => toggleFaq(0)}>
                  <div className="faqs_heading" >
                    Q: How can I find doctors near me?
                  </div>
                  <div className="faqs_desc" style={{ height: openIndex === 0 ? '180px' : '0' }}>
                    A:To find doctors near you, simply enter your location or zip code in the search bar on our website. We will then display a list of qualified doctors and healthcare professionals in your area, along with their specialties and contact information
                  </div>
                </section>

                <section className='faqs' onClick={() => toggleFaq(1)}>
                  <div className="faqs_heading" >
                    Q: What types of doctors can I find on your website?
                  </div>
                  <div className="faqs_desc" style={{ height: openIndex === 1 ? '180px' : '0' }}>
                    A: Our website lists a wide range of healthcare professionals, including general practitioners, specialists (e.g., cardiologists, dermatologists, pediatricians), dentists, psychiatrists, and more. You can filter the search results based on your specific needs and preferences
                  </div>
                </section>

                <section className='faqs' onClick={() => toggleFaq(2)}>
                  <div className="faqs_heading" >
                    Q: How do I book an appointment with a doctor I find on your website?
                  </div>
                  <div className="faqs_desc" style={{ height: openIndex === 2 ? '180px' : '0' }}>
                    Booking an appointment is easy. Once you have selected a doctor from the list, click on their profile to view their availability. You can then choose a suitable date and time and follow the booking instructions provided. Some doctors may offer online booking, while others may require you to call their office directly.
                  </div>
                </section>

                <section className='faqs' onClick={() => toggleFaq(3)}>
                  <div className="faqs_heading" >
                    Q: Are the doctors on your website verified and licensed?
                  </div>
                  <div className="faqs_desc" style={{ height: openIndex === 3 ? '180px' : '0' }}>
                    A: Yes, we take the verification and licensing of doctors seriously. All the healthcare professionals listed on our website are required to provide valid credentials and proof of licensure before being included in our database. We regularly update and verify their information to ensure accuracy and compliance with relevant regulations.
                  </div>
                </section>
                <section className='faqs' onClick={() => toggleFaq(4)}>
                  <div className="faqs_heading" >
                    Q: Can I read reviews and ratings for the doctors on your website?
                  </div>
                  <div className="faqs_desc" style={{ height: openIndex === 4 ? '180px' : '0' }}>
                    Yes, we encourage patients to leave reviews and ratings based on their experiences with the doctors. You can find these reviews on each doctors profile. Reading patient reviews can provide valuable insights into the doctors expertise, bedside manner, and overall patient satisfaction.
                  </div>
                </section>
              </section>

            </section>

            <section id='about_right_sec'>
              Welcome to our website! We are a passionate team dedicated to providing high-quality fitness services and promoting a healthy lifestyle.
              <br /><br />
              Our mission is to help individuals achieve their fitness goals and improve their overall well-being. We offer a wide range of fitness programs, including gym workouts, yoga classes, personal training, and more.
              <br /><br />
              With our experienced trainers and state-of-the-art facilities, we strive to create a supportive and motivating environment for our clients. Whether you're a beginner or an advanced fitness enthusiast, we have something for everyone.
              <br /><br />
              Join us today and embark on a journey towards a healthier and happier you. We are here to guide and support you every step of the way.
              <br /><br />
              Feel free to explore our website and learn more about the services we offer. If you have any questions or need assistance, don't hesitate to reach out to our friendly team.
              <br /><br />
              Thank you for choosing us as your fitness partner!
            </section>
          </section>






        </main>
        <Footer />
      </div>
    </>
  );
};

export default AboutUsPage;
