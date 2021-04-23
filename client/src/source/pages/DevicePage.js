import React from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';

const DevicePage = () => {
  const device = { id: 8, name: 'Комп 4', price: 20000, rating: 5, img: 'https://www.theitbuffs.com/image/cache/catalog/Products/Dell%20Bundle/41x81v5aR8L._AC_-498x337.jpg' };
  const description = [
    { id: 1, title: 'ОЗУ', description: '4Гб' },
    { id: 2, title: 'Процессор', description: 'Ryzen 5' },
    { id: 3, title: 'Кол-во ядер', description: '8/16' },
    { id: 4, title: 'HDD', description: '1Tb' },
    { id: 5, title: 'ОС', description: 'Windows 10' },
  ];

  return (
    <Container className='mt-3'>
      
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={device.img} />
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
        {description.map(info => 
          <Row key={info.id} style={{background: info.id % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
            {info.title}: {info.description}
          </Row>
        )}
      </Row>

    </Container>
  );
};

export default DevicePage;
