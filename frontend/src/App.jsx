import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import AddPerson from './pages/AddPerson';
import ViewPerson from './pages/ViewPerson';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/add-person" element={<AddPerson />} />
        <Route path="/view-person" element={<ViewPerson />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
