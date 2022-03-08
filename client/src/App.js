import './App.css';
import './index.css'
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Posts from "./pages/PostsPage"
import LoginPage from './pages/LogInPage';
import SignUpPage from './pages/SignUpPage';
import ProfilePage from './pages/ProfilePage';
import PrivacyPage from './pages/PrivacyPage';
import EditProfilePage from './pages/EditProfilePage';
import LogOut from './components/LogOut'
import * as authService from './api/auth.service';

const App = () => {
 const [isLoggedIn, setIsLoggedIn] = useState();
  const userActive = () => {
    if(authService.currentUser()){
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }

  useEffect(() => {
    userActive();
  }, []);

  console.log(isLoggedIn);
  return (
    <div className="land-page">
      <Router>
            <Routes>
              <Route path="/" element={<LoginPage />}></Route>
              <Route path="/posts/*" element={< Posts />}></Route>
              <Route path="/login" element={<LoginPage />}></Route>
              <Route path="/users/:id" element={<ProfilePage/>}></Route>
              <Route path="/register" element={<SignUpPage />}></Route>
              <Route path="/users/:id/edit" element={<EditProfilePage/>}></Route>
              <Route path="/privacy" element={<PrivacyPage/>}></Route>
              <Route path="/logout" element={<LogOut/>}></Route>
              <Route path="*" element={<LoginPage />}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
