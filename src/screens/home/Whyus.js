import React from 'react'
import { useNavigate } from 'react-router-dom'
import FooterOne from '../../components/footerOne/index'
import { Layout } from 'antd';
import Header from '../../components/header/index'
import Footer from '../../components/footer/index'

const { Content } = Layout;


const Whyus = () => {
    const history = useNavigate();

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Content>
                <Header />
                <div className='' style={{ background: '#000000', color: 'white' }}>
                    <div style={{ background: '#0D0D0D', padding: '3rem 0' }}>
                        <p style={{ textAlign: 'center', fontSize: '2rem', fontWeight: '700' }}>Why <span className='whyus'>Us?</span></p>
                    </div>
                    <div className='d-flex flex-column justify-content-center align-items-center' style={{ textAlign: 'center', padding: '3rem 0' }} >
                        <img src="plugins/images/Mask Group 13@2x.png" style={{ width: '20%', padding: '2rem 0' }} />
                        <p style={{ width: '60%' }}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam voluptua.
                            At vero eos et accusam et justo duo dolores et ea rebum. Stet
                            clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                            dolor sit amet.
                        </p>
                        <p style={{ width: '60%' }}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                            dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                            accusam et justo duo dolores et ea rebum. Stet clita kasd
                            gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                            amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                            sed diam nonumy eirmod tempor invidunt ut labore et dolore
                            magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                            et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                            no sea takimata sanctus est Lorem ipsum dolor sit amet.
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

export default Whyus