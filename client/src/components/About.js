import React, { useState } from 'react';
import Navbar from "./Navbar";
import "./About.css";
import { FaGithub,FaLinkedin } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import bibhab from "./image/bibhab.jpeg"
import ritam from "./image/ritam.jpeg"
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
      <Navbar/>
      <div className="whole_about">
      <div className="about_card_details">
        <ul>
        <li>Welcome to our website! We are a passionate team dedicated to providing high-quality fitness services and promoting a healthy lifestyle.</li>
        <li>Our mission is to help individuals achieve their fitness goals and improve their overall well-being. We offer a wide range of fitness programs, including gym workouts, yoga classes, personal training, and more.</li>
        <li>With our experienced trainers and state-of-the-art facilities, we strive to create a supportive and motivating environment for our clients. Whether you're a beginner or an advanced fitness enthusiast, we have something for everyone.</li>
        <li>Join us today and embark on a journey towards a healthier and happier you. We are here to guide and support you every step of the way.</li>
        <li>Feel free to explore our website and learn more about the services we offer. If you have any questions or need assistance, don't hesitate to reach out to our friendly team.</li>
        <li>Thank you for choosing us as your fitness partner!</li>
        </ul>
      </div>

      

      <h2>Frequently Asked Questions</h2>
      {faqData.map((faq, index) => (
        <div key={index}>
          <h3 onClick={() => handleQuestionClick(index)}>{faq.question}</h3>
          {activeIndex === index && <p>{faq.answer}</p>}
        </div>
      ))}
    </div>
    <div className="bot_about">
      <h1>Contact Us - Creator of this Site</h1>
        <div className="contact">
          <section className='ritam'> 
              <h1 className='name_con'>Ritam Majumder</h1>
              <img src={ritam} alt="" />
              <div className="link_con">
              <a href="https://github.com/Ritam0" className="github" target='_blank'><FaGithub/></a>
              <a href="https://www.linkedin.com/in/ritam-majumder-a0795122b/" className="linkdin" target='_blank'><FaLinkedin/></a>
              <a href="mailto:ritammajumder0@gmail.com" className="email" target='_blank'><BiLogoGmail/></a>
              </div>
          </section>
          <section className='bibhab'> 
              <h1 className='name_con'>Bibhab  Mukhopadhyay</h1>
              <img src={bibhab} alt="" />
              <div className="link_con">
                <a href="https://github.com/BIBHAB22" className="github" target='_blank'><FaGithub/></a>
                <a href="https://www.linkedin.com/in/bibhab-mukhopadhyay-898303241/" className="linkdin" target='_blank'><FaLinkedin/></a>
                <a href="mailto:bibhabindia@gmail.com" className="email" target='_blank'><BiLogoGmail/></a>
              </div>
              
          </section>
        </div>
    </div>
        
        

    </div>
    </>
  );
};

export default AboutUsPage;