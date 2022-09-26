import React from "react";
import "./About.css";

function About2() {
  return (
    <div>
      <div style={{ display: "flex", marginTop: 93, marginLeft: 20 }}>
        <div>
          <img
            src="https://bootstrapmade.com/demo/templates/Delicious/assets/img/about.jpg"
            style={{ width: "500px" }}
          />
        </div>
        <div style={{ marginTop: 93, width: 587, marginLeft: 33 }}>
          <h1
            style={{
              fontFamily: "Dancing Script, cursive",
              fontSize: 31,
              textShadow: "rgb(51 51 51) 1px 1px 1px",
              color: "rgb(154, 206, 203)",
            }}
          >
            {" "}
            Qui sommes nous?{" "}
          </h1>
          <p style={{ textAlign: "center", marginTop: 20 }}>
            <span
              style={{
                color: "#de7171",
                textShadow: "rgb(51 51 51) 1px 1px 1px",
                fontSize: "Bold",
              }}
            >
              Food By Sondes
            </span>{" "}
            Avec l’aide de chefs passionnés et qui partagent notre envie de préserver l’environnement, nous avons fait une une cuisine qui nous ressemble – de bons produits, du savoir-faire culinaire et beaucoup d’amour ! 
            Nos recettes changent tous les jours pour profiter de tous les bienfaits et goûts de la nature. 
            Le travail d’équipe est essentiel et l’humain est au cœur de nos préoccupations. 
            Nous espérons apporter notre pierre à l’édifice pour une restaurant respectueuse et créative ! 
          </p>
        </div>
      </div>
      </div>
  );
}

export default About2;
