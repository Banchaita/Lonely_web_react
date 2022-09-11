import { Button } from 'antd';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import FooterOne from '../../components/footerOne/index'
import { Layout } from 'antd';
import Header from '../../components/header/index'
import Footer from '../../components/footer/index'

const { Content } = Layout;

const Contact = () => {
    const history = useNavigate();

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Content>
                <Header />
                <div className='d-flex flex-column justify-content-center align-items-center' style={{ background: '#000000', color: 'white' }}>
                    <div className='d-flex flex-column justify-content-around' style={{ background: 'white', width: '80%', height: '80%', padding: '2rem', borderRadius: '15px', margin: '7rem 0' }}>
                        <p style={{ color: 'black', fontSize: '30px', fontWeight: '700', textAlign: 'center' }}>Contact</p>
                        <div className='d-flex flex-wrap justify-content-start'>
                            <div className='d-flex flex-column justify-content-start align-items-center p-5'>
                                <img src="plugins/images/Ellipse 43@2x.png" style={{ width: '130px' }} />
                                <p className='mb-0' style={{ color: 'black', fontWeight: '600', padding: '1rem 0', fontSize: '18px' }}>Jack Reacher</p>
                                <img src="plugins/images/checkmark-filled-1.png" style={{ width: '20px' }} />
                            </div>
                            <div className='d-flex flex-column justify-content-start align-items-center p-5'>
                                <img src="plugins/images/Ellipse 43@2x.png" style={{ width: '130px' }} />
                                <p className='mb-0' style={{ color: 'black', fontWeight: '600', padding: '1rem 0', fontSize: '18px' }}>Jack Reacher</p>
                                <img src="plugins/images/checkmark-filled-1.png" style={{ width: '20px' }} />
                            </div>
                            <div className='d-flex flex-column justify-content-start align-items-center p-5'>
                                <img src="plugins/images/Ellipse 43@2x.png" style={{ width: '130px' }} />
                                <p className='mb-0' style={{ color: 'black', fontWeight: '600', padding: '1rem 0', fontSize: '18px' }}>Jack Reacher</p>
                                <img src="plugins/images/checkmark-filled-1.png" style={{ width: '20px' }} />
                            </div>
                            <div className='d-flex flex-column justify-content-start align-items-center p-5'>
                                <img src="plugins/images/Ellipse 43@2x.png" style={{ width: '130px' }} />
                                <p className='mb-0' style={{ color: 'black', fontWeight: '600', padding: '1rem 0', fontSize: '18px' }}>Jack Reacher</p>
                                <img src="plugins/images/checkmark-filled-1.png" style={{ width: '20px' }} />
                            </div>
                            <div className='d-flex flex-column justify-content-start align-items-center p-5'>
                                <img src="plugins/images/Ellipse 43@2x.png" style={{ width: '130px' }} />
                                <p className='mb-0' style={{ color: 'black', fontWeight: '600', padding: '1rem 0', fontSize: '18px' }}>Jack Reacher</p>
                                <img src="plugins/images/checkmark-filled-1.png" style={{ width: '20px' }} />
                            </div>
                            <div className='d-flex flex-column justify-content-start align-items-center p-5'>
                                <img src="plugins/images/Ellipse 43@2x.png" style={{ width: '130px' }} />
                                <p className='mb-0' style={{ color: 'black', fontWeight: '600', padding: '1rem 0', fontSize: '18px' }}>Jack Reacher</p>
                                <img src="plugins/images/checkmark-filled-1.png" style={{ width: '20px' }} />
                            </div>
                            <div className='d-flex flex-column justify-content-start align-items-center p-5'>
                                <img src="plugins/images/Ellipse 43@2x.png" style={{ width: '130px' }} />
                                <p className='mb-0' style={{ color: 'black', fontWeight: '600', padding: '1rem 0', fontSize: '18px' }}>Jack Reacher</p>
                                <img src="plugins/images/checkmark-filled-1.png" style={{ width: '20px' }} />
                            </div>
                            <div className='d-flex flex-column justify-content-start align-items-center p-5'>
                                <img src="plugins/images/Ellipse 43@2x.png" style={{ width: '130px' }} />
                                <p className='mb-0' style={{ color: 'black', fontWeight: '600', padding: '1rem 0', fontSize: '18px' }}>Jack Reacher</p>
                                <img src="plugins/images/checkmark-filled-1.png" style={{ width: '20px' }} />
                            </div>
                            <div className='d-flex flex-column justify-content-start align-items-center p-5'>
                                <img src="plugins/images/Ellipse 43@2x.png" style={{ width: '130px' }} />
                                <p className='mb-0' style={{ color: 'black', fontWeight: '600', padding: '1rem 0', fontSize: '18px' }}>Jack Reacher</p>
                                <img src="plugins/images/checkmark-filled-1.png" style={{ width: '20px' }} />
                            </div>
                            <div className='d-flex flex-column justify-content-start align-items-center p-5'>
                                <img src="plugins/images/Ellipse 43@2x.png" style={{ width: '130px' }} />
                                <p className='mb-0' style={{ color: 'black', fontWeight: '600', padding: '1rem 0', fontSize: '18px' }}>Jack Reacher</p>
                                <img src="plugins/images/checkmark-filled-1.png" style={{ width: '20px' }} />
                            </div>
                            <div className='d-flex flex-column justify-content-start align-items-center p-5'>
                                <img src="plugins/images/Ellipse 43@2x.png" style={{ width: '130px' }} />
                                <p className='mb-0' style={{ color: 'black', fontWeight: '600', padding: '1rem 0', fontSize: '18px' }}>Jack Reacher</p>
                                <img src="plugins/images/checkmark-filled-1.png" style={{ width: '20px' }} />
                            </div>

                        </div>
                        <div className='d-flex flex-wrap justify-content-center align-items-center p-4' style={{ width: '100%' }}>
                            <Button style={{ width: '130px', height: '40px', background: '#00DFDF', borderRadius: '10px', border: '2px solid transparent', color: 'white' }}>Conform</Button>
                        </div>
                    </div>
                    <img src="plugins/images/Group 17018.png" style={{ width: '100%', transform: `translateY(56px)` }} />

                </div>
                <FooterOne bgColor={"#161616"} />
            </Content>
            <Footer />
        </Layout>
    )
}

export default Contact