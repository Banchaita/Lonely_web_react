import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'antd';
import FooterOne from '../../components/footerOne/index'
import correction from '../../images/correction.png'
import shield from '../../images/shield.png'
import licence from '../../images/licence .png'
import wrong from '../../images/wrong.png'
import message from '../../images/message.png'
import bigRight from '../../images/bigRight.png'
import { Layout } from 'antd';
import toast from "../../components/common/toast"
import Header from '../../components/header/index'
import Footer from '../../components/footer/index'
import { getOtheruserdata, blockUserdata } from '../../actions/users'
import { userRightSwipe, setCallResponse, } from "../../actions/auth"
import { img_url } from '../../constants/const';
import 'react-slideshow-image/dist/styles.css'
import { Carousel } from 'react-bootstrap'

const { Content } = Layout;

const Profileone = () => {
    const history = useNavigate();
    const dispatch = useDispatch();

    const [userid, setUsrid] = useState('')

    const other_user = useSelector((state) => state.users.other_user)
    const call_response = useSelector((state) => state.auth.call_response)


    useEffect(() => {
        let other_user_id = localStorage.getItem("other_user_id")
        dispatch(getOtheruserdata({ _id: other_user_id }))
    }, [])


    useEffect(() => {
        if (other_user) {
            setUsrid(other_user?._id)
        }
    }, [other_user])
    console.log('userid========', userid)


    const blockUser = () => {

        let data = {
            block_user_id: userid,
        }
        dispatch(blockUserdata(data))
    }
    useEffect(() => {
        if (call_response) {
            if (call_response.status) {
                toast.success(call_response.message)
                history("/discover")
                dispatch(setCallResponse(null))
            } else {
                toast.error(call_response.message)
            }
        }
    }, [call_response])


    const rightswipeClick = (id) => {
        let data = {
            requested_to: id
        }
        dispatch(userRightSwipe(data))
    }


    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Content>
                <Header />
                <div className='row mr-0 pt-5' style={{ background: '#000000', minHeight: '100vh', color: 'white' }}>
                    <div className='d-flex flex-column justify-content-center align-items-center' >
                        <div className='pl-5 pr-5 profile-detials'>
                            <div className='d-flex justify-content-center align-items-center profile-adj'>
                                <>
                                    <Carousel>
                                        { 
                                          other_user?.gallery?.map(gallery => (

                                            <Carousel.Item>

                                                <img src={`${img_url}${gallery?.media}`} className='gallery-pic-per' />

                                            </Carousel.Item>
                                        ))
                                    }

                                    </Carousel>

                                </>
                            </div>
                            <div className='p-5 center-data flex-column'>
                                <div className='d-flex'>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <p className='mb-0'><span style={{ fontSize: '25px', fontWeight: '700' }}>{other_user?.username} , {other_user?.age}</span></p>
                                    </div>
                                    <div className='d-flex justify-content-center align-items-center ml-3' style={{ borderRadius: '8px', background: '#002D2D', padding: '10px 15px' }}>
                                        <img src="plugins/images/Group 163282x.png" style={{ width: '8px', height: '14px' }} />
                                        <p className='ml-2 mb-0' style={{ fontSize: '10px' }}>15 km</p>
                                    </div>
                                </div>
                                <div>
                                    <img className='profile_verify_icons' src={correction} />
                                    <img className='profile_verify_icons' src={shield} />
                                    <img className='profile_verify_icons' src={licence} />
                                </div>
                                <p style={{ padding: '2rem 0' }}><span style={{ fontWeight: '700', fontSize: '20px' }}>Location : </span><span>{other_user?.location}</span></p>
                                <p style={{ fontWeight: '700', fontSize: '20px' }}>About </p>
                                <p style={{ width: '70%' }}>{other_user?.bio}<br /></p>
                                <p className='mt-5' style={{ fontWeight: '700', fontSize: '20px' }}>Interests </p>
                                <div className='d-flex flex-wrap center-data' style={{ width: "100%" }}>
                                    {
                                        other_user?.my_interests?.map(interests => (
                                            interests.color == "linear-gradient(#f580f0,#00DFDF)" ?
                                                (<Button className='mr-2' style={{ width: '130px', height: '40px', backgroundImage: `linear-gradient(to right, #fa81f0, #aaa8ff, #0fc5ff, #00d6ff, #00dfdf)`, height: '52px', color: 'white', borderRadius: '10px', border: '0px solid transparent' }}>{interests?.interest?.name}</Button>)
                                                :
                                                (<Button className='mr-2' style={{ width: '130px', height: '40px', background: `${interests.color}`, borderRadius: '10px', border: '2px solid transparent', color: 'white', height: '52px' }}>{interests?.interest?.name}</Button>)
                                        ))
                                    }
                                </div>
                                <div className='d-flex flex-wrap center-data'>
                                    <div>
                                        <img className='profile_verify_icons_two' src={wrong} />
                                        <img className='profile_verify_icons_two' src={message} />
                                        <img className='profile_verify_icons_two' src={bigRight} onClick={() => rightswipeClick(other_user?._id)} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='profile-gallery' style={{ marginBottom: '4rem' }}>
                            <p style={{ textAlign: 'center', fontSize: '2em', fontWeight: '600' }}>Gallery</p>
                            <div className='profile-gallery-pic'>
                                <>
                                    {other_user?.gallery?.map(gallery => (
                                        <div className='col-md-4 mb-4'  >
                                            <img src={`${img_url}${gallery?.media}`} className='gallery-pic-per' />
                                        </div>
                                    ))}

                                </>
                            </div>
                            <div className='d-flex flex-wrap justify-content-center align-items-center p-4' style={{ width: '100%' }}>
                                <Button onClick={() => blockUser()} style={{ width: '192px', height: '50px', background: '#FF5959', borderRadius: '10px', border: '2px solid transparent', color: 'white' }}>Block User</Button>
                            </div>
                        </div>
                        <div className='pt-5 pb-5 d-flex flex-column justify-content-center align-items-center' style={{ background: '#161616' }}>
                            <img src="plugins/images/Group 17018.png" style={{ width: '100%', transform: `translateY(100px)` }} />
                        </div>
                    </div>
                </div>
                <FooterOne bgColor={"black"} />
            </Content>
            <Footer />
        </Layout>
    )
}

export default Profileone