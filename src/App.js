import React from 'react';
import Header from './Components/Header';
import routes from './routes';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      {routes}
      {/* //routes is a variable that contains Components */}
    </div>
  );
}

export default App;
