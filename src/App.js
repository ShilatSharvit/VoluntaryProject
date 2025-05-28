// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import SignUp from './Components/SignUp';
import ListVolunteers from './Components/ListVolunteers';
import NewRequestPage from './Components/NewRequestPage';
import DualLoginPage from './Components/DualLoginPage';
// import Home from './Components/Home';

function App() {
  return (

    <Routes>
      <Route path="/" element={<DualLoginPage />} />
      <Route path="/login/:type" element={<LoginPage />} />
      <Route path="/LoginPage" element={<LoginPage />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/ListVolunteers" element={<ListVolunteers />} />
      <Route path="/NewRequestPage/:id" element={<NewRequestPage />} /> 

      {/* {/* <Route path="/Home" element={<Home />} /> */}

    </Routes>
  );
}

export default App;
