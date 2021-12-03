import React from 'react';
import './App.css';
import Technologies from "./components/Technologies/Technologies";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Header title={"This is a header"}/>
      <Technologies value={"This is a menu"}/>
    </div>
  );
}

export default App;






