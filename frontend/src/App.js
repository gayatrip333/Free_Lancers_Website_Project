import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import BrowseNewsPage from './pages/BrowseNewsPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import AboutPage from './pages/AboutPage';
import NavigationMenu from './pages/NavigationMenu';
import ChannelWiseNews from './pages/ChannelWiseNews'
import ChannelInfo from './pages/ChannelInfo';
import UploadUpdateNews from './pages/UploadUpdateNews';
import EditProfileInformation from './pages/EditProfileInformation';


function App() {
  return (
    <div className="App">
      <NavigationMenu/>
     <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/browsenewspage" element={<BrowseNewsPage/>}/>
      <Route path="/channelwisenewspage" element={<ChannelWiseNews/>}/>
      <Route path="/loginpage" element={<LoginPage/>}/>
      <Route path="/signuppage" element={<SignUpPage/>}/>
      <Route path="/aboutpage" element={<AboutPage/>}/>
      <Route path="/channelinfo" element={<ChannelInfo/>}/>
      <Route path="/uploadupdatenews" element={<UploadUpdateNews/>}/>
      <Route path="/editprofileinformation" element={<EditProfileInformation/>}/>
     </Routes>
    </div>
  );
}

export default App;
