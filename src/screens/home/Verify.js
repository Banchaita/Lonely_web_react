import { Button } from 'antd';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import FooterOne from '../../components/footerOne/index'
import { Layout } from 'antd';
import Header from '../../components/header/index'
import Footer from '../../components/footer/index'

const { Content } = Layout;

const Verify = () => {
    const history = useNavigate();

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Content>
                <Header />
                <div className='d-flex flex-column justify-content-center align-items-center' style={{ background: '#000000', color: 'white' }}>
                    <div className='d-flex flex-column justify-content-center' style={{ padding: '4rem 0 1rem 0' }}>
                        <p style={{ color: 'white', fontSize: '30px', fontWeight: '700', textAlign: 'center' }}>Profile Verification</p>
                        <div className='d-flex flex-column justify-content-center align-items-center' style={{ background: 'white', width: '350px', borderRadius: '13px', padding: '2rem' }}>
                            <img src="plugins/images/right.png" style={{ width: '3rem', height: "3rem" }} />
                            <p style={{ color: 'black', fontSize: '20px', fontWeight: '700', textAlign: 'center' }}>Get Verified</p>
                            <p style={{ color: 'black', fontSize: '15px', fontWeight: '300', textAlign: 'center' }}>Prove you're the person in Your profile by taking two selfies.If you match, boom, you're verified!</p>
                        </div>
                        <div className='d-flex flex-wrap justify-content-center align-items-center p-4' style={{ width: '100%' }}>
                            <Button style={{ width: '130px', height: '40px', background: '#00DFDF', borderRadius: '10px', border: '2px solid transparent', color: 'white' }}>Next</Button>
                        </div>
                    </div>
                </div>
            </Content>
            <Footer />
        </Layout>
    )
}

export default Verify