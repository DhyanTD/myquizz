import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LogIn from "./pages/auth/LogIn";
import SignUp from "./pages/auth/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
       
        


      </Routes>
    </BrowserRouter>
  );
}

export default App;
