import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Layout } from 'antd';
import Header from '../../components/header/index'
import Footer from '../../components/footer/index'
import FooterOne from '../../components/footerOne/index'
import girl1 from '../../images/girl1.png'
import about from '../../images/about.png'
import whyUs from '../../images/whyUs.png'
import btmImg from '../../images/btmImg.png'
import googlePlay from '../../images/googlePlay.png'
import appStore from '../../images/appStore.png'
import aboutUs from '../../images/aboutUs.png'
import pinterest from '../../images/pinterest.png'
import right from '../../images/right.png'
import right2 from '../../images/right2.png'
import idCard from '../../images/idCard.png'
import cross from '../../images/cross.png'
import refresh from '../../images/refresh.png'
import msg from '../../images/msg.png'
import bigRight from '../../images/bigRight.png'
import jacob from '../../images/jacob1.png'
import logo1 from '../../images/logo2.png'
import bg from '../../images/background2.png'
import bg2 from '../../images/background4.png'
import toast from "../../components/common/toast"
import SimpleImageSlider from "react-simple-image-slider";
import { getHomeData, getUserData, userRightSwipe, userLeftSwipe, setCallResponse, userUndoLeftSwipe } from "../../actions/auth"
import { showLoaderAction } from '../../actions/loader';
import Loader from '../../components/loader';
import { img_url } from '../../constants/const';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { Carousel } from 'react-bootstrap'
import Loadertwo from '../../components/loadertwo';



const { Content } = Layout;

