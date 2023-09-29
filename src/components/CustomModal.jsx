import PropTypes from 'prop-types'

import { Modal, Button } from 'react-bootstrap'
function CustomModal({
  show,
  handleClose,
  city,
  price,
  categories,
  type,
}) {
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
// Adding PropTypes for prop validation
CustomModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  categories: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

export  {CustomModal}
