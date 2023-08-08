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
                    FAQ Question 1
                  </div>
                  <div className="faqs_desc" style={{ height: openIndex === 0 ? '180px' : '0' }}>
                    Answer to FAQ Question 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum rem explicabo dolorem quas consequatur architecto, autem iste saepe. Corrupti, rerum.
                  </div>
                </section>

                <section className='faqs' onClick={() => toggleFaq(1)}>
                  <div className="faqs_heading" >
                    FAQ Question 2
                  </div>
                  <div className="faqs_desc" style={{ height: openIndex === 1 ? '180px' : '0' }}>
                    Answer to FAQ Question 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum rem explicabo dolorem quas consequatur architecto, autem iste saepe. Corrupti, rerum.
                  </div>
                </section>

                <section className='faqs' onClick={() => toggleFaq(2)}>
                  <div className="faqs_heading" >
                    FAQ Question 3
                  </div>
                  <div className="faqs_desc" style={{ height: openIndex === 2 ? '180px' : '0' }}>
                    Answer to FAQ Question 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum rem explicabo dolorem quas consequatur architecto, autem iste saepe. Corrupti, rerum.
                  </div>
                </section>

                <section className='faqs' onClick={() => toggleFaq(3)}>
                  <div className="faqs_heading" >
                    FAQ Question 4
                  </div>
                  <div className="faqs_desc" style={{ height: openIndex === 3 ? '180px' : '0' }}>
                    Answer to FAQ Question 4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum rem explicabo dolorem quas consequatur architecto, autem iste saepe. Corrupti, rerum.
                  </div>
                </section>
              </section>

            </section>
            
            <section id='about_right_sec'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti alias voluptates reprehenderit inventore temporibus modi aliquid atque labore odio distinctio exercitationem itaque id, quaerat quod accusantium nulla aperiam esse sunt velit mollitia, voluptate cumque ducimus nobis! Ullam reprehenderit voluptatum voluptates unde, aspernatur veniam doloremque modi debitis suscipit, repellat sed autem.
            </section>
          </section>






        </main>
        <Footer />
      </div>
    </>
  );
};

export default AboutUsPage;