const Home = () => {
    const history = useNavigate();
    let dispatch = useDispatch();

    const [userid, setUserId] = useState("")

    let home_data = useSelector((state) => state.auth.home_data)
    let profile_data = useSelector((state) => state.auth.profile_data)
    const call_response = useSelector((state) => state.auth.call_response)


    // console.log(home_data, " : home data ")


    const [age, setAge] = useState(profile_data?.age)
    const [interested_in, setInterestedIn] = useState("")
    const [connection_type, setConnectiontype] = useState("")
    const [profile_verification, setProfileverification] = useState("")
    const [background_check_verification, setBackgroundcheckverification] = useState("")
    const [filter_lat, setFilterlat] = useState("")
    const [filter_lng, setFilterlng] = useState("")
    const [filter_distance, setFilterdistance] = useState("")
    const [page, setPage] = useState("")

    


    useEffect(() => {
        let token = localStorage.getItem("check_token")
        let data = {
            token: token
        }
        dispatch(getUserData(data))
    }, [])

    useEffect(() => {
        if (profile_data) {
            setAge(profile_data?.age)
        }
    }, [profile_data])

    useEffect(() => {
        if (profile_data) {
            profile_data?.connection_type?.map((key) => {
                setConnectiontype(key.connection?._id)
            })
        }
    }, [profile_data])

    useEffect(() => {
        console.log(home_data.length > 0, " : >>>>>>>>>>>>>>>>>>>>>>>>>>>")
        console.log(home_data, " : +++++++++++++")
        if (home_data.length > 0) {
            dispatch(showLoaderAction(false))
        }
    }, [home_data])


    useEffect(() => {
        let token = localStorage.getItem("check_token")
        let data = {
            interested_in: interested_in,
            connection_type: connection_type,
            min_age: age,
            max_age: "100",
            profile_verification: "0",
            background_check_verification: '0',
            filter_lat: '0',
            filter_lng: '0',
            filter_distance: '0',
            page: '1',
            token: token
        }
        dispatch(getHomeData(data))
        dispatch(showLoaderAction(true))

    }, [age, interested_in, connection_type, profile_verification, background_check_verification, filter_lat, filter_lng, filter_distance, page])



    const rightswipeClick = (id) => {
        setUserId(id)
        let data = {
            requested_to: id
        }
        dispatch(userRightSwipe(data))
        dispatch(showLoaderAction(true))

    }
    const leftswipeClick = (id) => {
        setUserId(id)
        let data = {
            rejected_to: id
        }
        dispatch(userLeftSwipe(data))
        dispatch(showLoaderAction(true))
    }

    const undoleftswipeClick = () => {
        // alert('tttt')
        dispatch(userUndoLeftSwipe())
    }

    const gallery = () => {
        let images = ""
        home_data?.gallery.map(data => {
            images.push({
                url: img_url + data.media
            })
        })
    }


    useEffect(() => {
        if (call_response) {
            // dispatch(showLoaderAction(true))
            let token = localStorage.getItem("check_token")
            let data = {
                interested_in: interested_in,
                connection_type: connection_type,
                min_age: age,
                max_age: "100",
                profile_verification: "0",
                background_check_verification: '0',
                filter_lat: '0',
                filter_lng: '0',
                filter_distance: '0',
                page: '1',
                token: token
            }
            if (call_response.status) {
                // console.log("heyyyyyyyyyyyyyyyyyyyyyyyyyyyy")
                dispatch(setCallResponse(null))
                dispatch(getHomeData(data))
                dispatch(showLoaderAction(false))

            } else {
                toast.error(call_response.message)
            }
        }
    }, [call_response, age, interested_in, connection_type, profile_verification, background_check_verification, filter_lat, filter_lng, filter_distance, page])






    return (
        <Layout style={{ minHeight: '100vh' }}>

            <Content>
                <Header />
                <div className='container-fluid' style={{ background: '#000000', padding: '0px 84px' }}>
                    <div className='row p-5' style={{ background: '#000000' }}>
                        <div className='col-md-7 '>
                            <div className='row bg-white swipe_user' style={{ borderRadius: '20px' }}>
                                <Loadertwo/>
                                <div className='col-md-12 px-4 mt-4'>
                                    <>
                                       <Loadertwo/>
                                        <div className="slide-container">
                                            <Slide>
                                                {home_data.length > 0 ?
                                                    home_data?.map((home_data) => (
                                                        <div className='row'>
                                                            <Loader />
                                                            <div className='col-md-6'>
                                                                <div>
                                                                    <SimpleImageSlider
                                                                        width={460}
                                                                        height={504}
                                                                        images={home_data?.gallery}
                                                                        showBullets={true}
                                                                        showNavs={true}
                                                                        autoPlay={true}
                                                                        autoPlayDelay={3.5}
                                                                    />
                                                                </div>

                                                            </div>
                                                            <div className="col-md-6 detaile-aera">
                                                                <div>
                                                                    <h4 onClick={() => history('/profileone')} style={{ marginTop: '20px', fontWeight: 'bold' }}>{home_data.username}<img src={pinterest} style={{ width: '20px' }} /></h4>
                                                                    <img src={right} style={{ width: '30px', height: '30px' }} />
                                                                    <img src={right2} style={{ width: '30px', height: '30px', marginLeft: '10px' }} />
                                                                    <img src={idCard} style={{ width: '30px', height: '30px', marginLeft: '10px' }} />
                                                                </div>
                                                                <>
                                                                    <div className="row mt-4">
                                                                        {home_data?.my_hobbies?.map(hobbies => (
                                                                            <div className="col-md-5 mb-4 hobbies-area">
                                                                                <button className='profile-btn-four'>{hobbies.name}</button>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                </>
                                                                <div className='mt-3'>
                                                                    <p style={{ fontSize: '16px', paddingRight: '10px' }}>{home_data.bio}</p>
                                                                </div>

                                                            </div>
                                                            <div className='col-md-12 text-center p-1'>
                                                                <img src={cross} style={{ width: '95px', marginLeft: '10px' }} onClick={() => leftswipeClick(home_data._id)} />
                                                                <img src={refresh} style={{ width: '95px', marginLeft: '10px' }} onClick={() => undoleftswipeClick()} />
                                                                <img src={msg} style={{ width: '95px', marginLeft: '10px' }} />
                                                                <img src={bigRight} style={{ width: '95px', marginLeft: '10px' }} onClick={() => rightswipeClick(home_data._id)} />
                                                            </div>
                                                        </div>
                                                    ))
                                                    :

                                                    <div className='whiteSmallBox row m-0 mb-3 notfound'>
                                                        <Loader />
                                                        <div className='col-12 text-center mt-2' style={{ padding: '0' }}>
                                                            <h4 style={{ marginTop: '20px', fontWeight: 'bold' }}>No More Swipe</h4>
                                                        </div>
                                                    </div>}
                                            </Slide>
                                        </div>

                                    </>
                                </div>
                            </div>
                        </div>


                        <div className='col-md-1'></div>
                        <div className="col-md-4">
                            <div className='whiteSmallBox row m-0'>
                                <div className='col-3 text-left' style={{ padding: '0' }}>
                                    <img src={`${img_url}${profile_data?.profile_pic}`} className="p-3" style={{ width: '100%', borderRadius: '5rem' }} />
                                </div>
                                <div className='col-8 text-left mt-2' style={{ padding: '0' }}>
                                    <h4 style={{ marginTop: '20px', fontWeight: 'bold' }}>{profile_data?.username} , {profile_data?.age} <img src={pinterest} style={{ width: '20px' }} /></h4>
                                    <img src={right} style={{ width: '30px', height: '30px' }} />
                                    <img src={right2} style={{ width: '30px', height: '30px', marginLeft: '10px' }} />
                                    <img src={idCard} style={{ width: '30px', height: '30px', marginLeft: '10px' }} />
                                </div>
                            </div>
                            <div className=' mt-4'>
                                <button onClick={() => history('/profile')} className='btn btn-block d-flex align-items-center' style={{ height: 'auto', margin: '0', background: '#000', borderRadius: '13px', color: 'white', borderColor: '#f580f0 #f580f0 #00DFDF rgba(0,223,222)' }}>
                                    <div className='col-md-3 text-left p-2' style={{ padding: '0' }}>
                                        <img src={logo1} style={{ width: '85%' }} />
                                    </div>
                                    <div className='col-md-7 text-left justify-content-center mt-2' style={{ padding: '0' }}>
                                        <h4 style={{ fontWeight: 'bold', color: 'wheat', fontSize: '100%' }}>Get Permium Access</h4>
                                    </div>

                                </button>
                            </div>
                            <div className='whiteMediumBox text-center mt-4'>
                                {/* <img src={girl1} style={{ width: '50%', height: '315px', marginTop: '15px', marginBottom: '15px' }} /> */}
                                <>
                                    <Carousel>
                                        {
                                            profile_data?.gallery?.map(gallery => (

                                                <Carousel.Item>

                                                    <img src={`${img_url}${gallery?.media}`} className='gallery-pic-per' />

                                                </Carousel.Item>
                                            ))


                                        }

                                    </Carousel>

                                </>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container-fluid' style={{ background: '#000000' }}>
                    <div className='row' style={{ background: '#0D0D0D' }}>
                        <div className='col-md-4'>
                            <div className='blackBox text-center'>
                                <h5 style={{ color: 'white', padding: '60px', borderRight: '3px solid black' }}>#1 Trusted Dating App</h5>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='blackBox text-center'>
                                <h5 style={{ color: 'white', padding: '60px', borderRight: '3px solid black' }}>#1 Trusted Dating App</h5>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='blackBox text-center'>
                                <h5 style={{ color: 'white', padding: '60px' }}>#1 Trusted Dating App</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container-fluid' style={{ background: '#000000' }}>
                    <div className='row' style={{ background: '#000000' }}>z
                        <div className='col-md-5' style={{ textAlign: 'end' }}>
                            <img src={about} style={{ width: '60%' }} className='m-5' />
                        </div>
                        <div className='col-md-5 text-left justify-content-center' style={{ marginTop: '140px' }} >
                            <div className=''>
                                <h2 style={{ color: 'white' }}>About <span className='aboutus'>Us</span></h2>
                                <p style={{ color: '#FFFFFF' }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, </p>
                                <p style={{ color: '#FFFFFF' }}>sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                                <div className='mt-5'>
                                    <button onClick={() => history('/aboutus')} className="green_btn">Know More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container-fluid' style={{ backgroundImage: `url(${bg})`, backgroundSize: '100% 100%', marginTop: '20px' }}>
                    <div className='row'>

                        <div className='col-md-5 text-left justify-content-center m-auto' >
                            <div className='ml-5' style={{ marginTop: '100px', marginBottom: '125px' }}>
                                <h2 style={{ color: 'white' }}>Why <span className='whyus'>Us</span></h2>
                                <p style={{ color: '#FFFFFF' }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, </p>
                                <p style={{ color: '#FFFFFF' }}>sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                                <div className='mt-5 mb-5'>
                                    <button onClick={() => history('/whyus')} className="green_btn">Know More</button>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-5'>
                            <div className=' text-center' style={{ marginTop: '80px', marginBottom: '125px' }}>
                                <img src={whyUs} style={{ width: '40%' }} className='m-5' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container-fluid' style={{ background: '#000000' }}>
                    <div className='row' style={{ background: '#000000' }}>z
                        <div className='col-md-12' style={{ textAlign: 'center' }}>
                            <h2 style={{ color: 'white', fontWeight: 'bold' }}>Download the App <span className='appnow'>Now</span></h2>
                        </div>
                        <div className='col-md-8 mx-auto'>
                            <img src={btmImg} style={{ width: '100%' }} />
                        </div>
                        <div className='col-md-12 text-center mt-4'>
                            <img src={googlePlay} style={{ width: '350px', padding: '20px' }} />
                            <img src={appStore} style={{ width: '350px', padding: '20px' }} />
                        </div>
                    </div>
                </div>
                <div className='container-fluid' style={{ backgroundImage: `url(${bg2})`, backgroundSize: '100% 100%', marginTop: '20px' }}>
                    <div className='row text-center'>
                        <div className='col-md-12'>
                            <h2 style={{ color: 'white', marginTop: '160px' }}>About <span className='aboutus'>Us</span></h2>
                            <p style={{ color: '#FFFFFF', textAlign: 'center', marginBottom: '35px' }}>We’re incredibly happy and proud to have sparked thousands of encounters and beautiful <br />love stories. So please share your story with us! We need our a daily love fix. 😉</p>
                        </div>
                        <div className='col-md-12'>
                            <img src={aboutUs} style={{ width: '100%', height: '72%' }} />
                            <button onClick={() => history('/profileone')} className="pink_btn" style={{ marginTop: '50px', marginBottom: '35px' }}>Learn More</button>
                        </div>
                        <div className='col-md-12'>

                        </div>
                    </div>
                </div>
                <div className='container-fluid' style={{ background: '#000000' }}>
                    <div className='row text-center'>
                        <div className='col-md-12'>
                            <h2 className='mb-4' style={{ color: 'white', marginTop: '70px' }}>We're here for <span className='foryou'>You!</span></h2>
                            <p style={{ color: '#FFFFFF', textAlign: 'center', marginBottom: '60px' }}>When it comes to love, everyone has questions. That’s why our Customer Care team is here to <br />answer any questions you may have about Lonely AF. The FAQ section is extensive and a great option <br />for autonomous troubleshooting too. So let us help, because this journey is worth it.</p>
                        </div>
                        <div className='col-md-12'>
                            <button onClick={() => history('/contactus')} className="green_btn" style={{ marginBottom: '60px' }}>Contact Us</button>
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

export default Home