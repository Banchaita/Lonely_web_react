import React, { useEffect } from "react";
import Mainroutes from "../screens/auth/Main";
import Main from "../screens";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserData, setUserToken } from "../actions/auth"
import { Route, Routes } from 'react-router-dom';
import { SignLog, Login, Otp, GenderSelect, TypesOfConnection, Interest, AuthProfile, Location, Notifications } from "../screens/auth/index";
import {
    Home,
    Profile,
    EditProfile,
    Aboutus,
    Whyus,
    Contactus,
    Connection,
    Chatbot,
    Contact,
    VerifyOne,
    Discover,
    Subscriptions,
    Chatbox,
    ProfileVerification,
    LicenceVerification,
    Setting,
    Map,
    AccountVerification,
    BackgroundVerification,
    DrivingLicence,
    TakePicture,
    ProfileVerification3,
    TakePicturetwo,
    Profileone,
    BlockedUser,
    Voicecall,
    Verify,
    DrivinglicenceVerify,
    FAQ
} from '../screens/home/index'



const AppRouter = () => {

    let history = useNavigate()
    let dispatch = useDispatch()

    let user_data = useSelector((state) => state.auth.user_data)

    let token = localStorage.getItem("check_token")


    const loadUserData = async () => {
        dispatch(getUserData())
    }

    useEffect(() => {
        // if (token == "") {
            token = localStorage.getItem('check_token')
            if (!token || token == "" || token == undefined) {
                history("/login")
            } else {
                loadUserData()
            }   
        // }
    }, [])

    return (
        <>
            {token ?
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
                    <Route path="/takepicturedl" exact element={<TakePicture />} />
                    <Route path="/profileverification3" exact element={<ProfileVerification3 />} />
                    <Route path="/takepicturetwo" exact element={<TakePicturetwo />} />
                    <Route path="/profileone" exact element={<Profileone />} />
                    <Route path="/blockeduser" exact element={<BlockedUser />} />
                    <Route path="/voicecall" exact element={<Voicecall />} />
                    <Route path="/gender_select" exact element={<GenderSelect />} />
                    <Route path="/types_of_connection" exact element={<TypesOfConnection />} />
                    <Route path="/interest" exact element={<Interest />} />
                    <Route path="/authprofile" exact element={<AuthProfile />} />
                    <Route path="/location" exact element={<Location />} />
                    <Route path="/notifications" exact element={<Notifications />} />
                    <Route path="/drivinglicenceVerify" exact element={<DrivinglicenceVerify />} />
                    <Route path="/FAQ" exact element={<FAQ />} />

                </Routes>
                :
                <Mainroutes />
            }
        </>
    );
}
export default AppRouter;