import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TeacherHomeworks from './components/TeacherHomeworks/TeacherHomeworks';
import Homework from './page/Homework/Homework';
import Home from './page/Home/Home';
import TeacherDashboard from './page/TeacherDashboard/TeacherDashboard';
import Login from './page/Login';
import Profile from './page/Profile/Profile';
import Register from './page/Register';
import SplashScreen from './page/SplashScreen/SplashScreen';
import { AuthProvider } from './components/AuthContext/AuthContext';
import TeacherHomeworks from './components/TeacherHomeworks/TeacherHomeworks';
import CheckResult from './components/CheckResult/CheckResult';
import { useAuth } from './components/AuthContext/AuthContext';

function App() {
  const authContext = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/splash' element={<SplashScreen />} />
        <Route path='/profile' element={<Profile />} />
        <Route
          path='/'
          element={authContext.user.isTeacher ? <TeacherDashboard /> : <Home />}
        />
        <Route path=':classId/homework' element={<Homework />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
         <Route path=":classId/result" element={<CheckResult/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
