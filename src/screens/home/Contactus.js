import { Button } from 'antd';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import FooterOne from '../../components/footerOne/index'
import { Layout } from 'antd';
import Header from '../../components/header/index'
import Footer from '../../components/footer/index'

const { Content } = Layout;

const Contactus = () => {
    const history = useNavigate();

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Content>
                <Header />
            <div className='' style={{ background: '#000000', color: 'white' }}>
                <div style={{ background: '#0D0D0D', padding: '3rem 0' }}>
                    <p style={{ textAlign: 'center', fontSize: '2rem', fontWeight: '700' }}>Contact <span className='contactus'>Us?</span></p>
                </div>
                <div className='d-flex flex-row justify-content-around align-items-center pt-5 pb-5' style={{ width: '100%', textAlign: 'center', padding: '3rem 0' }} >
                    <div className='d-flex flex-column justify-content-center align-items-start'>
                        <p style={{ fontSize: '2rem', fontWeight: '700' }}>Contact Us</p>
                        <p>For all enquiries, please email us using the form below</p>
                        <input placeholder='Name*' className='contact-input' />
                        <input placeholder='E-Mail*' className='contact-input' />
                        <textarea id="message" name="message" placeholder='Message*' className='contact-input' rows="8" cols="50" />
                        <div className='d-flex pt-4' style={{ width: '100%' }}>
                            <Button style={{ width: '130px', height: '40px', background: '#00DFDF', borderRadius: '10px', border: '2px solid transparent', color: 'white' }}>Contact Us</Button>
                        </div>
                        {/* <div>
                            <img src="plugins/images/Group 17018.png" style={{ width: '100%', transform: `translateY(100px)` }} />
                        </div> */}
                    </div>
                    <div>
                        <img src="plugins/images/pngkit_vertical-banner-png_3111689@2x.png" style={{ width: '400px' }} />
                    </div>
                </div>
            </div>
            <FooterOne bgColor={"#161616"} />
            </Content>
            <Footer />
        </Layout>
    )
}

export default Contactus