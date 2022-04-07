import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { addBooks, deleteBooks, updateBooks } from "../Services/bookService";
function MyModal(props) {
  const { _id, name, price, author, isbn, published_date } = props.data;
  const [changed, setChanged] = props.change;
  const deleteBook = () => {
    deleteBooks(_id);
    setChanged(!changed);
    setShow(false);
  };
  const addBook = (e) => {
    e.preventDefault();
    addBooks({
      name: e.target.name.value,
      price: e.target.price.value,
      author: e.target.author.value,
      isbn: e.target.isbn.value,
      published_date: e.target.date.value,
    });
    setShow(false);
    setChanged(!changed);
    console.log(e.target.name.value);
  };
  const updateBook = (e) => {
    e.preventDefault();
    updateBooks(_id, {
      name: e.target.name.value,
      price: e.target.price.value,
      author: e.target.author.value,
      isbn: e.target.isbn.value,
      published_date: e.target.date.value,
    });
    setShow(false);
    setChanged(!changed);
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let myModal;
  // Delete modal
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
          <Button variant="primary" onClick={deleteBook}>
            Тийм
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
  // Updating books
  else if (props.type === "edit") {
    myModal = (
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ном засах</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={updateBook}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Номын нэр</Form.Label>
              <Form.Control
                required
                type="text"
                defaultValue={name}
                placeholder="Номын нэр"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="price">
              <Form.Label>Үнэ</Form.Label>
              <Form.Control
                required
                type="number"
                defaultValue={price}
                placeholder="Үнэ"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="author">
              <Form.Label>Зохиолч</Form.Label>
              <Form.Control
                required
                type="text"
                defaultValue={author}
                placeholder="Зохиолч"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="isbn">
              <Form.Label>ISBN дугаар</Form.Label>
              <Form.Control
                required
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
              Ном засах
            </button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
  // Adding books
  else if (props.type === "add") {
    myModal = (
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ном нэмэх</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={addBook}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Номын нэр</Form.Label>
              <Form.Control required type="text" placeholder="Номын нэр" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="price">
              <Form.Label>Үнэ</Form.Label>
              <Form.Control required type="number" placeholder="Үнэ" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="author">
              <Form.Label>Зохиолч</Form.Label>
              <Form.Control required type="text" placeholder="Зохиолч" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="isbn">
              <Form.Label>ISBN дугаар</Form.Label>
              <Form.Control required type="number" placeholder="ISBN" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="date">
              <Form.Label>Хэвлэгдсэн огноо</Form.Label>
              <Form.Control
                required
                type="date"
                placeholder="Хэвлэгдсэн огноо"
              />
            </Form.Group>

            <button
              className="addButton text-white d-block mx-auto border-0 px-3 py-2"
              type="submit"
            >
              Ном нэмэх
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
