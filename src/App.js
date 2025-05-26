// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import SignUp from './Components/SignUp';
import ListVolunteers from './Components/ListVolunteers';
// import Home from './Components/Home';

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/LoginPage" element={<LoginPage />} />
      {/* <Route path="/SignUp" element={<SignUp />} />
      <Route path="/ListVolunteers" element={<ListVolunteers />} /> */}

      {/* <Route path="/Home" element={<Home />} /> */}

    </Routes>
  );
}


export default App;
