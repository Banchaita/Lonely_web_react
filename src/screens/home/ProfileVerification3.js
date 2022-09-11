import React from 'react'
import { Layout, Button } from 'antd';
import correction from '../../images/correction.png'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/header/index'
import Footer from '../../components/footer/index'

const { Content } = Layout;

const ProfileVerification3 = () => {

  const history = useNavigate();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content>
        <Header />
        <div className='' style={{ background: '#000000', color: 'white' }}>
          <div style={{ padding: '3rem 0' }}>
            <p style={{ textAlign: 'center', fontSize: '2rem', fontWeight: '700' }}>Profile Verification</p>
          </div>
          <div className='d-flex flex-row justify-content-around align-items-center pt-5 pb-5' style={{ width: '100%', textAlign: 'center', padding: '3rem 0' }} >
            <div className='d-flex flex-column justify-content-center align-items-center' >
              <div className=" d-flex flex-column verification-area" style={{ background: '#fff', width: '70%', borderRadius: '10px', padding: '8%' }}>
                <div className="img-area">
                  <img src={correction} alt="" />
                </div>
                <div className="text-area">
                  <h5 className='verification-title my-4' style={{ fontWeight: '600' }}>Verification Started</h5>
                  <p className='text-black' style={{ color: '#2D2D2D', fontWeight: '400' }}> 
                     Your profile Verification has been started. Your profile should be verified within 3 Days.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='d-flex flex-row justify-content-around align-items-center pt-5 pb-5' style={{ width: '100%', textAlign: 'center', padding: '3rem 0' }} >
            <div className='d-flex flex-column justify-content-center'>
              <Button onClick={()=>history("/takepicture")} style={{ width: '200px', height: '50px', background: '#00DFDF', borderRadius: '10px', border: '2px solid transparent', color: 'white' }}>Next</Button>
            </div>
          </div>

        </div>
      </Content>
      <Footer />
    </Layout>
  )
}

export default ProfileVerification3