import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import chooseImg from "../../assests/images/whychooseus.jpg";
import "./choose-us.css";

import ReactPlayer from "react-player";

const ChooseUs = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="choose__content">
              <h2>Why Choose Us</h2>
              <p>
              Here we are present to store every medical-related thing like your medical reports, your document and 
your X-ray to MI scan every necessary document of yours and your family members which you
forget to store somewhere here we are present to help you store all medical-related documents in one place.
              </p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="choose__img">
              {showVideo ? (
                <ReactPlayer
                  // url="https://www.youtube.com/watch?v=qFp27TR4Yew"
                  url="https://www.youtube.com/watch?v=pc1jlelzmPY"
                  controls
                  width="100%"
                  height="350px"
                />
              ) 
              : (
                <img src={chooseImg} alt="" className="w-100" />
              )}

              {!showVideo && (
                <span className="play__icon">
                  <i
                    class="ri-play-circle-line"
                    onClick={() => setShowVideo(!showVideo)}
                  ></i>
                </span>
              )}
            </div>
          </Col>
        </Row>
      </Container>
      <div className="cc">

      <div className="cardcc">
        <h1>Why Choose Us</h1>
        <details className="warningcc">
          <summary>Facts and knowledge about COVID-19</summary>
          <p>Some text to be hidden.</p> 
          <p>Some text to be hidden.</p> 
          <p>Some text to be hidden.</p> 
          <p>Some text to be hidden.</p> 
        </details>
        <details className="infocc" open>
          <summary>For the public</summary>
          <p>Social distance, quarantine and isolation</p>
          <p>Hand hygiene, cough etiquette, cleaning and laundry</p>
          <p>When children have acute respiratory tract infections</p>
          <p>Risk groups and their relatives</p>
        </details>
        <details className="alertcc">
          <summary>Facts and knowledge about COVID-19</summary>
          <p>Some text to be hidden.</p> 
          <p>Some text to be hidden.</p> 
          <p>Some text to be hidden.</p> 
          <p>Some text to be hidden.</p> 
        </details>
      </div>

      </div>
    </section>


   
  );
};

export default ChooseUs;
