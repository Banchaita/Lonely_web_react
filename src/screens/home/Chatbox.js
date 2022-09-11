import { Button, Divider } from 'antd';
import React, { useEffect, useState } from 'react'
import { LeftCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom'
import FooterOne from '../../components/footerOne/index'
import { Layout } from 'antd';
import Header from '../../components/header/index'
import Footer from '../../components/footer/index'

const { Content } = Layout;

const Chatbox = ({ setChatWidthLeft, setChatDisplayLeft, setChatWidthRight, setChatDisplayRight }) => {
    const history = useNavigate();


    // useEffect(() => {
    //     console.log(chatDisplay, chatWidth)

    // })

    let backBtn = () => {
        if (window.innerWidth <= 700) {
            setChatDisplayRight('')
            setChatWidthRight('70% !important')
            setChatDisplayLeft('')
            setChatWidthLeft('260px')
        }
    }

    return (
        <div className='chatbox-adj' style={{ borderRadius: '15px', height: '75%' }}>
            <div style={{ backgroundImage: `linear-gradient(to left, #00dfdf, #00d6ff, #0fc5ff, #aaa8ff, #fa81f0)`, padding: '1rem 2rem', borderRadius: '15px 15px 0px 0px' }}>
                <div className='d-flex' style={{ width: '100%' }}>
                    <LeftCircleOutlined className="back_option_chat" style={{ display: 'none' }} onClick={backBtn} />
                    <img src="plugins/images/antonio-friedemann.png" style={{ width: '40px', height: '40px' }} />
                    <div className='d-flex flex-column justify-content-between align-items-center mt-1 ml-2 mr-2 mb-2' style={{ width: '100%' }}>
                        <div className='d-flex justify-content-between' style={{ width: '100%' }}>
                            <div>
                                <p style={{ color: 'white', marginBottom: '0px', fontSize: '15px', fontWeight: '500' }}>Adriane</p>
                                <p style={{ color: 'white', marginBottom: '0px', fontSize: '8px' }}>Online</p>
                            </div>
                            <div>
                                <img src="plugins/images/Group 171182x.png" style={{ width: '30px', height: '30px' }} />
                                <img src="plugins/images/Group 171192x.png" style={{ width: '30px', height: '30px', marginLeft: '10px' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ height: '100%' }}></div>
            <div className='d-flex p-2 m-3' style={{ background: 'rgb(18,107,107)', borderRadius: '8px' }}>
                <div>
                    <div className='d-flex justify-content-center align-items-center' style={{ borderRadius: '2rem', width: '30px', height: '30px', background: '#5C9090' }}>
                        <img src="plugins/images/android-attach@2x.png" style={{ width: '8px' }} />
                    </div>
                </div>
                <div className='d-flex justify-content-start' style={{ width: '100%' }}>
                    <input style={{ background: 'transparent', fontSize: '10px', border: '2px solid transparent', color: 'white', width: '100%' }} placeholder='Message...' />
                </div>
                <div>
                    <img src="plugins/images/Group 27452x.png" style={{ width: '30px' }} />
                </div>
            </div>
        </div>
    )
}

export default Chatbox