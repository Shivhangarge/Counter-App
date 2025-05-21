import React, { useState } from 'react';

import  Navbar  from "./components/Navbar";
import  Sidebar  from "./components/Sidebar";
import  Footer  from "./components/Footer";
import  Dashboard  from "./pages/Dashboard";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  const [darkMode , setdarkMode] = useState (false);

  return (
  <div className= {darkMode ? 'bg-dark text-white' : 'bg-light'}>
  <Navbar toggleDarkMode ={() => setdarkMode(!darkMode)}/>

    <div className='container-fluid'>
      <div className='row'>
        <Sidebar/>
        
        <main className='col-md-9ms-sm-auto col-lg-10 px-md py-4'>
          <Dashboard/>
        </main>
      </div>
    </div>
   <Footer/>
  </div>
  );
}

export default App;
