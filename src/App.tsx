import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Home from './pages/home'

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;
