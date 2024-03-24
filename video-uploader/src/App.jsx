import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './comps/Header';
import Home from './comps/Home';
import Footer from './comps/Footer';
import Videos from './comps/Videos';
import Login from './comps/Login';
import Signup from './comps/Signup';
import Upload from './comps/Upload';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
