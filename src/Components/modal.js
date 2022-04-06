import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
function MyModal(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { name, price, author, isbn, published_date } = props.data;
  let myModal;
  if (props.type === "delete") {
    myModal = (
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ном устгах</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {`"${name}" нэртэй номыг устгахдаа итгэлтэй байна уу?`}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Үгүй
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Тийм
          </Button>
        </Modal.Footer>
      </Modal>
    );
  } else {
    myModal = (
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.type}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Номын нэр</Form.Label>
              <Form.Control
                type="text"
                defaultValue={name}
                placeholder="Номын нэр"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="price">
              <Form.Label>Үнэ</Form.Label>
              <Form.Control
                type="number"
                defaultValue={price}
                placeholder="Үнэ"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="author">
              <Form.Label>Зохиолч</Form.Label>
              <Form.Control
                type="text"
                defaultValue={author}
                placeholder="Зохиолч"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="isbn">
              <Form.Label>ISBN дугаар</Form.Label>
              <Form.Control
                type="number"
                defaultValue={isbn}
                placeholder="ISBN"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="date">
              <Form.Label>Хэвлэгдсэн огноо</Form.Label>
              <Form.Control
                type="date"
                defaultValue={published_date}
                placeholder="Хэвлэгдсэн огноо"
              />
            </Form.Group>

            <button
              className="addButton text-white d-block mx-auto border-0 px-3 py-2"
              type="submit"
            >
              {props.type}
            </button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
  return (
    <>
      <div onClick={handleShow}>{props.title}</div>
      {myModal}
    </>
  );
}

export default MyModal;
