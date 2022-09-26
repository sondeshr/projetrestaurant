import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useParams } from "react-router-dom";
import { commandeAdd } from "../JS/commandeSlice";
import "./food.css";
function Description({ food, ping, setping }) {
  const [show, setShow] = useState(false);
  const client = useSelector((state) => state.client.client);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const [commande, setcommande] = useState({
    image: food.img,
    nameClient: client.name,
    produit: food.title,
    qte: 1,
    prix: food.price,
  });
  // console.log(commande)
  // const dispatch=useDispatch();
  return (
    <div>
      <>
        <div className="buttonss">
          <button className="addd" onClick={handleShow}>
            see more
          </button>
        </div>

        <Modal show={show} onHide={handleClose} animation={false} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>{food.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={{ display: "flex" }}>
              <div>
                <img src={food.img} width="350" height="400" />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "50px",
                }}
              >
                <h3>{food.desc}</h3>
             
                <h3>{food.price}</h3>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className="buttonss">
              <button
                className="addd"
                style={{ width: "150px" }}
                onClick={() => {
                  setShow(!show)
                  dispatch(commandeAdd(commande));
                  setping(!ping);
                }}
              >
                Book now
              </button>
            </div>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
}

export default Description;
