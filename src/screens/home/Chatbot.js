import { Button, Divider } from 'antd';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FooterOne from '../../components/footerOne/index'
import Chatbox from './Chatbox'
import { Layout } from 'antd';
import Header from '../../components/header/index'
import Footer from '../../components/footer/index'

const { Content } = Layout;

const Chatbot = () => {
    const history = useNavigate();

    const [colorone, setColorOne] = useState(`linear-gradient(to left, #00dfdf, #00d6ff, #0fc5ff, #aaa8ff, #fa81f0)`);
    const [colortwo, setColorTwo] = useState('white');
    const [textcolorone, setTextColorOne] = useState('white');
    const [textcolortwo, setTextColorTwo] = useState('black');
    const [zindexone, setZindexOne] = useState(1);
    const [zindextwo, setZindexTwo] = useState(0);
    const [chatWidthLeft, setChatWidthLeft] = useState('260px');
    const [chatDisplayLeft, setChatDisplayLeft] = useState('');
    const [chatWidthRight, setChatWidthRight] = useState('70%');
    const [chatDisplayRight, setChatDisplayRight] = useState('');

    var OnClickButtons = (key) => {
        if (key == "one") {
            setColorOne(`linear-gradient(to left, #00dfdf, #00d6ff, #0fc5ff, #aaa8ff, #fa81f0)`)
            setColorTwo('white')
            setZindexOne(1)
            setZindexTwo(0)
            setTextColorOne('white')
            setTextColorTwo('black')
        } else if (key == "two") {
            setColorTwo(`linear-gradient(to left, #00dfdf, #00d6ff, #0fc5ff, #aaa8ff, #fa81f0)`)
            setColorOne('white')
            setZindexOne(0)
            setZindexTwo(1)
            setTextColorOne('black')
            setTextColorTwo('white')
        }
    }

    var chatBox = () => {
        if (window.innerWidth <= 700) {
            setChatWidthLeft('0px')
            setChatDisplayLeft('none')
            setChatWidthRight('100%')
            setChatDisplayRight('flex')
        }
    }

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Content>
                <Header />
                <div className='d-flex flex-column justify-content-center align-items-center' style={{ background: '#000000', color: 'white' }}>
                    <div className='d-flex justify-content-around' style={{ background: 'white', width: '80%', height: '80%', padding: '2rem', borderRadius: '15px', margin: '7rem 0' }}>
                        <div className='chat_left' style={{ display: chatDisplayLeft, width: chatWidthLeft }}>
                            <div className='d-flex'>
                                <img src="plugins/images/pexels-spencer-selover-775358@2x.png" style={{ width: '40px', height: '40px' }} />
                                <div className='ml-3'>
                                    <p style={{ color: 'black', marginBottom: '0px', fontSize: '10px', fontWeight: '700' }}>Ash Peterson , 26 (Model)</p>
                                    <p style={{ color: 'black', marginBottom: '0px', fontSize: '8px' }}>12m ago</p>
                                    <p style={{ color: 'green', marginBottom: '0px', fontSize: '7px' }}>Dropper</p>
                                </div>
                            </div>
                            <div className='mt-4 mb-4'>
                                <div className='d-flex'>
                                    <button className='chat-btns' onClick={() => OnClickButtons("one")} style={{ backgroundImage: colorone, zIndex: zindexone, color: textcolorone, width: '50%',height:'35px', outline:'none' }}>Chats</button>
                                    <button className='chat-btns' onClick={() => OnClickButtons("two")} style={{ transform: `translateX(-24px)`, backgroundImage: colortwo, zIndex: zindextwo, color: textcolortwo, width: '50%', outline:'none' }}>LAF Admin</button>
                                </div>
                            </div>
                            <div className='chatscroll' style={{ height: '500px' }}>
                                <div className='mt-3'>
                                    <div className='d-flex' onClick={chatBox}>
                                        <img src="plugins/images/antonio-friedemann.png" style={{ width: '60px', height: '60px' }} />
                                        <div className='d-flex flex-column justify-content-center ml-3 chat_person'>
                                            <div className='d-flex justify-content-between'>
                                                <p style={{ color: 'black', marginBottom: '0px', fontSize: '15px', fontWeight: '500' }}>Adriane</p>
                                                <p style={{ color: 'black', marginBottom: '0px', fontSize: '8px', fontStyle: 'italic' }}>55min</p>
                                            </div>
                                            <p style={{ color: 'black', marginBottom: '0px', fontSize: '8px' }}>Yep, I'm new in town and I wanted to ...</p>
                                        </div>
                                    </div>
                                    <Divider />
                                    <div className='d-flex'>
                                        <img src="plugins/images/antonio-friedemann.png" style={{ width: '60px', height: '60px' }} />
                                        <div className='d-flex flex-column justify-content-center ml-3 chat_person'>
                                            <div className='d-flex justify-content-between'>
                                                <p style={{ color: 'black', marginBottom: '0px', fontSize: '15px', fontWeight: '500' }}>Adriane</p>
                                                <p style={{ color: 'black', marginBottom: '0px', fontSize: '8px', fontStyle: 'italic' }}>55min</p>
                                            </div>
                                            <p style={{ color: 'black', marginBottom: '0px', fontSize: '8px' }}>Yep, I'm new in town and I wanted to ...</p>
                                        </div>
                                    </div>
                                    <Divider />
                                    <div className='d-flex'>
                                        <img src="plugins/images/antonio-friedemann.png" style={{ width: '60px', height: '60px' }} />
                                        <div className='d-flex flex-column justify-content-center ml-3 chat_person'>
                                            <div className='d-flex justify-content-between'>
                                                <p style={{ color: 'black', marginBottom: '0px', fontSize: '15px', fontWeight: '500' }}>Adriane</p>
                                                <p style={{ color: 'black', marginBottom: '0px', fontSize: '8px', fontStyle: 'italic' }}>55min</p>
                                            </div>
                                            <p style={{ color: 'black', marginBottom: '0px', fontSize: '8px' }}>Yep, I'm new in town and I wanted to ...</p>
                                        </div>
                                    </div>
                                    <Divider />
                                    <div className='d-flex'>
                                        <img src="plugins/images/antonio-friedemann.png" style={{ width: '60px', height: '60px' }} />
                                        <div className='d-flex flex-column justify-content-center ml-3 chat_person'>
                                            <div className='d-flex justify-content-between'>
                                                <p style={{ color: 'black', marginBottom: '0px', fontSize: '15px', fontWeight: '500' }}>Adriane</p>
                                                <p style={{ color: 'black', marginBottom: '0px', fontSize: '8px', fontStyle: 'italic' }}>55min</p>
                                            </div>
                                            <p style={{ color: 'black', marginBottom: '0px', fontSize: '8px' }}>Yep, I'm new in town and I wanted to ...</p>
                                        </div>
                                    </div>
                                    <Divider />
                                    <div className='d-flex'>
                                        <img src="plugins/images/antonio-friedemann.png" style={{ width: '60px', height: '60px' }} />
                                        <div className='d-flex flex-column justify-content-center ml-3 chat_person'>
                                            <div className='d-flex justify-content-between'>
                                                <p style={{ color: 'black', marginBottom: '0px', fontSize: '15px', fontWeight: '500' }}>Adriane</p>
                                                <p style={{ color: 'black', marginBottom: '0px', fontSize: '8px', fontStyle: 'italic' }}>55min</p>
                                            </div>
                                            <p style={{ color: 'black', marginBottom: '0px', fontSize: '8px' }}>Yep, I'm new in town and I wanted to ...</p>
                                        </div>
                                    </div>
                                    <Divider />
                                    <div className='d-flex'>
                                        <img src="plugins/images/antonio-friedemann.png" style={{ width: '60px', height: '60px' }} />
                                        <div className='d-flex flex-column justify-content-center ml-3 chat_person'>
                                            <div className='d-flex justify-content-between'>
                                                <p style={{ color: 'black', marginBottom: '0px', fontSize: '15px', fontWeight: '500' }}>Adriane</p>
                                                <p style={{ color: 'black', marginBottom: '0px', fontSize: '8px', fontStyle: 'italic' }}>55min</p>
                                            </div>
                                            <p style={{ color: 'black', marginBottom: '0px', fontSize: '8px' }}>Yep, I'm new in town and I wanted to ...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='chat_right' style={{ display: chatDisplayRight, width: chatWidthRight, background: 'black', borderRadius: '15px' }}>
                            <Chatbox setChatDisplayRight={setChatDisplayRight} setChatWidthRight={setChatWidthRight} setChatWidthLeft={setChatWidthLeft} setChatDisplayLeft={setChatDisplayLeft} />
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

export default Chatbot