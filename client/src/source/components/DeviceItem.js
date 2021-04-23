import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Image } from 'react-bootstrap';
import ratingStar from '../assets/ratingStar.svg';
import { useHistory } from 'react-router-dom';
import { book } from './../navigation/book';

const DeviceItem = ({ device }) => {
  const history = useHistory();

  return (
    <Col md={3} className='mt-4' onClick={() => history.push(`${book.device}/${device.id}`)}>
      <Card style={{ width: 150, cursor: 'pointer' }} border='light'>
        <Image width={150} height={150} src={device.img} />
        <div className='d-flex justify-content-between align-items-center mt-2'>
          
          <div className='text-black-50'>Samsung...</div>

          <div className='d-flex align-items-center'>
            <div>{device.rating}</div>
            <Image src={ratingStar} />
          </div>

        </div>

        <div>{device.name}</div>
      </Card>
    </Col>
  );
};

DeviceItem.propTypes = {
  device: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    rating: PropTypes.number,
    img: PropTypes.string,
  }),
};

export default DeviceItem;