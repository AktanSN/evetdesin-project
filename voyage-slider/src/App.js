import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';


function App() {
<<<<<<< HEAD
 
=======
  
>>>>>>> 3f537ccfa2449b18a1177f727e1b5dc98abdcd25

  return (
    <BrowserRouter>
     
        <Navbar />
        <Routes>
          <Route index path='/' exact component={Home} />
          <Route exact  path='/services' component={Services} />
          <Route exact  path='/products' component={Products} />
          <Route exact  path='/sign-up' component={SignUp} />
        </Routes>
  
      </BrowserRouter>
  );
}

export default App;
