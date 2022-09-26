import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { commandeUpdate } from "../../JS/commandeSlice";
import { addfood } from "../../JS/foodSlice";
function AddCom({ el }) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(el);
  const [food, setfood] = useState({

    title: "",
    category: "",
    price:"",
    img: "",
    
    desc:"",
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
          <button className="addd" onClick={handleShow} style={{width:"150px"}}>
          Add
          </button>
        </div>

        <Modal show={show} onHide={handleClose} animation={false} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>ADD Food</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {" "}
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="enter title food"
                  onChange={(e) =>
                    setfood({ ...food, title: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="enter category"
                  onChange={(e) =>
                    setfood({ ...food, category: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="enter food price"
                  onChange={(e) =>
                    setfood({ ...food, price: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>image</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="enter image food"
                  onChange={(e) =>
                    setfood({ ...food, img: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="enter description"
                  onChange={(e) =>
                    setfood({ ...food, desc: e.target.value })
                  }
                />
              </Form.Group>

              <Button
                onClick={() =>
                  dispatch(addfood(food))
                }
                variant="primary"
                type="submit"
              >
                ADD
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </>
    </div>
  );
}

export default AddCom;
