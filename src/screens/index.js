import React, { Profiler } from 'react'
import { Route , Routes } from 'react-router-dom';
import { Layout } from 'antd';
import Header from '../components/header/index'
import Footer from '../components/footer/index'
import Home from './home/Home'
import Profile from './home/Profile'
import EditProfile from './home/EditProfile'
import Aboutus from './home/Aboutus'
import Whyus from './home/Whyus'
import Contactus from './home/Contactus'
import Connection from './home/Connection'
import Chatbot from './home/Chatbot'
import Contact from './home/Contact'
import Verify from './home/Verify'
import VerifyOne from './home/VerifyOne'
import Discover from './home/Discover'
import Subscriptions from './home/subscritpion'
import Chatbox from './home/Chatbox'
import ProfileVerification from './home/ProfileVerification';
import LicenceVerification from './home/LicenceVerification';
import Setting from './home/Setting';
import Map from './home/Map';
import AccountVerification from './home/AccountVerification';
import BackgroundVerification from './home/BackgroundVerification';
import DrivingLicence from './home/DrivingLicence';
import DrivinglicenceVerify from './home/DrivinglicenceVerify';
import TakePicture from './home/TakePicture';
import ProfileVerification3 from './home/ProfileVerification3';
import TakePicturetwo from './home/TakePicturetwo';
import Profileone from './home/Profileone';
import BlockedUser from './home/BlockedUser';
import Voicecall from './home/Voicecall';
import FAQ from './home/FAQ';
// import Mainroutes from "../screens/auth/Main";

const { Content } = Layout;

const Main = () => {
   return (
      <Layout style={{ minHeight: '100vh' }}>
            <Content>
               <Header />
               <Routes>
                  <Route path="/" exact element={<Home />} />
                  <Route path="/home" exact element={<Home />} />
                  <Route path="/profile" exact element={<Profile />} />
                  <Route path="/edit_profile" exact element={<EditProfile />} />
                  <Route path="/aboutus" exact element={<Aboutus />} />
                  <Route path="/whyus" exact element={<Whyus />} />
                  <Route path="/contactus" exact element={<Contactus />} />
                  <Route path="/connection" exact element={<Connection />} />
                  <Route path="/chatbot" exact element={<Chatbot />} />
                  <Route path="/contact" exact element={<Contact />} />
                  <Route path="/verify" exact element={<Verify />} />
                  <Route path="/verifyone" exact element={<VerifyOne />} />
                  <Route path="/subscriptions" exact element={<Subscriptions />} />
                  <Route path="/discover" exact element={<Discover />} />
                  <Route path="/chatbox" exact element={<Chatbox />} />
                  <Route path="/profileverification" exact element={<ProfileVerification />} />
                  <Route path="/licenceverification" exact element={<LicenceVerification />} />
                  <Route path="/setting" exact element={<Setting />} />
                  <Route path="/map" exact element={<Map />} />
                  <Route path="/accountverification" exact element={<AccountVerification />} />
                  <Route path="/backgroundverification" exact element={<BackgroundVerification />} />
                  <Route path="/drivinglicence" exact element={<DrivingLicence />} />
                  <Route path="/takepicture" exact element={<TakePicture />} />
                  <Route path="/profileverification3" exact element={<ProfileVerification3 />} />
                  <Route path="/takepicturetwo" exact element={<TakePicturetwo />} />
                  <Route path="/profileone" exact element={<Profileone />} />
                  <Route path="/blockeduser" exact element={<BlockedUser />} />
                  <Route path="/voicecall" exact element={<Voicecall />} />
                  <Route path="/drivinglicenceVerify" exact element={<DrivinglicenceVerify />} />
                  <Route path="/FAQ" exact element={<FAQ />} />
               </Routes>
            </Content>
            <Footer />
      </Layout>
   );
}
export default Main;