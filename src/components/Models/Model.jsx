
import "./Model.scss"
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
                    <Modal.Body className=" my-3 ">
                        {children}
                    </Modal.Body>
                    
                </Modal.Dialog>
            </div>
        </div>
    )
}

export default Model