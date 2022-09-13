import React from 'react'
import Navbar from './Custom Components/Navbar';
import Form from './Custom Components/Form';
import MastiwithStates from "./Custom Components/MastiwithStates";


function App() {
  return (
    <>
      <Navbar logo="CAPTAINS HUB" aboutus = 'What You Want To Know?' />
      <Form heading = "Please Write Here Something About You!!" thank = "Thank You😊" />
      <MastiwithStates/>
    </>
  );
}

export default App;
