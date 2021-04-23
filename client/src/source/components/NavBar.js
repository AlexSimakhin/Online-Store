import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';

import { book } from './../navigation/book';

import { Context } from './../../index';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';

import {observer} from 'mobx-react-lite';


const NavBar = observer(() => {
  const { user } = useContext(Context);
  const history = useHistory();

  const logout = () => {
    user.setUser({});
    user.setIsAuth(false);
  }
  
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <NavLink to={book.shop} style={{ color: 'white' }}>Закупись</NavLink>

        {user.isAuth ?
          <Nav className='ml-auto'>
            <Button
              variant={'outline-light'}
              onClick={() => history.push(book.admin)}
            >
              Админ панель
            </Button>

            <Button
              variant={'outline-light'}
              className='ml-2'
              onClick={logout}
            >
              Выйти
            </Button>
          </Nav>
          :
          <Nav className='ml-auto'>
            <Button variant={'outline-light'} onClick={() => history.push(book.login)}>Авторизация</Button>
          </Nav>
        }
      </Container>
    </Navbar>
  );
});

export default NavBar;
