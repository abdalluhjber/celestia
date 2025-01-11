import { BrowserRouter, Routes, Route } from "react-router";
import React from "react";
import './App.css';
import Homepage from './components/Homepage/homepages'
import Charecterpage from './components/charecter/charecterpage';
import Categorypage from './components/category/Categorypage';
import BackTop from './components/BackTop';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
function App() {
  return (
   <div>
      <BrowserRouter>
    <Routes>
      <Route path="/" element={< Homepage/>} />
      
      <Route path="SignIn" element={< SignIn/>} />
      <Route path="SignUp" element={< SignUp/>} />

      <Route path="/actors">
      <Route index element={<Categorypage category="actors" />} />
      <Route path=":name" element={<Charecterpage />} />
      </Route>

    <Route path="/athletes">
      <Route index element={<Categorypage category="athletes" />} />
      <Route path=":name" element={<Charecterpage />} />
    </Route>

    <Route path="/singers">
      <Route index element={<Categorypage category="singers" />} />
      <Route path=":name" element={<Charecterpage />} />
    </Route>
    </Routes>
  </BrowserRouter>
  <BackTop/>
  </div>
      
  
  );
}

export default App;
