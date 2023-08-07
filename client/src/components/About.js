import React, { useState } from 'react';
import Navbar from "./Navbar";
import "./About.css";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import Footer from './Footer'
import home_doctor_pic from "./image/home_doctor_pic.jpg"

const AboutUsPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleQuestionClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqData = [
    {
      question: 'Q: How can I find doctors near me?',
      answer: 'A:To find doctors near you, simply enter your location or zip code in the search bar on our website. We will then display a list of qualified doctors and healthcare professionals in your area, along with their specialties and contact information.'
    },
    {
      question: 'Q: What types of doctors can I find on your website?',
      answer: 'A: Our website lists a wide range of healthcare professionals, including general practitioners, specialists (e.g., cardiologists, dermatologists, pediatricians), dentists, psychiatrists, and more. You can filter the search results based on your specific needs and preferences.',
    },
    {
      question: 'Q: How do I book an appointment with a doctor I find on your website?',
      answer: 'Booking an appointment is easy. Once you have selected a doctor from the list, click on their profile to view their availability. You can then choose a suitable date and time and follow the booking instructions provided. Some doctors may offer online booking, while others may require you to call their office directly.',
    },
    {
      question: 'Q: Are the doctors on your website verified and licensed?',
      answer: 'A: Yes, we take the verification and licensing of doctors seriously. All the healthcare professionals listed on our website are required to provide valid credentials and proof of licensure before being included in our database. We regularly update and verify their information to ensure accuracy and compliance with relevant regulations.',
    },
    {
      question: 'Q: Can I read reviews and ratings for the doctors on your website?',
      answer: 'Yes, we encourage patients to leave reviews and ratings based on their experiences with the doctors. You can find these reviews on each doctors profile. Reading patient reviews can provide valuable insights into the doctors expertise, bedside manner, and overall patient satisfaction.',
    },
  ];

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
              <img src={home_doctor_pic} alt="" />

            </section>
            <section id='about_right_sec'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti alias voluptates reprehenderit inventore temporibus modi aliquid atque labore odio distinctio exercitationem itaque id, quaerat quod accusantium nulla aperiam esse sunt velit mollitia, voluptate cumque ducimus nobis! Ullam reprehenderit voluptatum voluptates unde, aspernatur veniam doloremque modi debitis suscipit, repellat sed autem.

            </section>
          </section>
          <section id='about_faq_sec'>
            FA<span>Q</span>

          </section>





        </main>


        <Footer />



      </div>
    </>
  );
};

export default AboutUsPage;