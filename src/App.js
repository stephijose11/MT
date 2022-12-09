import "./App.css";
import Signup from './pages/SignUp';
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import { BrowserRouter, Routes,Route, Switch } from "react-router-dom";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route exact path="/signUp" element={<Signup/>} />
        <Route exact path="/" element={<SignIn/>} />
        <Route exact path="/Home" element={<Home/>} />
		</Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;