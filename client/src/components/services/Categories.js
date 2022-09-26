import React from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Categories() {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        marginTop: "100px",
        borderRadius: "25px",
        flexWrap: "wrap",
        marginLeft:"175px"
      }}
    >
      <Card
        style={{
          width: "18rem",
          border: "none",
          margin: "20px",
          boxShadow: "0 5px 10px rgb(0 0 0 / 75%)",
        }}
      >
        <Card.Img
          variant="top"
          src="https://img.delicious.com.au/bQjDG77i/del/2021/07/spiced-peanut-butter-and-honey-pancakes-with-blackberry-cream-155151-2.jpg"
          style={{
            borderRadius: "100%",
            marginLeft: "34px",
            marginTop: "10px",
            maxWidth: "216px",
            minWidth: "216px",
            maxHeight: "185px",
            minHeight: "185px",
          }}
        />
        <Card.Body>
          <Card.Title style={{ color: "#9e6e66", textAlign: "center" }}>
            Breakfast
          </Card.Title>
          <Card.Text>
          Le menu du Breakfast était clairement conçu pour les personnes qui envisageaient de s'en aller.
          </Card.Text>
          <Link to="/breakfast">
            {" "}
            <Button
              variant="primary"
              style={{
                marginLeft: "60px",
                color: "#b7948e",
                backgroundColor: "transparent",
                borderColor: "#b7948e",
              }}
            >
            Read More
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <Card
        style={{
          width: "18rem",
          border: "none",
          margin: "20px",
          boxShadow: "0 5px 10px rgb(0 0 0 / 75%)",
        }}
      >
        <Card.Img
          variant="top"
          src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600"
          style={{
            borderRadius: "100%",
            marginLeft: "34px",
            marginTop: "10px",
            maxWidth: "216px",
            minWidth: "216px",
            maxHeight: "185px",
            minHeight: "185px",
          }}
        />
        <Card.Body>
          <Card.Title style={{ color: "#9e6e66", textAlign: "center" }}>
           Lunch
          </Card.Title>
          <Card.Text>
          une spécialité du Maine, et il ajouterait périodiquement des plats exotiques ou des spécialités vraiment haut de gamme.
         
          </Card.Text>
          <Link to="/lunch">
            <Button
              variant="primary"
              style={{
                marginLeft: "60px",
                color: "#b7948e",
                backgroundColor: "transparent",
                borderColor: "#b7948e",
              }}
            >
              Read More
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <Card
        style={{
          width: "18rem",
          border: "none",
          margin: "20px",
          boxShadow: "0 5px 10px rgb(0 0 0 / 75%)",
        }}
      >
        <Card.Img
          variant="top"
          src="https://dairyfarmersofcanada.ca/sites/default/files/styles/recipe_image/public/image_file_browser/conso_recipe/summer-of-shakes.jpg.jpeg?itok=0m7KRi1l"
          style={{
            borderRadius: "100%",
            marginLeft: "34px",
            marginTop: "10px",
            maxWidth: "216px",
            minWidth: "216px",
            maxHeight: "185px",
            minHeight: "185px",
          }}
        />
        <Card.Body>
          <Card.Title style={{ color: "#9e6e66", textAlign: "center" }}>
            {"Shakes "}
          </Card.Title>
          <Card.Text>
          Food By Sondes Shake proposent une multitudes de produits:

          Steakburgers avec frites fraîches maison & Steakburger spéciaux
          </Card.Text>
          <Link to="/shakes">
            <Button
              variant="primary"
              style={{
                marginLeft: "60px",
                color: "#b7948e",
                backgroundColor: "transparent",
                borderColor: "#b7948e",
              }}
            >
              Read More
            </Button>
          </Link>
        </Card.Body>
      </Card>
     
      
   
    </div>

  )
}

export default Categories