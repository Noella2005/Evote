import { Typography } from '@mui/material';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import LandingPage from './LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Highlights from './components/Highlights';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import Campaign from './components/Campaign';
import CreateCampaign from './components/CreateCampaign';
import Settings from './components/Settings';
import Profile from './components/Profile'
import EditProfile from './components/EditProfile';
import Help from './components/Help';
import ForgotPassword from './components/ForgotPassword';
import getLPTheme from './components/getLPTheme';
import { useEffect, useState } from 'react';
import { auth } from './components/firebase';
import { Navigate } from 'react-router-dom';
import History from './components/History';

const theme = createTheme(getLPTheme());

function App(){

  const [user, setUser] = useState();
  useEffect(() =>{
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={user ? <Navigate to="/Dashboard"/> : <LandingPage />}></Route>
            <Route path="/SignUp" element={<SignUp/>}></Route>
            <Route path="/SignIn" element={<SignIn/>}></Route>
            <Route path="/Dashboard" element={<Dashboard/>}></Route>
            <Route path="/Campaign/:id" element={<Campaign/>}></Route>
            <Route path="/CreateCampaign" element={<CreateCampaign/>}></Route>
            <Route path="/Settings" element={<Settings/>}></Route>
            <Route path="/Profile" element={<Profile />}></Route>
            <Route path="/EditProfile" element={<EditProfile/>}></Route>
            <Route path="/Help" element={<Help/>}></Route>
            <Route path="Forgotpassword" element={<ForgotPassword/>}></Route>
            <Route path="History" element={<History/>}></Route>

          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
};
  
export default App;
