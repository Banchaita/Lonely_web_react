import { Button } from 'antd';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import FooterOne from '../../components/footerOne/index'
import { Layout } from 'antd';
import Header from '../../components/header/index'
import Footer from '../../components/footer/index'

const { Content } = Layout;

const VerifyOne = () => {
    const history = useNavigate();

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Content>
                <Header />
                <div className='d-flex flex-column justify-content-center align-items-center' style={{ background: '#000000', color: 'white' }}>
                    <div className='d-flex flex-column justify-content-center' style={{ padding: '4rem 0 1rem 0' }}>
                        <div className='d-flex flex-column justify-content-center align-items-center' style={{ background: 'white', borderRadius: '13px', padding: '2rem' }}>
                            <div className='d-flex'>
                                <img src="plugins/images/pexels-marlene-leppänen-1183266.png" style={{ width: '250px', height: "auto", padding: '1rem' }} />
                                <img src="plugins/images/pexels-marlene-leppänen-1183266.png" style={{ width: '250px', height: "auto", padding: '1rem' }} />
                            </div>
                            <p style={{ color: 'rgb(50,140,232)', fontSize: '15px', fontWeight: '500', textAlign: 'center', paddingTop: '2rem' }}>Retake</p>
                        </div>
                        <p style={{ color: 'white', fontSize: '15px', fontWeight: '500', textAlign: 'center', paddingTop: '2rem' }}>1/2</p>
                        <div className='d-flex flex-wrap justify-content-center align-items-center p-4' style={{ width: '100%' }}>
                            <Button style={{ width: '130px', height: '40px', background: '#00DFDF', borderRadius: '10px', border: '2px solid transparent', color: 'white' }}>Yes, Next Pose..</Button>
                        </div>
                    </div>
                </div>
            </Content>
            <Footer />
        </Layout>
    )
}

export default VerifyOne