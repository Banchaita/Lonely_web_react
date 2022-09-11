import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Layout, Button } from 'antd';
import messageIcon from '../../images/messageIcon.png'
import deleteIcon from '../../images/deleteIcon.png'
import toast from "../../components/common/toast"
import Header from '../../components/header/index'
import Footer from '../../components/footer/index'
import { img_url } from '../../constants/const';
import { getblockuserdata, unblockUserdata } from '../../actions/users'
import { setCallResponse } from "../../actions/auth"



const { Content } = Layout;

const BlockedUser = () => {
    const history = useNavigate();
    const dispatch = useDispatch();

    const block_user = useSelector((state) => state.users.block_user)
    const call_response = useSelector((state) => state.auth.call_response)


    useEffect(() => {
        let token = localStorage.getItem("check_token")
        let data = {
            token: token
        }
        dispatch(getblockuserdata(data))
    }, [])

    const unblockUser = (id) => {
        //  alert(id)
        let unblockdata = {
            block_user_id: id
        }
        console.log('unblockdata=====', unblockdata)
        dispatch(unblockUserdata(unblockdata))
    }


    useEffect(() => {
        if (call_response) {
            if (call_response.status) {
                toast.success(call_response.message)
                history("/discover")
                dispatch(setCallResponse(null))
                let token = localStorage.getItem("check_token")
                let data = {
                    token: token
                }
                dispatch(getblockuserdata(data))
            } else {
                toast.error(call_response.message)
            }
        }
    }, [call_response])




    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Content>
                <Header />
                <div className='' style={{ background: '#000000', color: 'white' }}>
                    <div style={{ padding: '3rem 0' }}>
                        <p className='my-5' style={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: '700', paddingTop: '5rem' }}>Blocked Users</p>
                    </div>
                    <div style={{ padding: '3rem 0' }}>
                        {/* <p className='my-2' style={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: '500' }}>No Block User Found</p> */}
                        <div className='container mt-5'>

                            <div className='row'>
                                <>
                                    {block_user.length > 0 ?
                                        block_user?.map(block => (
                                            <div className='col-md-5 mx-auto my-3' style={{ borderRadius: '15px', background: 'rgb(22 21 21)', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}>
                                                <div className='row'>
                                                    <div className='col-md-3 p-4 text-center'>
                                                        <img src={`${img_url}${block?.blocked_to?.profile_pic}`} style={{ width: '100px', height: '100px', borderRadius: '5rem' }}></img>
                                                    </div>
                                                    <div className='col-md-3 text-center m-auto'>
                                                        <h5 style={{ color: 'white' }}>{block?.blocked_to?.username} </h5>
                                                    </div>
                                                    <div className='col-md-5 text-center m-auto pb-3 px-3'>
                                                        <Button onClick={() => unblockUser(block?.blocked_to?._id)} style={{ width: '120px', height: '50px', background: '#FF5959', borderRadius: '10px', border: '2px solid transparent', color: 'white' }}>Unblock</Button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                        :
                                        <div style={{ padding: '3rem 0'}}>
                                            <p className='my-2' style={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: '500' }}>No Block User Found</p>
                                        </div>
                                    }
                                </>
                            </div>
                        </div>
                    </div>
                </div>
            </Content>
            <Footer />
        </Layout>
    )
}

export default BlockedUser
