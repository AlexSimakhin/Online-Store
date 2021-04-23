import React from 'react';
import { PropTypes } from 'prop-types';
import { Button, Form, Modal } from 'react-bootstrap';

const CreateBrand = ({ show, onHide }) => {
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
          Добавить новый бренд
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Control
            placeholder='Введите название бренда'
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

CreateBrand.propTypes = {
  show: PropTypes.bool,
  onHide: PropTypes.func,
};

export default CreateBrand;
