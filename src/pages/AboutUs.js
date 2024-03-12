import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import NavigationBar from "../components/NavigationBar";
import '../styles/aboutus.css';

const AboutUs = () => {
  const [currentPopup, setCurrentPopup] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0); // State to track the current slide

  const showPopup = (popupId) => {
    setCurrentPopup(popupId);
  };

  const closePopup = () => {
    setCurrentPopup(null);
  };

  // Adjusted showSlider function to handle slide changes
  const showSlider = (type) => {
    if (type === 'next') {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 4); // Assuming 4 slides for simplicity
    } else if (type === 'prev') {
      setCurrentSlide((prevSlide) => (prevSlide - 1 + 4) % 4); // Loop back to the last slide if going back from the first one
    } else {
      setCurrentSlide(type);
    }
  };

  // Adjust useEffect for auto-advancing slides
  useEffect(() => {
    const runNextAuto = setTimeout(() => {
      showSlider('next');
    }, 7000); // Change slides every 7 seconds

    return () => clearTimeout(runNextAuto);
  }, [currentSlide]); // Rerun the effect when currentSlide changes

  const slides = [
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
      topic: "SLIDER 1",
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



  return (
    <>
      <NavigationBar />
      <div>
        <div className="carousel">
          <div className="list">
            {slides.map((slide, index) => (
              <div className={`item ${index === currentSlide ? 'active' : ''}`} key={index}>
                <img src={slide.img} alt={`Slide ${index + 1}`} />
                <div className="content">
                  {slide.author && <div className="author">{slide.author}</div>}
                  <div className="title">{slide.title}</div>
                  <div className="topic">{slide.topic}</div>
                  <div className="des">{slide.des}</div>
                  <div className="buttons">
                    <button className="seeMoreBtn" onClick={() => showPopup(slide.popup)}>SEE MORE</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="thumbnail">
          <div className="item">
            <img src="./bg.png" />
            <div className="content">
              <div className="title">
                Name Slider 1
              </div>
              <div className="description">
                Description
              </div>
            </div>
          </div>
          <div className="item">
            <img src="./bg.png" />
            <div className="content">
              <div className="title">
                Name Slider 2
              </div>
              <div className="description">
                Description
              </div>
            </div>
          </div>
          <div className="item">
            <img src="./bg.png" />
            <div className="content">
              <div className="title">
                Name Slider 3
              </div>
              <div className="description">
                Description
              </div>
            </div>
          </div>
          <div className="item">
            <img src="./bg.png" />
            <div className="content">
              <div className="title">
                Name Slider 4
              </div>
              <div className="description">
                Description
              </div>
            </div>
          </div>
        </div>
        <div className="arrows">
          <Button variant="prev" onClick={() => showSlider('prev')}>{'<'}</Button>
          <Button variant="next" onClick={() => showSlider('next')}>{'>'}</Button>
        </div>
        <div className="time"></div>
      </div>

      <div id="popupcontent1" className={`popup ${currentPopup === 'popupcontent1' ? 'active' : ''}`}>
        <span className="popup-close" onClick={closePopup}>&times;</span>
        <h2>Additional Information 1</h2>
        <p>This is some additional information for the first popup.</p>
      </div>
      <div id="popupcontent2" className={`popup ${currentPopup === 'popupcontent2' ? 'active' : ''}`}>
        <span className="popup-close" onClick={closePopup}>&times;</span>
        <h2>Additional Information 1</h2>
        <p>This is some additional information for the first popup.</p>
      </div>
      <div id="popupcontent3" className={`popup ${currentPopup === 'popupcontent3' ? 'active' : ''}`}>
        <span className="popup-close" onClick={closePopup}>&times;</span>
        <h2>Additional Information 1</h2>
        <p>This is some additional information for the first popup.</p>
      </div>
      <div id="popupcontent4" className={`popup ${currentPopup === 'popupcontent4' ? 'active' : ''}`}>
        <span className="popup-close" onClick={closePopup}>&times;</span>
        <h2>Additional Information 1</h2>
        <p>This is some additional information for the first popup.</p>
      </div>

      <div className="we-are-block">

        <div id="about-us-section">

          <div className="about-us-image">

            <img src="./bg.png" width="808" height="458" alt="Lobby Image" />

          </div>

          <div className="about-us-info">

            <h2>Indigeneous Fruit Trees</h2>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla inventore eligendi odit temporibus nobis, voluptas nihil maxime a suscipit dolore tenetur eius amet! Ea aut fugit quis minus placeat asperiores.</p>


          </div>

        </div>

        <div id="history-section">

          <div className="history-image">

            <img src="./bg.png" width="951" height="471" alt="Building Pic" />

          </div>

          <div className="history-info">

            <h2>Indigeneous Forest Trees</h2>

            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium tempore libero omnis corrupti commodi velit obcaecati quia, maiores tempora, odit ipsam placeat veniam minima, rem dicta quae inventore deleniti nesciunt.</p>

          </div>

        </div>
        <div className="center">
          <div className="team">
            <div className="title">Our Team</div>
            <div className="profiles">
              <div className="profile">
                <div className="card">
                  <div className="head">
                    <img src="./bg.png" alt="" />
                    <div className="name">Name 1</div>
                  </div>
                  <div className="content">
                    <div className="role">Role 1</div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
                    accusamus fuga.
                  </div>
                  <div className="icons">
                    <a href=""><i className="fa-brands fa-linkedin"></i></a>
                    <a href=""><i className="fa-brands fa-github"></i></a>
                    <a href=""><i className="fa-solid fa-envelope"></i></a>
                  </div>
                </div>

                <img src="./bg.png" alt="" id="picture" />
                <div className="details">
                  Name 1
                  <span>Role 1</span>
                </div>
              </div>

              <div className="profile">
                <div className="card">
                  <div className="head">
                    <img src="./bg.png" alt="" />
                    <div className="name">Name 2</div>
                  </div>
                  <div className="content">
                    <div className="role">Role 2</div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur, harum recusandae!
                  </div>
                  <div className="icons">
                    <a href=""><i className="fa-brands fa-linkedin"></i></a>
                    <a href=""><i className="fa-brands fa-github"></i></a>
                    <a href=""><i className="fa-solid fa-envelope"></i></a>
                  </div>
                  <div className="pattern"></div>
                </div>
                <img src="./bg.png" alt="" id="picture" />
                <div className="details">
                  Name 2
                  <span>Role 2</span>
                </div>
              </div>

              <div className="profile">
                <div className="card">
                  <div className="head">
                    <img src="./bg.png" alt="" />
                    <div className="name">Name 3</div>
                  </div>
                  <div className="content">
                    <div className="role">Role 3</div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                    magni distinctio quae.
                  </div>
                  <div className="icons">
                    <a href=""><i className="fa-brands fa-linkedin"></i></a>
                    <a href=""><i className="fa-brands fa-github"></i></a>
                    <a href=""><i className="fa-solid fa-envelope"></i></a>
                  </div>
                  <div className="pattern"></div>
                </div>
                <img src="./bg.png" alt="" id="picture" />
                <div className="details">
                  Name 3
                  <span>Role 3</span>
                </div>
              </div>

              <div className="profile">
                <div className="card">
                  <div className="head">
                    <img src="./bg.png" alt="" />
                    <div className="name">Name 4</div>
                  </div>
                  <div className="content">
                    <div className="role">Role 4</div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                    magni distinctio quae.
                  </div>
                  <div className="icons">
                    <a href=""><i className="fa-brands fa-linkedin"></i></a>
                    <a href=""><i className="fa-brands fa-github"></i></a>
                    <a href=""><i className="fa-solid fa-envelope"></i></a>
                  </div>
                  <div className="pattern"></div>
                </div>
                <img src="./bg.png" alt="" id="picture" />
                <div className="details">
                  Name 4
                  <span>Role 4</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default AboutUs;
