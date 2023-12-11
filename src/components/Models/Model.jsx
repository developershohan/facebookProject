
import "./Model.scss"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Model = ({ children, hide }) => {


    return (
        <div className="custom-model ">


            <div className="custom-model-box shadow">
                <Modal.Dialog >
                    <Modal.Header closeButton onClick={() => hide(false)}>
                        <Modal.Title className="model-title-box">

                            <h2>Sign Up</h2>
                            <p>It's quick and easy.</p>
                            <hr />
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {children}
                    </Modal.Body>
                    <Modal.Footer className='d-flex gap-2 mt-4'>
                        <Button variant="secondary" onClick={() => hide(false)}>Close</Button>
                        <Button variant="primary">Save changes</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        </div>
    )
}

export default Model