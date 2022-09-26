import React from "react";
import "./footer.css";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { SiTiktok } from "react-icons/si";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footeer">
      
        <div className="bloccc bijoux">
     
          <h3>Food</h3>
         
          <Link to="/accessoire" className="f-link">
          <h6>breakfast</h6>
          </Link>
          <Link to="/accessoire" className="f-link">
          <h6>Lunch</h6>
          </Link>
          <Link to="/accessoire" className="f-link">
          <h6>Shakes</h6>
          </Link>
          </div>
          
        <div className="bloccc service"  >

          <h3 >Service Aprés Vente</h3>

          <Link to='/contact'  style={{color: 'rgb(80, 83, 83)',fontSize: '12px',display:'flex',fontWeight:'500',
    lineHeight: '1.2',padding:'4px'}}>Retour ou échange</Link>
          <Link to='/contact' style={{color: 'rgb(87, 83, 83)',fontSize: '12px',display:'flex',fontWeight:'500',
    lineHeight: '1.2',padding:'4px'}}>Livraison</Link>
          <Link to='/contact' style={{color: 'rgb(87, 83, 83)',fontSize: '12px',fontWeight:'500',
    lineHeight: '1.2'}}>Contact Us</Link>
        </div>
        <div className="bloccc contact">
          <h3>Nous contactes</h3>
          <h6>restaurant food</h6>
          <h6>Tel:+21628832782</h6>
          <h6>E-mail:sondesharizi09@gmail.com</h6>
        </div>
        <div className=" bloccc suivez">
        <h3 className="text">Suivez-Nous</h3>
        <div className=" socio">
          <BsFacebook className="icoons" />
          <BsInstagram className="icoons" />
          </div>
          </div>
          </div>
     
      
      

  );
};

export default Footer;