import React from 'react';
import { PropTypes } from 'prop-types';
import { Button, Form, Modal } from 'react-bootstrap';

const CreateType = ({ show, onHide }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить новый тип
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Control
            placeholder='Введите название типа'          
          />
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant='outline-danget' onClick={onHide}>Закрать</Button>
        <Button variant='outline-success' onClick={onHide}>Добавить</Button>
      </Modal.Footer>
      
    </Modal>
  );
};

CreateType.propTypes = {
  show: PropTypes.bool,
  onHide: PropTypes.func,
};

export default CreateType;
