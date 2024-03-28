import React, { useState, useEffect, useRef } from 'react';
import {Button, Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import NavigationBar from "../components/NavigationBar";
import aboutCss from '../styles/aboutus.module.css';
import rancapImage from '../images/profile/rancap.jpg';
import bongatImage from '../images/profile/bongat.jpg';
import bolinasImage from '../images/profile/bolinas.jpg';
import hiyasImage from '../images/profile/hiyas.png';
import { act } from 'react-dom/test-utils';
import Faqs from "../components/Faqs";
import Footer from "../components/Footer";

const initialSlides = [
  {
    img: "./bg.png",
    author: "ABOUT US",
    title: "TERRABORUS",
    topic: "LAGUNA STATE POLYTECHNIC UNIVERSITY",
    des: "Terraborus, a research with LSPU-Siniloan Campus, is a pioneering Geographic Information System (GIS) merging with QR technology to map indigenous fruit and forest trees. Every tree is labeled with a unique QR code, allowing users to scan for essential details such as species, status, and content. This innovative approach not only enhances conservation efforts but also promotes community engagement and awareness in preserving our rich natural heritage.",
    popup: "popupcontent1"
  },
  {
    img: "./bg.png",
    author: "",
    title: "DESIGN SLIDER",
    topic: "SLIDER 2",
    des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?",
    popup: "popupcontent2"
  },
  {
    img: "./bg.png",
    author: "",
    title: "DESIGN SLIDER",
    topic: "SLIDER 3",
    des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?",
    popup: "popupcontent3"
  },
  {
    img: "./bg.png",
    author: "",
    title: "DESIGN SLIDER",
    topic: "SLIDER 4",
    des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?",
    popup: "popupcontent4"
  }
];

const seeMoreBtns = document.querySelectorAll(".seeMoreBtn");
const popups = document.querySelectorAll(".popup");

seeMoreBtns.forEach((button, index) => {
    button.addEventListener("click", function() {
        popups.forEach(popup => {
            popup.style.display = "none";
        });
        const popupId = this.getAttribute("data-popup");
        document.getElementById(popupId).style.display = "block";
    });
});

const closeButtons = document.querySelectorAll(".popup-close");
closeButtons.forEach(button => {
    button.addEventListener("click", function() {
        this.parentNode.style.display = "none";
    });
});


const AboutUs = () => {
  const [currentPopup, setCurrentPopup] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const showPopup = (popupId) => setCurrentPopup(popupId);
  const closePopup = () => setCurrentPopup(null);

  const switchSlides = (direction) => {
    let newIndex = 0;
    if (direction === 'next') {
      newIndex = (activeIndex + 1) % initialSlides.length;
    } else if (direction === 'prev') {
      newIndex = (activeIndex - 1 + initialSlides.length) % initialSlides.length;
    }
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const timer = setTimeout(() => switchSlides('next'), 7000);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  return (
    <>
      <NavigationBar />
      <Row>
        <Col xs={12} md={7}>
        <div className={aboutCss.carousel}>
          <div className={aboutCss.list1}>
            {initialSlides.map((slide, index) => (
              <div className={`${aboutCss.item} ${index === activeIndex ? aboutCss.active : ''}`} key={index}>
                <img src={slide.img} alt={`Slide ${index + 1}`} />
                <div className={aboutCss.content}>
                  {slide.author && <div className="author">{slide.author}</div>}
                  <div className={aboutCss.title}>{slide.title}</div>
                  <div className={aboutCss.topic}>{slide.topic}</div>
                  <div className={aboutCss.des}>{slide.des}</div>
                  <div className={aboutCss.buttons}>
                    <button className="seeMoreBtn" onClick={() => showPopup(slide.popup)}>SEE MORE</button>
                  </div><br/>
                  <div className={aboutCss.arrows} id={aboutCss.arrowabout}>
          <Button variant="prev" onClick={() => switchSlides('prev')}>{'<'}</Button>
          <Button variant="next" onClick={() => switchSlides('next')}>{'>'}</Button>
        </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </Col>
        
        <Col xs={12} md={5}>
            <Row></Row>
            <Row>        
        <div className={aboutCss.thumbnail} id={aboutCss.thumbnailabout}>
          {initialSlides.map((slide, index) => (
            <div
              key={slide.title}
              className={`${aboutCss.item} ${index === activeIndex ? aboutCss.active : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              <img src={slide.img} alt={`Thumbnail ${index + 1}`} />
              <div className={aboutCss.content}>
                <div className={aboutCss.title}>{slide.title}</div>
                <div id={aboutCss.description}>{slide.topic}</div>
              </div>
            </div>
          ))}
        </div></Row>
        </Col>
        </Row>
        <div className={aboutCss.time}></div>

      <div id={aboutCss.popupcontent1} className={`${aboutCss.popup} ${currentPopup === aboutCss.popupcontent1 ? 'active' : ''}`}>
        <span className={aboutCss.popupClose} onClick={closePopup}>&times;</span>
        <h2>Additional Information 1</h2>
        <p>This is some additional information for the first popup.</p>
        <p>lalala</p>
      </div>
      <div id={aboutCss.popupcontent2} className={`${aboutCss.popup} ${currentPopup === aboutCss.popupcontent2 ? 'active' : ''}`}>
        <span className={aboutCss.popupClose} onClick={closePopup}>&times;</span>
        <h2>Additional Information 1</h2>
        <p>This is some additional information for the first popup.</p>
        <p>test2</p>
      </div>
      <div id={aboutCss.popupcontent3} className={`${aboutCss.popup} ${currentPopup === aboutCss.popupcontent3 ? 'active' : ''}`}>
        <span className={aboutCss.popupClose} onClick={closePopup}>&times;</span>
        <h2>Additional Information 1</h2>
        <p>This is some additional information for the first popup.</p>
        <p>test 3</p>
      </div>
      <div id={aboutCss.popupcontent4} className={`${aboutCss.popup} ${currentPopup === aboutCss.popupcontent4 ? 'active' : ''}`}>
        <span className={aboutCss.popupClose} onClick={closePopup}>&times;</span>
        <h2>Additional Information 1</h2>
        <p>This is some additional information for the first popup.</p>
        <p>sleep when?</p>

      </div>

      <div className={aboutCss.weAreBlock}>

        <div id={aboutCss.aboutUsSection}>

          <div className={aboutCss.aboutUsImage}>

            <img src="./bg.png" width="808" height="458" alt="Lobby Image" />

          </div>

          <div className={aboutCss.aboutUsInfo}>

            <h2>Indigeneous Fruit Trees</h2>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla inventore eligendi odit temporibus nobis, voluptas nihil maxime a suscipit dolore tenetur eius amet! Ea aut fugit quis minus placeat asperiores.</p>


          </div>

        </div>

        <div id={aboutCss.historySection}>

          <div className={aboutCss.historyImage}>

            <img src="./bg.png" width="951" height="471" alt="Building Pic" />

          </div>

          <div className={aboutCss.historyInfo}>

            <h2>Indigeneous Forest Trees</h2>

            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium tempore libero omnis corrupti commodi velit obcaecati quia, maiores tempora, odit ipsam placeat veniam minima, rem dicta quae inventore deleniti nesciunt.</p>

          </div>

        </div>
        <div className={aboutCss.center}>
          <div className={aboutCss.team}>
            <div className={aboutCss.title}>Our Team</div>
            <div className={aboutCss.profiles}>
              <div className={aboutCss.profile}>
                <div className={aboutCss.card}>
                  <div className={aboutCss.head}>
                  <img src={rancapImage} alt=""/>
                    <div className={aboutCss.name}>Sharlyn Rancap</div>
                  </div>
                  <div className={aboutCss.content}>
                    <div className={aboutCss.role}>Team Leader</div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
                    accusamus fuga.
                  </div>
                  <div className={aboutCss.icons}>
                    <a href=""><i className="fa-brands fa-linkedin"></i></a>
                    <a href=""><i className="fa-brands fa-github"></i></a>
                    <a href=""><i className="fa-solid fa-envelope"></i></a>
                  </div>
                </div>

                <img src={rancapImage} alt="" id={aboutCss.picture} />
                <div className={aboutCss.details}>
                Sharlyn Rancap
                  <span>Team Leader</span>
                </div>
              </div>

              <div className={aboutCss.profile}>
                <div className={aboutCss.card}>
                  <div className={aboutCss.head}>
                  <img src={bongatImage} alt=""/>
                    <div className={aboutCss.name}>Nikko Bongat</div>
                  </div>
                  <div className={aboutCss.content}>
                    <div className={aboutCss.role}>Programmer</div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur, harum recusandae!
                  </div>
                  <div className={aboutCss.icons}>
                    <a href=""><i className="fa-brands fa-linkedin"></i></a>
                    <a href=""><i className="fa-brands fa-github"></i></a>
                    <a href=""><i className="fa-solid fa-envelope"></i></a>
                  </div>
                  <div className={aboutCss.pattern}></div>
                </div>
                <img src={bongatImage} alt="" id={aboutCss.picture} />
                <div className={aboutCss.details}>
                Nikko Bongat
                  <span>Programmer</span>
                </div>
              </div>

              <div className={aboutCss.profile}>
                <div className={aboutCss.card}>
                  <div className={aboutCss.head}>
                  <img src={bolinasImage} alt=""/>
                    <div className={aboutCss.name}>Symon Christopher Bolinas</div>
                  </div>
                  <div className={aboutCss.content}>
                    <div className={aboutCss.role}>Graphics</div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                    magni distinctio quae.
                  </div>
                  <div className={aboutCss.icons}>
                    <a href=""><i className="fa-brands fa-linkedin"></i></a>
                    <a href=""><i className="fa-brands fa-github"></i></a>
                    <a href=""><i className="fa-solid fa-envelope"></i></a>
                  </div>
                  <div className={aboutCss.pattern}></div>
                </div>
                <img src={bolinasImage} alt="" id="picture" />
                <div className={aboutCss.details}>
                  Symon Christopher Bolinas
                  <span>Graphics</span>
                </div>
              </div>

              <div className={aboutCss.profile}>
                <div className={aboutCss.card}>
                  <div className={aboutCss.head}>
                  <img src={hiyasImage} alt=""/>
                    <div className={aboutCss.name}>Sonny Boy Hiyas</div>
                  </div>
                  <div className={aboutCss.content}>
                    <div className={aboutCss.role}>Data Collection</div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                    magni distinctio quae.
                  </div>
                  <div className={aboutCss.icons}>
                    <a href=""><i className="fa-brands fa-linkedin"></i></a>
                    <a href=""><i className="fa-brands fa-github"></i></a>
                    <a href=""><i className="fa-solid fa-envelope"></i></a>
                  </div>
                  <div className={aboutCss.pattern}></div>
                </div>
                <img src={hiyasImage} alt="" id={aboutCss.picture} />
                <div className={aboutCss.details}>
                Sonny Boy Hiyas
                  <span>Data Collection</span>
                </div>
              </div>
            </div>
          </div>
        </div>
                    {/* Faqs Section */}
            <div className={aboutCss.faqss}>
              <Faqs />
            </div>    
            {/* Footer Section */}
            <footer>
        <Footer />
      </footer>
      </div>
 

    </>
  );
};

export default AboutUs;
