import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from "antd"
import Auth from '../../components/common/Auth'

const SignLog = () => {
    const history = useNavigate();

    return (
        <div className="container-fluid p-0">
            <div className="auto-height" style={{ height: '100vh' }}>
                <Auth />
                <div className="px-0 col-12 col-lg-6 col-md-12 d-flex align-items-center justify-content-center signup_right" style={{ background: "#1A1717" }}>
                    <div className="col-12 col-lg-10 p-5 signuplogin" style={{ borderRadius: 5, height: '100%' }}>
                        <div>
                            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '6rem', borderRadius: 20, marginTop: '15vh' }}>
                                <img class="img-fluid" style={{ maxHeight: '200px', width: '200px' }} src='plugins/images/Mask Group 19@2x.png' />
                                <p style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px', color: 'white', fontWeight: '500', fontStyle: 'italic' }}>Are you ready?</p>
                            </div>
                            <div className='createbtn ' style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem', borderRadius: 20 }}>
                                <div onClick={() => history('/login')} className="signlog_login_btn" ><p style={{ padding: '1rem 4rem', height: 'auto', margin: '0', background: '#282c34', borderRadius: '13px', color: 'white' }}>Create Free Account</p></div>
                                <Button onClick={() => history('/login')} className="btn btn-block loginbtn" style={{ color: 'white', background: 'transparent', border: '2px solid transparent', marginTop: '1rem' }}>Sign In</Button>
                            </div>
                        </div>
                        <div>
                            <p style={{ textAlign: 'center', fontSize: '24px', fontWeight: 'bold', color: 'white' }}>Dowload the App <span style={{ color: '#01E0DF' }}>Now</span></p>
                            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', borderRadius: 20 }}>
                                <img src="plugins/images/Group 17274 (1).png" style={{ width: "200px", height: '60px', margin: '1rem' }} />
                                <img src="plugins/images/Group 17013 (1).png" style={{ width: "200px", height: '60px', margin: '1rem' }} />
                            </div>
                        </div>
                        <div>
                            <p style={{ textAlign: 'center', fontSize: '10px', fontWeight: '100', color: 'white', marginBottom: '0' }}>By creating an account, you agree to our</p>
                            <p style={{ textAlign: 'center', fontSize: '10px', fontWeight: 'bold', color: 'white' }} >Terms of Service <span style={{ fontWeight: '100' }}>and</span> Privacy Policy</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignLog
