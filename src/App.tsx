import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './pages/home/Home';
import Navbar from './component/navbar/Navbar';
import QuizPage from './pages/quiz/QuizPage';


function App() {
  return (
<BrowserRouter>
<div className="appFlex">
<Navbar></Navbar>
<Routes>
  <Route path='/' element={<Home></Home>}/>
  <Route path="/quiz" element={<QuizPage></QuizPage>}/>
  
</Routes>
</div>

</BrowserRouter>
     );
}

export default App;
