import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { fetchOneDevice } from './../http/deviceApi';


const DevicePage = () => {
  const [device, setDevice] = useState({ info: [] });
  const {id} = useParams();
  
  useEffect(() => {
    fetchOneDevice(id).then(data => setDevice(data));
    // eslint-disable-next-line
  }, []);

  return (
    <Container className='mt-3'>
      
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img} />
        </Col>

        <Col md={4}>
          <Row>
            <h2>{device.name}</h2>
            <div className='d-flex align-items-center justify-content-center'>
              {device.rating}
            </div>
          </Row>
        </Col>

        <Col md={4}>
          <Card
            className='d-flex align-items-center justify-content-around'
            style={{ width: 300, height: 300, fontSize: 32, border: '5px solid lightgray' }}
          >
            <h3>От {device.price} грн.</h3>
            <Button variant='outline-dark'>Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>

      <Row className='d-flex flex-column m-3'>
        <h2>Характеристики</h2>
        {device.info.map(info => 
          <Row key={info.id} style={{background: info.id % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
            {info.title}: {info.description}
          </Row>
        )}
      </Row>

    </Container>
  );
};

export default DevicePage;
