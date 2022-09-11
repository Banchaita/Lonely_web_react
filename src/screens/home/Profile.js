import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { render } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Layout } from 'antd';
import { img_url } from '../../constants/const';
import profile from '../../images/profileImage.png'
import correction from '../../images/correction.png'
import shield from '../../images/shield.png'
import licence from '../../images/licence .png'
import FooterOne from '../../components/footerOne/index'
import Header from '../../components/header/index'
import Footer from '../../components/footer/index'
import toast from "../../components/common/toast"
import { getUserData, setCallResponse } from "../../actions/auth"
import { userSetProfile,updateGallleyOrder } from "../../actions/users"
import $ from 'jquery'
import 'jquery-ui-dist/jquery-ui'

const { Content } = Layout;

const Profile = () => {
    let history = useNavigate();
    let dispatch = useDispatch()

    let profile_data = useSelector((state) => state.auth.profile_data)
    const call_response = useSelector((state) => state.auth.call_response)

    const [items, setItems] = useState([]);


    // console.log('items============', items)

    useEffect(() => {
        let token = localStorage.getItem("check_token")
        let data = {
            token: token
        }
        dispatch(getUserData(data))
    }, [])

    const setProfileOrder = (id) => {
        // alert(id)
        let data = {
            gallery_id: id
        }
        dispatch(userSetProfile(data))
    }

    useEffect(() => {
        if (call_response) {
            if (call_response.status) {
                toast.success(call_response.message)
                history("/profile")
                dispatch(setCallResponse(null))
                let token = localStorage.getItem("check_token")
                let data = {
                    token: token
                }
                dispatch(getUserData(data))

            } else {
                toast.error(call_response.message)
            }
        }
    }, [call_response])


    useEffect(() => {
        // $("#datepicker").datepicker();

        $("#imageListId").sortable({
            update: function (event, ui) {
                getIdsOfImages();
            }//end update         
        });

        const getIdsOfImages =() =>{
            let values = [];
            $('.listitemClass').each(function (index) {
                values.push($(this).attr("id").replace("imageId", ""));
            });
            
            $('#outputvalues').val(values);
            console.log('values=======', values)

            let str = ""
            values.map(data => {
                console.log(data)
                str = str + ","+ data
            })

            console.log(str) 

            let data ={
                gallery_ids: str
            }
            dispatch(updateGallleyOrder(data))
        }

    }, [])


  


    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Content>
                <Header />
                <div className='row mr-0 pt-5' style={{ background: '#000000', minHeight: '100vh', color: 'white' }}>
                    <div className='d-flex flex-column justify-content-center align-items-center' >
                        <div className='pl-5 pr-5 profile-detials'>
                            <div className='d-flex justify-content-center align-items-center profile-adj'>
                                <>

                                    {
                                        profile_data?.profile_pic == "" ?
                                            <img src={profile} className='profile-pic' />
                                            :
                                            <img src={`${img_url}${profile_data?.profile_pic}`} className='profile-pic' />
                                    }
                                </>
                            </div>
                            <div className='p-5 center-data flex-column'>
                                <div className='d-flex'>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <p className='mb-0'><span style={{ fontSize: '25px', fontWeight: '700' }}>{profile_data?.username} , {profile_data?.age}</span>({profile_data?.occupation})</p>
                                    </div>
                                    <div className='d-flex justify-content-center align-items-center ml-3' style={{ borderRadius: '8px', background: '#002D2D', padding: '10px 15px' }}>
                                        <img src="plugins/images/Group 163282x.png" style={{ width: '8px', height: '14px' }} />
                                        <p className='ml-2 mb-0' style={{ fontSize: '10px' }}>15 km</p>
                                    </div>
                                </div>
                                <div>
                                    <>

                                        {
                                            profile_data?.profile_verification_images?.first_pose == "" && profile_data?.profile_verification_images?.second_pose == "" ?
                                                <img className='profile_verify_icons' src="plugins/images/Group 17048@2x.png" onClick={() => history('/profileverification3')} style={{ cursor: 'pointer' }} />
                                                :
                                                <img src={correction} className='profile-pic m-3' style={{ width: '30px', cursor: 'pointer' }} onClick={() => history('/profileverification3')} />
                                        }
                                        <img className='profile_verify_icons' src="plugins/images/Group 17057@2x.png" onClick={() => history('/profileverification')} style={{ cursor: 'pointer' }} />
                                        {
                                            profile_data?.driving_verification_images?.front_image == "" && profile_data?.driving_verification_images?.back_image ?
                                                <img className='profile_verify_icons' src="plugins/images/id-card@2x.png" onClick={() => history('/licenceverification')} style={{ cursor: 'pointer' }} />
                                                :
                                                <img src={licence} className='profile-pic m-3' style={{ width: '30px', cursor: 'pointer' }} onClick={() => history('/licenceverification')} />
                                        }
                                    </>
                                </div>
                                <div className='d-flex flex-wrap center-data'>
                                    <div onClick={() => history('/edit_profile')} className="signlog_login_btn" ><p style={{ padding: '1rem 2rem', height: 'auto', margin: '0', background: '#282c34', borderRadius: '13px', color: 'white', fontSize: '10px' }}>Edit Profile</p></div>
                                    <div onClick={() => history('/')} className="signlog_login_btn ml-2" ><p style={{ padding: '1rem 2rem', height: 'auto', margin: '0', background: '#282c34', borderRadius: '13px', color: 'white', fontSize: '10px' }}>Preview Profile</p></div>
                                </div>
                                <p style={{ padding: '2rem 0' }}><span style={{ fontWeight: '700', fontSize: '20px' }}>Location : </span><span>{profile_data?.location}</span></p>
                                <p style={{ fontWeight: '700', fontSize: '20px' }}>About </p>
                                <p style={{ width: '70%' }}>{profile_data?.bio}<br /></p>
                                <p className='mt-5' style={{ fontWeight: '700', fontSize: '20px' }}>Interests </p>
                                <div className='d-flex flex-wrap center-data' style={{ width: "100%" }}>
                                    {
                                        profile_data?.my_interests?.map(interests => (
                                            interests.color == "mix" ?
                                                (<Button className='mr-2' style={{ width: '130px', height: '40px', backgroundImage: `linear-gradient(to right, #fa81f0, #aaa8ff, #0fc5ff, #00d6ff, #00dfdf)`, height: '52px', color: 'white', borderRadius: '10px', border: '0px solid transparent' }}>{interests?.interest?.name}</Button>)
                                                :
                                                (<Button className='mr-2' style={{ width: '130px', height: '40px', background: `${interests.color}`, borderRadius: '10px', border: '2px solid transparent', color: 'white', height: '52px' }}>{interests?.interest?.name}</Button>)
                                        ))
                                    }
                                </div>
                                <p className='mt-5' style={{ fontWeight: '700', marginTop: '1rem', fontSize: '20px' }}>Security Contact </p>
                                <div className='d-flex flex-wrap center-data'>
                                    <div onClick={() => history('/')} className="signlog_login_btn" ><p style={{ padding: '1rem 2rem', height: 'auto', margin: '0', background: '#282c34', borderRadius: '13px', color: 'white', fontSize: '10px' }}>Jack Reacher</p></div>
                                    <div onClick={() => history('/')} className="signlog_login_btn ml-2" ><p style={{ padding: '1rem 2rem', height: 'auto', margin: '0', background: '#282c34', borderRadius: '13px', color: 'white', fontSize: '10px' }}>John Wick</p></div>
                                </div>
                            </div>
                        </div>
                        <div className='profile-gallery' style={{ marginBottom: '4rem' }}>
                            <p style={{ textAlign: 'center', fontSize: '2em', fontWeight: '600' }}>Gallery</p>
                            <div className='profile-gallery-pic'>
                                  <div id="imageListId" class="ui-sortable" >
                                    {profile_data?.gallery?.map((gallery,key) => (
                                        <div id={"imageId"+gallery?._id} class="listitemClass ui-sortable-handle">
                                            <img src={`${img_url}${gallery?.media}`} className='gallery-pic-per' 
                                            onClick={() => setProfileOrder(gallery?._id)} 
                                            />
                                            {/* <p>{gallery?._id}</p> */}
                                        </div>
                                    ))
                                    }
                                </div>
                                <div id="outputDiv" hidden>
                                    <b>Output of ID's of images : </b>
                                    <input id="outputvalues" type="text" value="" style={{ background: 'transparent',width:'450px' }} />
                                </div>
                            </div>
                            <div className='d-flex flex-wrap justify-content-center align-items-center p-4' style={{ width: '100%' }}>
                                <div onClick={() => history('/edit_profile')} className="signlog_login_btn" ><p style={{ padding: '1rem 2rem', height: 'auto', margin: '0', background: '#282c34', borderRadius: '13px', color: 'white', fontSize: '10px' }}>Edit Profile</p></div>
                                <div onClick={() => history('/')} className="signlog_login_btn ml-2" ><p style={{ padding: '1rem 2rem', height: 'auto', margin: '0', background: '#282c34', borderRadius: '13px', color: 'white', fontSize: '10px' }}>Preview Profile</p></div>
                            </div>
                        </div>
                        <div className='pt-5 pb-5 d-flex flex-column justify-content-center align-items-center' style={{ background: '#161616' }}>
                            <img src="plugins/images/Group 17018.png" style={{ width: '100%', transform: `translateY(-84px)` }} />
                            <p style={{ textAlign: 'center', fontSize: '2em', fontWeight: '600' }}>We're here for <span className='foryou' style={{ color: '#FA81F0' }}>You!</span></p>
                            <p style={{ textAlign: 'center', width: '50%' }}>When it comes to love, everyone has questions. That’s why our Customer Care team is here to answer any questions you may have about Lonely AF.
                                The FAQ section is extensive and a great option for autonomous troubleshooting too. So let us help, because this journey is worth it.</p>
                            <div className='d-flex flex-wrap justify-content-center align-items-center p-4' style={{ width: '100%' }}>
                                <Button onClick={() => history('/contactus')} style={{ width: '130px', height: '40px', background: '#00DFDF', borderRadius: '10px', border: '2px solid transparent', color: 'white' }}>Contact Us</Button>
                            </div>
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

export default Profile