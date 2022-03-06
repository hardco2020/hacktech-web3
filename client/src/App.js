import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Homework from "./page/Homework/Homework";
import Home from "./page/Home/Home";
import Login from "./page/Login";
import Profile from "./page/Profile/Profile";
import Register from "./page/Register";
import SplashScreen from "./page/SplashScreen/SplashScreen";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/splash" element={<SplashScreen/>} /> 
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/" element={<Home />}/>
        <Route path=":classId/homework" element={<Homework/>}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
