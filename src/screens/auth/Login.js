import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { socialLogin, registerUser, setCallResponse, } from '../../actions/auth'
import Auth from '../../components/common/Auth'
import toast from "../../components/common/toast"
import GoogleLogin from 'react-google-login';
import SocialButton from "./SocialButton";
import { Input } from 'antd';

const Login = () => {

    const history = useNavigate();
    const dispatch = useDispatch();
    const [phone_number, setPhonenumber] = useState("")
    const [country_code, setCountrycode] = useState("+1")
    const call_response = useSelector((state) => state.auth.call_response)

    const handleSocialLogin = (user) => {
        dispatch(socialLogin({
            email: user._profile.email,
            f_name: user._profile.firstName,
            l_name: user._profile.lastName,
            profile_pic: user._profile.profilePicURL,
            device_id: 123456,
            login_source: user._provider,
            fb_uid: user._profile.id,
            os: "web",
            fcm_token: "na"
        }))
    };

    const handleSocialLoginFailure = (err) => {
        console.error(err);
    };

    const responseGoogle = (user) => {
        dispatch(socialLogin({
            email: user.profileObj.email,
            f_name: user.profileObj.givenName,
            l_name: user.profileObj.familyName,
            profile_pic: user.profileObj.imageUrl,
            device_id: 123456,
            login_source: "google",
            google_id: user.profileObj.googleId,
            os: "web",
            fcm_token: "na"
        }))
    }
    const googleError = (response) => {
        console.log(response);
    }

    const handleClick = async () => {
        if (phone_number == "") {
            toast.error("Please enter valid phone number to proceed...")
            return false
        }
        localStorage.setItem('phone_number', phone_number)
        localStorage.setItem('country_code', country_code)
        let logdata = {
            phone_number: phone_number,
            country_code: country_code,
            login_source: 'phone'
        }
        dispatch(registerUser(logdata))
    }
    
    useEffect(() => {
        if (call_response) {
            if (call_response?.status) {
                history('/otp')
                toast.success(call_response?.message)
            } else {
                toast.error(call_response?.message)
            }
            dispatch(setCallResponse(null))
        }
    }, [call_response])

    return (
        <div className="container-fluid p-0">
            <div className="auto-height" style={{ height: '100vh' }}>
                <Auth />
                <div className="px-0 col-12 col-lg-6 col-md-12 d-flex flex-column align-items-center justify-content-between signup_right" style={{ background: "#1A1717" }}>
                    <div style={{ width: '100%', marginTop: '2rem' }}>
                        <Link to={'/'} style={{ marginLeft: '1rem' }}><img src="plugins/images/Group 17194.png" /></Link>
                    </div>
                    <div className="col-10 p-5 " style={{ borderRadius: 5, color: 'white', textAlign: 'center' }}>
                        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '3rem', borderRadius: 20 }}>
                            <img class="img-fluid" style={{ maxHeight: '200px', width: '200px' }} src='plugins/images/Mask Group 19@2x.png' />
                        </div>
                        <h4 style={{ color: 'white', fontSize: '19px', marginBottom: '2rem' }}>My Mobile</h4>

                        <div className='d-flex flex-column justify-content-center align-items-center' style={{ padding: '0 0 2rem 0' }}>
                            <p className='login-text' style={{ fontWeight: '100', width: '45%' }}>Please enter your valid phone number. We will send you a 4-digit code to verify your account.</p>
                        </div>
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <Input.Group compact>
                                <Input
                                    style={{
                                        width: '10%',
                                        textAlign: "left",
                                        background: 'transparent',
                                        color: '#fff',
                                        borderRight: 'none',
                                        height: "3rem",
                                        border: '2px solid #04CACA',
                                        borderTopLeftRadius: '13px',
                                        borderBottomLeftRadius: '13px'
                                    }} readOnly={true} defaultValue="+1" />
                                <Input
                                    style={{
                                        width: '40%',
                                        textAlign: "left",
                                        background: 'transparent',
                                        color: '#fff',
                                        height: "3rem",
                                        borderLeft: 'none',
                                        border: '2px solid #04CACA',
                                        borderTopRightRadius: '13px',
                                        borderBottomRightRadius: '13px'
                                    }}
                                    onChange={(e) => setPhonenumber(e.target.value)}
                                    maxLength={10}
                                    className={"phoneInput"}
                                    defaultValue={""}
                                    placeholder='XXX-XXX-XXXX'
                                />
                            </Input.Group>
                        </div>
                        <div className='d-flex justify-content-center align-items-center' style={{ width: '100%', marginTop: '4rem' }}>
                            <div onClick={() => handleClick()} className="signlog_login_btn login-button-adj" style={{ width: '50%' }}><p style={{ padding: '1rem 4rem', height: 'auto', margin: '0', background: '#282c34', borderRadius: '13px', color: 'white' }}>Confirm</p></div>
                        </div>
                        <p style={{ padding: '2rem 0' }}>----- or sign In With -----</p>
                        <div className='d-flex justify-content-center' style={{ width: '100%' }}>
                            <SocialButton
                                provider="facebook"
                                appId="675130930412270"
                                onLoginSuccess={handleSocialLogin}
                                onLoginFailure={handleSocialLoginFailure}
                                className="btn btn-block signlosignlog_login_facebbook_btn login-button-adj">
                                Login with Facebook
                            </SocialButton>
                        </div>
                        <div className='d-flex justify-content-center' style={{ width: '100%', marginTop: '2rem' }}>
                            <GoogleLogin
                                clientId="625192826609-episdko6t1gi4nknofmagmcs32mqvu5j.apps.googleusercontent.com"
                                onSuccess={responseGoogle}
                                onFailure={(err) => googleError(err)}
                                className="btn btn-block googleBtn login-button-adj"
                                background="#4267B2">
                                <span className='googletext text-black'>Login with Google</span>
                            </GoogleLogin>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Login