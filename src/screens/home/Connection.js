import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import FooterOne from '../../components/footerOne/index'
import { Form, FormControl } from 'react-bootstrap';
import messageIcon from '../../images/messageIcon.png'
import deleteIcon from '../../images/deleteIcon.png'
import bigRight from '../../images/bigRight.png'

import { Alert, Layout } from 'antd';
import toast from "../../components/common/toast"
import profile from '../../images/profileImage.png'
import Header from '../../components/header/index'
import Footer from '../../components/footer/index'
import { getUserreqestdata, getreceivedrequestdata, searchUsername, deleleUserSendRequest, getMyConntectiondata, deleleUserConnection, setOtherUserId, searchUserConectionname,searchUserrquestname } from '../../actions/users'
import { setCallResponse, userRightSwipe } from "../../actions/auth"
import { img_url } from '../../constants/const';
// import { Tabs } from 'antd';
import Tabs from "react-simply-tabs";
import { Button, Modal } from 'antd';



const { TabPane } = Tabs;
const { Content } = Layout;

const Connection = () => {
    const history = useNavigate();
    const dispatch = useDispatch();

   

    const [activeTabIndex, setTabIndex] = useState(0);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [query, setQuery] = useState("");

    
    
    const received_data = useSelector((state) => state.users.received_data)
    const request_data = useSelector((state) => state.users.request_data)
    const connection_list = useSelector((state) => state.users.connection_list)
    const call_response = useSelector((state) => state.auth.call_response)

    // console.log('query==',request_data.filter(user=>user.username.includes('xia')))
    
    let current_user_id = localStorage.getItem("current_user_id")
    
    // console.log('request_data==========', request_data)
    // console.log('request_data_by_secach==========', request_data)

    useEffect(() => {
        let token = localStorage.getItem("check_token")
        let data = {
            token: token
        }
        dispatch(getUserreqestdata(data))
        dispatch(getreceivedrequestdata(data))
        dispatch(getMyConntectiondata(data))
    }, [])


    const rightswipeClick = (id) => {
        let data = {
            requested_to: id
        }
        dispatch(userRightSwipe(data))

    }
    const subscription = () => {
        history("/subscriptions")
    }
    const userprofile = (id) => {
        let other_user_id = localStorage.setItem("other_user_id", id)
        console.log(other_user_id)
        history('/profileone')
    }



    useEffect(() => {
        if (call_response) {
            if (call_response.status) {
                toast.success(call_response.message)
                dispatch(setCallResponse(null))
                let token = localStorage.getItem("check_token")
                let data = {
                    token: token
                }
                dispatch(getUserreqestdata(data))
                dispatch(getreceivedrequestdata(data))
                dispatch(getMyConntectiondata(data))

            } else {
                toast.error(call_response.message)
            }
        }
    }, [call_response])


    const showdeleteModal = (id) => {
        setIsModalVisible(true);
        let sent_user_id = localStorage.setItem("sent_user_id", id)
        dispatch(setOtherUserId(id))
    };

    const handleOk = () => {
        let sent_user_id = localStorage.getItem("sent_user_id")
        let data = {
            connection_user_id: sent_user_id
        }
        dispatch(deleleUserSendRequest(data))
        dispatch(deleleUserConnection(data))
        setIsModalVisible(false);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };



    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Content>
                <Header />
                <Modal
                    title="Basic Modal"
                    visible={isModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                >
                    <p>Are you sure want to delete this Sent Request/Connection?</p>
                </Modal>

                <div className='row m-0' style={{ background: '#161616' }}>
                    <div className='col-md-12 my-5 d-flex flex-column justify-content-center align-items-center' >
                        <div className='mt-5 d-flex flex-column justify-content-center align-items-center'>
                            <h4 className='text mb-3'>Connection</h4>
                            <p className='interest_txt' style={{ marginBottom: '80px' }}>See Who Wants To Connect</p>
                        </div>
                        <div className='container'>
                            <div className='row'>
                                <div className="col-md-12 ml-5">
                                    <Tabs
                                        activeTabIndex={activeTabIndex}
                                        activeTabProps={{
                                            className: "active",
                                            style: {
                                                color: "white",
                                                textAlign: "center"
                                            }
                                        }}
                                        activeControlProps={{
                                            className: "active",
                                            style: {
                                                background: 'linear-gradient(to right, #4bd6e1 , #ea87ef)',
                                                borderColor: 'linear-gradient(to right, #4bd6e1 , #ea87ef)',
                                                border: 'none', outline: 'none'
                                            }
                                        }}
                                        onRequestChange={setTabIndex}
                                        controls={[

                                            <button type="button" title="Show 1" className="tabControlClassName"
                                                style={{
                                                    border: '1px solid',
                                                    borderColor: '#f580f0 #f580f0 #00DFDF rgba(0,223,222)',
                                                    color: '#fff',
                                                    height: 'auto',
                                                    padding: '12px 4rem',
                                                    background: 'transparent',
                                                    borderRadius: '10px',
                                                    width: '300px',
                                                    textAlign: 'center'
                                                }}
                                            >
                                                Received
                                            </button>,
                                            <button type="button" title="Show 2" className="tabControlClassName"
                                                style={{
                                                    border: '1px solid',
                                                    borderColor: '#f580f0 #f580f0 #00DFDF rgba(0,223,222)',
                                                    color: '#fff',
                                                    height: 'auto',
                                                    padding: '12px 4rem',
                                                    background: 'transparent',
                                                    borderRadius: '10px',
                                                    width: '300px',
                                                    textAlign: 'center'
                                                }}
                                            >
                                                Sent
                                            </button>,
                                            <button type="button" title="Show 3" className="tabControlClassName"
                                                style={{
                                                    border: '1px solid',
                                                    borderColor: '#f580f0 #f580f0 #00DFDF rgba(0,223,222)',
                                                    color: '#fff',
                                                    height: 'auto',
                                                    padding: '12px 4rem',
                                                    background: 'transparent',
                                                    borderRadius: '10px',
                                                    width: '300px',
                                                    textAlign: 'center'
                                                }}
                                            >
                                                Connections
                                            </button>

                                        ]}
                                    >
                                        <div className="tabClassName">
                                            <Form className="d-flex searcharea">
                                                <FormControl
                                                    type="search"
                                                    placeholder="Search"
                                                    className="me-2"
                                                    onChange={(e)=>setQuery(e.target.value.toLowerCase())}
                                                    aria-label="Search"
                                                    style={{
                                                        background: 'black',
                                                        border: '2px solid white',
                                                        borderRadius: '12px',
                                                        color: 'white',
                                                        marginLeft: '1rem',
                                                        width: '250px',
                                                    }}
                                                />
                                                <img src='plugins/images/Group 17268 (1).png' style={{ width: '40px', height: '40px', transform: `translateX(-20px)` }} />
                                            </Form>

                                            <div className='row'>
                                                <>
                                                    {received_data.length > 0 ?
                                                            received_data.filter((user)=> user?.requested_by?.username?.toLowerCase().includes(query)).map(requested => (
                                                                <div className='col-md-5 mx-auto my-3' style={{ borderRadius: '15px', background: '#000000' }}   >
                                                                    <div className='row'>
                                                                        <div className='col-md-3 p-4 text-center' onClick={() => subscription()}>
                                                                            <img src={`${img_url}${requested?.requested_by?.profile_pic}`} style={{ width: '100px', height: '100px', borderRadius: '5rem', cursor: 'poniter' }}></img>
                                                                        </div>
                                                                        <div className='col-md-3 text-center m-auto'>
                                                                            <h5 onClick={() => userprofile(requested?.requested_by?._id)} style={{ color: 'white', cursor: 'pointer' }}>{requested?.requested_by?.username} </h5>
                                                                        </div>
                                                                        <div className='col-md-5 text-center m-auto pb-3 px-3'>
                                                                            <img src={messageIcon} style={{ width: '40px' }}></img>
                                                                            <img onClick={() => showdeleteModal(requested?.requested_by?._id)} src={deleteIcon} style={{ width: '40px', marginLeft: '10px', cursor: 'pointer' }}></img>
                                                                            <img src={bigRight} style={{ width: '50px', cursor: 'pointer' }} onClick={() => rightswipeClick(requested?.requested_by?._id)} />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))
                                                        :
                                                        <div style={{ padding: '3rem 0', marginLeft: "25rem" }}>
                                                            <p className='my-2' style={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: '500' }}>No received request found </p>
                                                        </div>
                                                    }
                                                </>
                                            </div>
                                        </div>

                                        <div className="tabClassName">
                                            <Form className="d-flex searcharea">
                                                <FormControl
                                                    type="search"
                                                    placeholder="Search"
                                                    className="me-2"
                                                    onChange={(e)=>setQuery(e.target.value.toLowerCase())}
                                                    aria-label="Search"
                                                    style={{
                                                        background: 'black',
                                                        border: '2px solid white',
                                                        borderRadius: '12px',
                                                        color: 'white',
                                                        marginLeft: '1rem',
                                                        width: '250px',
                                                    }}
                                                />
                                                <img src='plugins/images/Group 17268 (1).png' style={{ width: '40px', height: '40px', transform: `translateX(-20px)` }} />
                                            </Form>
                                            <div className='row'>
                                                <>

                                                    {request_data.length > 0 ?
                                                        request_data.filter((user)=> user?.requested_to?.username?.toLowerCase().includes(query)) ?.map(requested => (
                                                            <div className='col-md-5 mx-auto my-3' style={{ borderRadius: '15px', background: '#000000' }}>
                                                                <div className='row'>
                                                                    <div className='col-md-3 p-4 text-center'>
                                                                        <>
                                                                            {
                                                                                requested?.requested_to?.profile_pic == "" ?
                                                                                    <img src={profile} className='profile-pic' />
                                                                                    :
                                                                                    <img src={`${img_url}${requested?.requested_to?.profile_pic}`} style={{ width: '100px', height: '100px', borderRadius: '5rem' }}></img>
                                                                            }
                                                                        </>

                                                                    </div>
                                                                    <div className='col-md-3 text-center m-auto'>
                                                                        <h5 onClick={() => userprofile(requested?.requested_to?._id)} style={{ color: 'white', cursor: 'pointer' }}>{requested?.requested_to?.username} </h5>
                                                                    </div>
                                                                    <div className='col-md-5 text-center m-auto pb-3 px-3'>
                                                                        <img src={messageIcon} style={{ width: '50px' }}></img>
                                                                        <img onClick={() => showdeleteModal(requested?.requested_to?._id)} src={deleteIcon} style={{ width: '50px', marginLeft: '25px', cursor: 'pointer' }}></img>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))
                                                        :
                                                        <div style={{ padding: '3rem 0', marginLeft: '25rem' }}>
                                                            <p className='my-2' style={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: '500' }}>No sent request found</p>
                                                        </div>
                                                    }
                                                </>
                                            </div>
                                        </div>

                                        <div className="tabClassName">
                                            <Form className="d-flex searcharea">
                                                <FormControl
                                                    type="search"
                                                    placeholder="Search"
                                                    className="me-2"
                                                    onChange={(e)=>setQuery(e.target.value.toLowerCase())}
                                                    aria-label="Search"
                                                    style={{
                                                        background: 'black',
                                                        border: '2px solid white',
                                                        borderRadius: '12px',
                                                        color: 'white',
                                                        marginLeft: '1rem',
                                                        width: '250px',
                                                    }}
                                                />
                                                <img src='plugins/images/Group 17268 (1).png' style={{ width: '40px', height: '40px', transform: `translateX(-20px)` }} />
                                            </Form>
                                            <div className='row'>
                                                <>
                                                    {
                                                        connection_list.length > 0 ?
                                                                // connection_list.filter((user)=> user?.requested_by?.username?.toLowerCase().includes(query)) &&  connection_list.filter((user)=> user?.requested_to?.username?.toLowerCase().includes(query)) ?.map(requested => (
                                                                connection_list.filter((user)=> user?.requested_by?.username?.toLowerCase().includes(query)) ?.map(requested => (
                                                                    
                                                                    current_user_id == requested?.requested_to._id ?
                                                                        <div className='col-md-5 mx-auto my-3' style={{ borderRadius: '15px', background: '#000000' }}>
                                                                            <div className='row'>
                                                                                <div className='col-md-3 p-4 text-center'>
                                                                                    <img src={`${img_url}${requested?.requested_by?.profile_pic}`} style={{ width: '100px', height: '100px', borderRadius: '5rem' }}></img>
                                                                                </div>
                                                                                <div className='col-md-3 text-center m-auto'>
                                                                                    <h5 onClick={() => userprofile(requested?.requested_by?._id)} style={{ color: 'white', cursor: 'pointer' }}>{requested?.requested_by?.username} </h5>
                                                                                </div>
                                                                                <div className='col-md-5 text-center m-auto pb-3 px-3'>
                                                                                    <img src={messageIcon} style={{ width: '50px' }}></img>
                                                                                    <img src={deleteIcon} style={{ width: '50px', marginLeft: '25px', cursor: 'pointer' }} onClick={() => showdeleteModal(requested?.requested_by?._id)}></img>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        :
                                                                        <div className='col-md-5 mx-auto my-3' style={{ borderRadius: '15px', background: '#000000' }}>
                                                                            <div className='row'>
                                                                                <div className='col-md-3 p-4 text-center'>
                                                                                    <img src={`${img_url}${requested?.requested_to?.profile_pic}`} style={{ width: '100px', height: '100px', borderRadius: '5rem' }}></img>
                                                                                </div>
                                                                                <div className='col-md-3 text-center m-auto'>
                                                                                    <h5 onClick={() => userprofile(requested?.requested_to?._id)} style={{ color: 'white', cursor: 'pointer' }}>{requested?.requested_to?.username} </h5>
                                                                                </div>
                                                                                <div className='col-md-5 text-center m-auto pb-3 px-3'>
                                                                                    <img src={messageIcon} style={{ width: '50px' }}></img>
                                                                                    <img src={deleteIcon} style={{ width: '50px', marginLeft: '25px', cursor: 'pointer' }} onClick={() => showdeleteModal(requested?.requested_to?._id)}></img>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                ))
                                                            :
                                                            <div style={{ padding: '3rem 0', marginLeft: '25rem' }}>
                                                                <p className='my-2' style={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: '500' }}>No Connection Found</p>
                                                            </div>

                                                    }
                                                </>
                                            </div>
                                        </div>
                                    </Tabs>




                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterOne bgColor={"black"} />
            </Content>
            <Footer />
        </Layout>
    )
}

export default Connection