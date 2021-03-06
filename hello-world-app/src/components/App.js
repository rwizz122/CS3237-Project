import React from 'react';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import Header from './common/Header';
import { Route } from 'react-router-dom';

function App() {

  return (
    <div className="container-fluid">
        <Header />
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
    </div>
  );
}

export default App
