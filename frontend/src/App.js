import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import BrowseNewsPage from './pages/BrowseNewsPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import AboutPage from './pages/AboutPage';
import NavigationMenu from './pages/NavigationMenu';


function App() {
  return (
    <div className="App">
      <NavigationMenu/>
     <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/browsenewspage" element={<BrowseNewsPage/>}/>
      <Route path="/loginpage" element={<LoginPage/>}/>
      <Route path="/signuppage" element={<SignUpPage/>}/>
      <Route path="/aboutpage" element={<AboutPage/>}/>
     </Routes>
    </div>
  );
}

export default App;
