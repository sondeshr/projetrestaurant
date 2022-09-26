import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { commandeUpdate } from "../../JS/commandeSlice";
function EditCom({ el }) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(el);
  const [commande, setcommande] = useState({
    /*     image: "",
    nameClient: "",
    produit: "",
    qte: "",
    prix: "", */
  });
  // const commandes = useSelector((state) => state.commande.commandes);
  // console.log(commandes);
  return (
    <div>
      <>
        <div className="buttonss">
          <button className="addd" onClick={handleShow}>
            Edit
          </button>
        </div>

        <Modal show={show} onHide={handleClose} animation={false} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Edit commande</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {" "}
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={el.image}
                  onChange={(e) =>
                    setcommande({ ...commande, image: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>User name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={el.nameClient}
                  onChange={(e) =>
                    setcommande({ ...commande, nameClient: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Product name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={el.produit}
                  onChange={(e) =>
                    setcommande({ ...commande, produit: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Qte</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={el.qte}
                  onChange={(e) =>
                    setcommande({ ...commande, qte: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={el.prix}
                  onChange={(e) =>
                    setcommande({ ...commande, prix: e.target.value })
                  }
                />
              </Form.Group>

              <Button
                onClick={() =>
                  dispatch(commandeUpdate({ id: el._id, commande }))
                }
                variant="primary"
                type="submit"
              >
                Edit
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </>
    </div>
  );
}

export default EditCom;
