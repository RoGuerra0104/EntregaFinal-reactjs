import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-regular-svg-icons';
import "./ModalComponent.css"
import Form from 'react-bootstrap/Form';


const ModalComponent = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <Button variant="primary" onClick={handleShow} className='btnModal btnUser'>
                <FontAwesomeIcon icon={faUser} style={{ color: "#ffffff", }} className='iconfaUser' />
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Iniciar Sesión</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='form'>
                        <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
                            <Form.Label className='mb-3'>Nombre</Form.Label>
                            <Form.Control
                                className='formModal'
                                type="text"
                                placeholder="Nombre/s y Apellido/s"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className='mb-3'>Email</Form.Label>
                            <Form.Control
                                className='formModal'
                                type="email"
                                placeholder="nombre@ejemplo.com"
                            />
                        </Form.Group>
                        <Form.Group>
                            <div className='checkboxInput'>
                                <input type='checkbox' className='formModal' id='formModal' />
                                <label className='lbl-switch' for="formModal"></label>
                            </div>
                            <p className='notificaciones'>Recibir Notificaciones</p>

                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose} className='btnClose'>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={handleClose} className='btnSave'>
                        Guardar Cambios
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalComponent