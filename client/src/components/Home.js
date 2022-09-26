import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


import livraison from "../images/livraison.png";
import domicile from "../images/domicile.png";
import paiment from "../images/paiment.png";

import { Link } from "react-router-dom";

const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
    <Carousel activeIndex={index} onSelect={handleSelect} >
      <Carousel.Item emulateTouch
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        stopOnHover    ={false}
        autoPlay
        interval={3000}>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Delicious restaurant</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWv8W6ImFzoriBNyJQPX8pDziE3l-yNIySgkoc3NXAODhMVA4Fb6D58CrCitGSbqL5ieQ&usqp=CAU"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Delicious restaurant</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.medoc-atlantique.com/wp-content/uploads/2019/02/restaurant-1600x900.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Delicious restaurant</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div>
    <div>
              
              <hr
                style={{
                  border: "2px solid black",
                  width: "30%",
                  marginRight: "5px",
                }}
              />
            </div>
            <h2
              style={{
                color: "#050606",
                fontFamily: "Oswald Sans-serif",
                fontSize: "35px",
                fontWeight: "normal",
                marginLeft: "480px",
              }}
            >
             Our Menu
            </h2>
    
            <div
              className="brand"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <img src={"https://th.bing.com/th/id/OIP.l-aNXDrmY7I-8hPAv_AF3wHaFj?pid=ImgDet&rs=1"} width="480" height="450" style={{ margin: "10px" }} />
              <img
                src={"https://th.bing.com/th/id/R.05fb91fe2a3339c8e10ebc44cfadcc87?rik=egBb9P667faDGg&riu=http%3a%2f%2fwww.putyourselffirst.com%2fwp-content%2fuploads%2f2011%2f10%2fhealthshakes.jpg&ehk=QqCqDaapVrDwhC4lgE%2fvjGe62whin%2bCifu174qKQxP4%3d&risl=&pid=ImgRaw&r=0"}
                width="480"
                height="450"
                style={{ margin: "10px" }}
              />
              <img
                src={"https://th.bing.com/th/id/OIP.wXx4WPR3xHJrZK6cEzplXwHaE8?pid=ImgDet&rs=1"}
                width="480"
                height="450"
                style={{ margin: "10px" }}
              />
            </div>
    
            
            
    
            <div
              className="section"
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <img
                src={livraison}
                width="100"
                height="100"
                style={{ margin: "25px" }}
              />
    
              <img
                src={domicile}
                width="80"
                height="80"
                style={{ margin: "25px" }}
              />
              <img
                src={paiment}
                width="80"
                height="80"
                style={{ margin: "25px" }}
              />
            </div>
            <div
              className="ldph"
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginLeft: "10px",
              }}
            >
              <h2>LIVRAISON</h2>
              <h2>A DOMICILE</h2>
              <h2>PAIMENT</h2>
            </div>
    
            <div
              className="ldpp"
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginRight: "15px",
              }}
            >
              <p>Nationale et Internationale</p>
              <p>selon votre région</p>
              <p>à la livraison</p>
            </div>
    
            <div
              className="brandd"
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginRight: "80px",
              }}
            >
              <img src={"https://th.bing.com/th/id/OIP.LVbkZqlZ_0thYlqOCy_oMAHaEo?pid=ImgDet&rs=1"} width="300" height="240" style={{ margin: "50px" }} />
              <img src={"https://th.bing.com/th/id/R.6e16652274644b7a2838222733da78c8?rik=lU%2fXDe4fXIRseg&riu=http%3a%2f%2fpavbca.com%2fwalldb%2foriginal%2fb%2fd%2f0%2f447427.jpg&ehk=sVvJL%2fB5TSajvZKnGSSQyhUeQcXw87wcdkYNDu5qb84%3d&risl=&pid=ImgRaw&r=0"} width="300" height="240" style={{ margin: "50px" }} />
              <img src={"https://th.bing.com/th/id/OIP.9OnK5DVcTGZcT2zYg6otEwHaE8?pid=ImgDet&rs=1"} width="300" height="240" style={{ margin: "50px" }} />
            </div>
            </div>
            </div>
  )
}


    



export default Home;
