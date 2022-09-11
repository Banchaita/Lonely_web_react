import React from 'react'
import { useNavigate } from 'react-router-dom'
import FooterOne from '../../components/footerOne/index'
import { Layout } from 'antd';
import Header from '../../components/header/index'
import Footer from '../../components/footer/index'

const { Content } = Layout;

const Aboutus = () => {
    const history = useNavigate();

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Content>
                <Header />
                <div className='' style={{ background: '#000000', color: 'white' }}>
                    <div style={{ background: '#0D0D0D', padding: '3rem 0' }}>
                        <p style={{ textAlign: 'center', fontSize: '2rem', fontWeight: '700' }}>Subscriptions</p>
                    </div>
                    <div className='d-flex flex-column justify-content-center align-items-center' style={{ textAlign: 'center', padding: '3rem 0' }} >
                        <div className='d-flex flex-wrap justify-content-around align-items-center p-4' style={{ width: '100%' }}>
                            <div className='mt-3 mb-3'>
                                <img src="plugins/images/Mask Group 27.png" style={{ width: '120px' }} />
                            </div>
                            <div className='d-flex flex-column justify-content-start align-items-start mt-3 mb-3'>
                                <p style={{ fontSize: '20px', marginBottom: '0', fontWeight: '600' }}>Get 50% off</p>
                                <p style={{ fontSize: '20px', marginBottom: '0', fontWeight: '600' }}>on your 1 month!</p>
                                <p style={{ fontSize: '16px', marginBottom: '0', fontWeight: '600', fontStyle: 'italic', color: '#01DFDF' }}>Today only</p>
                                <p style={{ fontSize: '12px', marginBottom: '0', fontWeight: '500' }}>First month $9.99</p>
                                <p style={{ fontSize: '12px', marginBottom: '0', fontWeight: '500', color: '#505050' }}>normally $19.99/month</p>
                            </div>
                            <div className='d-flex flex-column justify-content-start align-items-start mt-3 mb-3'>
                                <p><img src="plugins/images/Icon-feather-check@2x1.png" style={{ width: '15px', marginRight: '1rem' }} />See Who Wants to Connect With You</p>
                                <p><img src="plugins/images/Icon-feather-check@2x1.png" style={{ width: '15px', marginRight: '1rem' }} />Send Messages Without Needing a Connection</p>
                                <p><img src="plugins/images/Icon-feather-check@2x1.png" style={{ width: '15px', marginRight: '1rem' }} />Request Video / Audio Calls</p>
                                <p><img src="plugins/images/Icon-feather-check@2x1.png" style={{ width: '15px', marginRight: '1rem' }} />Skip Advertisments / No Advertisments</p>
                            </div>
                            <div className='mt-3 mb-3'>
                                <p style={{ fontStyle: 'italic' }}>Offer ends in 23:59:56</p>
                                <div onClick={() => history('/connection')} className="signlog_login_btn" >
                                    <p style={{
                                        padding: '1rem 4rem',
                                        height: 'auto',
                                        margin: '0',
                                        background: '#282c34',
                                        borderRadius: '13px',
                                        color: 'white'
                                    }}>Enjoy Premium Access</p>
                                </div>
                            </div>
                        </div>
                        <p style={{ width: '50%', color: '#505050', fontSize: '10px' }}>
                            <span style={{ fontWeight: '600', color: 'white' }}>The subscription automatically renews for US$19,99/month at the end of the month.</span>
                            Payment will be charged to your Apple ID account at the confirmation of purchase
                            Subscriptions automatically renews unless it is cancelled at least 24 hours
                            before the end of the current period. Your account will be charged for renewal
                            within 24 hours prior to the end of the current period. You can manage and cancel
                            your subscriptions by going to your account settings on the App Store after purchase.
                        </p>
                    </div>
                    <img src="plugins/images/Group 17018.png" style={{ width: '100%', transform: `translateY(45px)` }} />

                </div>
                <FooterOne bgColor={"#161616"} />
            </Content>
            <Footer />
        </Layout>
    )
}

export default Aboutus