import { Modal,Button } from 'react-bootstrap'
function CustomModal({ show, handleClose, city, price, categories, type }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Citta: {city} <br />
        Prezzo: {price} <br />
        Cateogorie scelte: {categories} <br />
        Volo: {type}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CustomModal