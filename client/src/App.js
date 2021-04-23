import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './source/components/NavBar';
import AppRouter from './source/navigation';
import { observer } from 'mobx-react-lite';
import { Context } from './index';
import { check } from './source/http/userApi';
import { Spinner } from 'react-bootstrap';

const App = observer(() => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    check().then((data) => {
      user.setUser(true);
      user.setIsAuth(true);
    }).finally(() => setLoading(false))
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Spinner animation='grow' />
  }

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
});

export default App;