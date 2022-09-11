import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import toast from "../../components/common/toast"
import logo1 from '../../images/logo2.png'
import { notification, Switch } from 'antd';
import FooterOne from '../../components/footerOne/index'
import { Layout } from 'antd';
import Header from '../../components/header/index'
import Footer from '../../components/footer/index'
import { logout } from '../../actions/auth'
import Geolocation from '../../components/geolacation'
import { getUserData, updateUserProfileData, setCallResponse, updateVisibleOnMap, userlocation } from "../../actions/auth"
import {updateUserFCM} from '../../actions/users'

const { Content } = Layout;

const Setting = () => {
    const history = useNavigate();
    const dispatch = useDispatch()

    const [status, setStatus] = useState(null);


    let profile_data = useSelector((state) => state.auth.profile_data)
    let call_response = useSelector((state) => state.auth.call_response)

    console.log('profile_data==========',profile_data)


    const notification =() =>{
        let token = localStorage.getItem("check_token")
        let data = {
            fcm_token:token,
            notification_status:status
        }
        console.log('ffff',data)
    }


    function onChange(checked, type) {
        console.log(checked)
        let token = localStorage.getItem("check_token")
        if(type == "notify"){
            let data ={
                fcm_token:token,
                notification_status : checked == 1 ? "0" : "1"
            }

            dispatch(updateUserFCM(data))
        }   
        if(type == "visible"){
            dispatch(updateVisibleOnMap({visible_on_map : checked == 1 ? "0" : "1"}))
        }   
        if(type == "map"){
            if(profile_data.lat == "" && profile_data.lng == ""){
                const getLocation = () => {
                    if (!navigator.geolocation) {
                        setStatus('Geolocation is not supported by your browser');
                    } else {
                        setStatus('Locating...');
                        navigator.geolocation.getCurrentPosition((position) => {
                            let locationdata ={
                                lat:position.coords.latitude,
                                lng:position.coords.longitude
                            }
                            dispatch(userlocation(locationdata))
                        }, () => {
                            setStatus('Unable to retrieve your location');
                           
                        });
                    }
                }
                getLocation()
            }else{
                let locationdata ={
                    lat:"",
                    lng:""
                }
                dispatch(userlocation(locationdata))
            }
        }  
    }

    const logoutProfile = () => {
        // localStorage.removeItem('check_token')
        dispatch(logout())
        toast.success('Logout success')
        history('/login')
    }
    const blockUser = () => {
        history('/blockeduser')
    }
    const faq = () => {
        history('/FAQ')
    }

    useEffect(() => {
        // console.log(profile_data)
        if (profile_data.length == 0) {
            let token = localStorage.getItem("check_token")
            let data = {
                token: token
            }
            dispatch(getUserData(data))
        }
    })

    useEffect(() => {
        if (call_response) {
            if (call_response.status) {
                toast.success(call_response.message)
                history("/setting")
                dispatch(setCallResponse(null))
                let token = localStorage.getItem("check_token")
                let data = {
                    token: token
                }
                dispatch(getUserData(data))

            } else {
                toast.error(call_response.message)
            }
        }
    }, [call_response])


    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Content>
                <Header />
                <div className='' style={{ background: '#000000', color: 'white' }}>
                    <div style={{ padding: '3rem 0' }}>
                        <p style={{ textAlign: 'center', fontSize: '2rem', fontWeight: '700' }}>Settings</p>
                    </div>
                    <div className='d-flex flex-row justify-content-around align-items-center pt-5 pb-5' style={{ width: '100%', textAlign: 'center', padding: '3rem 0' }} >
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <div className="setting-btn-area">
                                <div className='setting-btn' onClick={() => history('/subscriptions')}>
                                    <span className='btn-logo'>
                                        <img src={logo1} alt=""
                                            style={{ width: '50px' }}
                                        />
                                    </span>
                                    <span className='btn-text'>
                                        Get Permium Access
                                    </span>
                                    <span className='btn-icon'>
                                        <i class="fa-solid fa-angle-right"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ padding: '3rem 0' }}>
                        <p style={{ textAlign: 'center', fontSize: '2rem', fontWeight: '700' }}>Account Settings</p>
                    </div>

                    <div className='col-8 offset-2 my-5 d-flex flex-column justify-content-center align-items-center' >
                        <div className='container'>
                            <div>
                                <div className='row mt-2'>
                                    <div className='col-md-6 account-area'>
                                        <label style={{ transform: `translate(13px, 22px)`, background: 'black', color: 'white', padding: '5px' }}>Phone Number</label>
                                        <div className='account-btn' style={{ paddingTop: '0px' }}>
                                            <select name="area-code" id="area-code" style={{ border: '2px solid transparent' }}>
                                                <option value="(+1)">(+1)</option>
                                                <option value="(+2)">(+2)</option>
                                            </select>
                                            <span className='phonenumber'>{profile_data?.phone_number}</span>
                                        </div>

                                    </div>
                                    <div className='col-md-6'>
                                        <label style={{ transform: `translate(13px, 22px)`, background: 'black', color: 'white', padding: '5px' }}>Notification</label>
                                        <div className='account-btn'>
                                            Enable Notification
                                            <span className='account-btn-logo'>
                                                <img src={logo1} alt="" style={{ width: '50px' }} />
                                            </span>
                                            <span className='switch'>
                                                <Switch checked={profile_data?.notification_status == 1 ? true : false} onChange={()=>onChange(profile_data?.notification_status, "notify")}   />
                                            </span>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <label style={{ transform: `translate(13px, 22px)`, background: 'black', color: 'white', padding: '5px' }}>Location</label>
                                        <div className='account-btn'>
                                            Enable Location
                                            <span className='account-btn-logo'>
                                                <img src={logo1} alt="" style={{ width: '50px' }} />
                                            </span>
                                            <span className='switch'>
                                                
                                                <Switch checked={profile_data?.lat == "" && profile_data?.lng == "" ? false : true} onChange={()=>onChange("", "map")} />
                                            </span>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <label style={{ transform: `translate(13px, 22px)`, background: 'black', color: 'white', padding: '5px' }}>Map Location</label>
                                        <div className='account-btn'>
                                            Hide Profile On Map
                                            <span className='account-btn-logo'>
                                                <img src={logo1} alt="" style={{ width: '50px' }} />
                                            </span>
                                            <span className='switch'>
                                                <Switch checked={profile_data?.visible_on_map == 1 ? true : false} onChange={()=>onChange(profile_data?.visible_on_map, "visible")} />
                                            </span>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <label style={{ transform: `translate(13px, 22px)`, background: 'black', color: 'white', padding: '5px' }}>Chat Messages</label>
                                        <div className='account-btn'>
                                            Allow Connection Only
                                            <span className='account-btn-logo'>
                                                <img src={logo1} alt="" style={{ width: '50px' }} />
                                            </span>
                                            <span className='switch'>
                                                <Switch checke unCheckedChildren="" />
                                            </span>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        {/* <label style={{ transform: `translate(13px, 22px)`, background: 'black', color: 'white', padding: '5px' }}>Invisible</label>
                                        <div className='account-btn'>
                                            Invisible Mode
                                            <span className='account-btn-logo'>
                                                <img src={logo1} alt="" style={{ width: '50px' }} />
                                            </span>
                                            <span className='switch'>
                                                <Switch checke unCheckedChildren="" />
                                            </span>
                                        </div> */}
                                    </div>

                                    <div className='col-md-6'>
                                        <div className='account-btn-two'>
                                            Safety Share Location
                                            <span className='account-btn-icon'>
                                                <i class="fa-solid fa-angle-right"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='account-btn-two'>
                                            Safety Features
                                            <span className='account-btn-icon'>
                                                <i class="fa-solid fa-angle-right"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='account-btn-two' onClick={() => blockUser()} style={{ cursor: 'pointer' }}>
                                            Blocked
                                            <span className='account-btn-icon'>
                                                <i class="fa-solid fa-angle-right"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ padding: '3rem 0' }}>
                            <p style={{ textAlign: 'center', fontSize: '2rem', fontWeight: '700' }}>Contact Us</p>
                        </div>
                        <div className='d-flex flex-row justify-content-around align-items-center pt-5 pb-5' style={{ width: '100%', textAlign: 'center', padding: '3rem 0' }} >
                            <div className='row mt-2'>
                                <div className='col-md-6'>
                                    <div className='contact-btn-two' onClick={() => faq()} style={{cursor:'pointer'}}>
                                        Help & Support
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='contact-btn-two'>
                                        Message The CEO
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='d-flex flex-row justify-content-around align-items-center pt-5 pb-5' style={{ width: '100%', textAlign: 'center', padding: '3rem 0' }} onClick={logout}>
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <div onClick={logoutProfile} className="setting-btn-area">
                                <div className='setting-logout-btn'>
                                    Log out
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <FooterOne bgColor={"black"} />
            </Content>
            <Footer />
        </Layout>
    )
}

export default Setting
