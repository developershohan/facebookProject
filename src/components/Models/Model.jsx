
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const Model = ({hide}) => {


  return (
    <div>Model

        

<Modal.Dialog>
        <Modal.Header closeButton >
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={()=>hide(false)}>Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  )
}

export default Model