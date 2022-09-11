import React from 'react'
import girlprofile from '../../images/connection2.png'
import voice from '../../images/voice.png'
import call from '../../images/call.png'
import stop from '../../images/stop.png'
import { Layout } from 'antd';
import Header from '../../components/header/index'
import Footer from '../../components/footer/index'

const { Content } = Layout;

const Voicecall = () => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Content>
                <Header />
                <div className='' style={{ background: '#000000', color: 'white' }}>
                    <div className='d-flex flex-row justify-content-around align-items-center pt-5 pb-5' style={{ width: '100%', textAlign: 'center', padding: '3rem 0' }} >
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <div class="row m-5 voice-arae">
                                <div class="col-md-6 border border-dark vedio-profile">
                                </div>
                                <div class="col-md-6 border border-dark voice-part">
                                    <div className="profile-img">
                                        <img src={girlprofile} />
                                        <h5>Adriane</h5>
                                        <p>Fashion Model, <span>24</span></p>
                                        <p>10:52</p>
                                    </div>
                                    <div className='d-flex flex-wrap center-data'>
                                        <div className='icon-area'>
                                            <img className='profile_verify_icons_three' src={voice} />
                                            <img className='profile_verify_icons_three' src={call} />
                                            <img className='profile_verify_icons_three' src={stop} />
                                        </div>
                                    </div>

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

export default Voicecall
