import React from 'react'
import licence from '../../images/licence .png'
import { Layout } from 'antd';
import Header from '../../components/header/index'
import Footer from '../../components/footer/index'

const { Content } = Layout;

const DrivingLicence = () => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Content>
                <Header />
                <div className='' style={{ background: '#000000', color: 'white' }}>
                    <div style={{ padding: '3rem 0' }}>
                        <p style={{ textAlign: 'center', fontSize: '2rem', fontWeight: '700' }}>Licence Verification</p>
                    </div>
                    <div className='d-flex flex-row justify-content-around align-items-center pt-5 pb-5' style={{ width: '100%', textAlign: 'center', padding: '3rem 0' }} >
                        <div className='d-flex flex-column justify-content-center align-items-center' >
                            <div className=" d-flex flex-column verification-area" style={{ background: '#fff', width: '70%', borderRadius: '10px', padding: '8%' }}>
                                <div className="img-area">
                                    <img src={licence} alt="" />
                                </div>
                                <div className="text-area">
                                    <h5 className='verification-title my-4' style={{ fontWeight: '600' }}>Driving licence Verification</h5>
                                    <p className='text-black' style={{ color: '#2D2D2D', fontWeight: '400' }}>
                                        Your Driving licence Verification has been Completed. Your Driving licence is verified.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Content>
            <Footer />
        </Layout>
    )
}

export default DrivingLicence
