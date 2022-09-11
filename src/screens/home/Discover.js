import React, { useEffect, useState } from 'react'
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import FooterOne from '../../components/footerOne/index'
import { Layout } from 'antd';
import { Form, FormControl } from 'react-bootstrap';
import toast from "../../components/common/toast"
import Header from '../../components/header/index'
import Footer from '../../components/footer/index'
import { getAllDiscover, searchUsername } from '../../actions/users'
import { userRightSwipe, setCallResponse } from "../../actions/auth"
import { showLoaderAction } from '../../actions/loader';
import Loader from '../../components/loader';
import Loadertwo from '../../components/loadertwo';



const { Content } = Layout;

const Discover = () => {
    const history = useNavigate();
    const dispatch = useDispatch();

    const all_discover = useSelector((state) => state.users.all_discover)
    const call_response = useSelector((state) => state.auth.call_response)

    // console.log('all_discover========', all_discover)
    // console.log('all_discover_by_name========', all_discover)


    let [loader, setLoader] = useState(true)
    const [otheruseer_id, setOtheruserid] = useState("")


    useEffect(() => {
        let token = localStorage.getItem("check_token")
        dispatch(getAllDiscover({
            interested_in: "",
            connection_type: "",
            min_age: "",
            max_age: "",
            profile_verification: "",
            background_check_verification: "",
            driving_license_verification: "",
            filter_lat: "",
            filter_lng: "",
            filter_distance: "",
            page: 1,
            token: token
        }))
        setLoader(true)
        // dispatch(showLoaderAction(true))
    }, [])

    useEffect(() => {
        if (all_discover.length > 0) {
            dispatch(showLoaderAction(false))
        }
    }, [loader])

    const handleClick = (id) => {
        // alert(id)
        setOtheruserid(id)
        let other_user_id = localStorage.setItem("other_user_id", id)
        history('/profileone')
    }

    const rightswipeClick = (id) => {
        // alert(id)
        let data = {
            requested_to: id
        }
        dispatch(userRightSwipe(data))
        dispatch(showLoaderAction(true))

    }

    useEffect(() => {
        if (call_response) {
            dispatch(showLoaderAction(true))
            if (call_response.status) {
                // console.log("heyyyyyyyyyyyyyyyyyyyyyyyyyyyy")
                dispatch(setCallResponse(null))
                let token = localStorage.getItem("check_token")
                dispatch(getAllDiscover({
                    interested_in: "",
                    connection_type: "",
                    min_age: "",
                    max_age: "",
                    profile_verification: "",
                    background_check_verification: "",
                    driving_license_verification: "",
                    filter_lat: "",
                    filter_lng: "",
                    filter_distance: "",
                    page: 1,
                    token: token
                }))
                dispatch(showLoaderAction(false))
            } else {
                toast.error(call_response.message)
            }
        }
    }, [call_response])


    useEffect(() => {
        // console.log(all_discover.length > 0 , " : >>>>>>>>>>>>>>>>>>>>>>>>>>>")
        if (all_discover.length < 1) {
            dispatch(showLoaderAction(true))
            // dispatch(showLoaderAction(false))
        }
        else if (all_discover.length > 0) {

            dispatch(showLoaderAction(false))
        }
    }, [all_discover])


    const nameSearch = (event) => {
        if (event.key === 'Enter') {
            dispatch(searchUsername({ username: event?.target?.value }))
        }
    }







    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Content>
                <Header />
                <Loader />

                <div className='' style={{ background: '#000000', color: 'white' }}>
                    <div style={{ background: 'black', padding: '3rem 0' }}>
                        <p style={{ textAlign: 'center', fontSize: '2rem', fontWeight: '700' }}>Discover</p>
                    </div>
                    <div className='container' style={{ width: '100%', textAlign: 'center', padding: '3rem 0' }} >
                        <div className="row">
                            <div className="col-md-6 mx-auto fromsearcharea">
                                <Form className="d-flex discover_searcharea">
                                    <FormControl
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        onKeyPress={nameSearch}
                                        aria-label="Search"
                                        style={{
                                            background: 'black',
                                            border: '2px solid white',
                                            borderRadius: '12px',
                                            color: 'white',
                                            marginLeft: '11rem',
                                            width: '250px',
                                        }}
                                    />
                                    <img src='plugins/images/Group 17268 (1).png' style={{ width: '40px', height: '40px', transform: `translateX(-20px)` }} />
                                </Form>
                            </div>
                        </div>
                        <div className='d-flex flex-wrap justify-content-start align-items-center'>
                            <Loader />
                            {
                                all_discover?.map(data => (
                                    <div className='d-flex flex-column justify-content-center align-items-start p-4' style={{ width: '250px' }}>
                                        <img onClick={() => handleClick(data._id)} src={data.profile_pic ? `http://54.205.110.13:5068/files/${data.profile_pic}` : `plugins/images/pexels-andrea-piacquadio-37718352x.png`} style={{ width: 200, height: 200, objectFit: 'contain', cursor: 'pointer' }} />
                                        <p style={{ fontSize: '20px', fontWeight: '500', marginBottom: '0', marginTop: '1rem', marginLeft: '2rem' }}>{data.username}, {data.age}</p>
                                        <p style={{ marginBottom: '7px', marginLeft: '2rem' }}>23 miles away</p>
                                        <div className='d-flex' >
                                            <img style={{
                                                width: '40px',
                                                height: '40px',
                                                cursor: 'pointer',
                                                marginLeft: '2rem'
                                            }}
                                                src="plugins/images/checkmark-filled-1.png" onClick={() => rightswipeClick(data._id)} />
                                            <div style={{
                                                background: '#FFC550',
                                                width: '40px',
                                                height: '40px',
                                                borderRadius: '2rem',
                                                display: 'flex',
                                                flexDirection: 'row',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                marginLeft: '2rem'

                                            }}>
                                                <img src="plugins/images/chat-bubble-solid@2x.png" style={{ width: '2rem', transform: `translateY(5px)` }} />
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <img src="plugins/images/Group 17018.png" style={{ width: '100%', transform: `translateY(45px)` }} />
                </div>
                <FooterOne bgColor={"#161616"} />
            </Content>
            <Footer />
        </Layout>
    )
}

export default Discover