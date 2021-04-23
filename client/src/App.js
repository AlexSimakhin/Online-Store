import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './source/components/NavBar';
import AppRouter from './source/navigation';

const App = () => {
  console.log(process.env.REACT_APP_API_URL);
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;