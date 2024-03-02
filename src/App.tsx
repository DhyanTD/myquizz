import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LogIn from "./pages/auth/LogIn";
import SignUp from "./pages/auth/SignUp";
import Home from './pages/home/Home';
import Navbar from './component/navbar/Navbar';
import QuizPage from './pages/quiz/QuizPage';
import QuizDetails from "./pages/quizDetails/QuizDetails";



function App() {
  return (
<BrowserRouter>
<div className="appFlex">
<Navbar></Navbar>
<Routes>
  <Route path='/' element={<Home></Home>}/>
  <Route path="/quiz" element={<QuizPage></QuizPage>}/>
  <Route path="/login" element={<LogIn />} />
  <Route path="/signup" element={<SignUp />} />
        <Route path="/quizDetails" element={<QuizDetails></QuizDetails>} />
  
</Routes>
</div>

</BrowserRouter>
     );
}

export default App;
