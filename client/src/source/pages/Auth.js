import React, { useContext, useState } from 'react';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { login, registration } from '../http/userApi';
import { book } from './../navigation/book';
import { observer } from 'mobx-react-lite';
import { Context } from './../../index';

const Auth = observer(() => {
  const { user } = useContext(Context);
  const location = useLocation();
  const history = useHistory();
  const isLogin = location.pathname === book.login;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let data;

  const click = async () => {
    try {
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
      }

      user.setUser(data);
      user.setIsAuth(true);
      history.push(book.shop);
    } catch (e) {
      alert(e.response.data.message)
    }
  };

  return (
    <Container
      className='d-flex justify-content-center align-items-center'
      style={{ height: window.innerHeight - 54 }}
    >
      <Card className='p-5' style={{ width: 600 }}>
        
        <h2 className='m-auto'>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>

        <Form className='d-flex flex-column'>
          <Form.Control
            className='mt-2'
            placeholder='Введите email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <Form.Control
            className='mt-2'
            placeholder='Введите password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            type='password'
          />

          <Row className='d-flex justify-content-between align-items-center mt-3 pl-3 pr-3'>
            {isLogin ?
              <div>
                Нет аккаунта? <NavLink to={book.registration}>Зарегистрируйся!</NavLink>
              </div>
              :
              <div>
                Есть аккаунта? <NavLink to={book.login}>Войдите!</NavLink>
              </div>
            }
            
            <Button variant='outline-success' onClick={click}>{isLogin ? 'Войти' : 'Регистрация'}</Button>
          </Row>

        </Form>
      </Card>
    </Container>
  );
});

export default Auth;
