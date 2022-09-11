import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import toast from "../../components/common/toast"
import { Button } from 'antd';
import imagesfill from '../../images/image-fill.png'
import { Layout } from 'antd';
import Header from '../../components/header/index'
import Footer from '../../components/footer/index'
import { img_url } from '../../constants/const';
import {setCallResponse,getUserData } from "../../actions/auth"
import { getProfileposes,profilefristimage } from "../../actions/users"

const { Content } = Layout;

const TakePicture = () => {
    const history = useNavigate();
    let dispatch = useDispatch();
   
    const [file2, setFile2] = React.useState(``)
    const [secondimage, setSecondimage] = useState('')
  

    const call_response = useSelector((state) => state.auth.call_response)
    const profile_poses = useSelector((state) => state.users.profile_poses)
    const profile_first = useSelector((state) => state.users.profile_first)
    let profile_data = useSelector((state) => state.auth.profile_data)


    console.log('profile_first-----**********', profile_first)

    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });

    useEffect(() => {
        let token = localStorage.getItem("check_token")
        let data = {
            token: token
        }
        dispatch(getProfileposes(data))
      
    }, [])
    
    useEffect(() => {
        if (profile_data) {
            setSecondimage(profile_data?.profile_verification_images?.first_pose)
        }
    }, [profile_data])
    
    console.log('secondimage-------',secondimage)



    useEffect(() => {
        if (typeof secondimage !== "string") {
            (async function () {
                let x = await toBase64(secondimage)
                setFile2(x)
                // console.log(x)
            })()
        }
    }, [secondimage])


    const handleClick = () => {
            let imgdata = {
                first_image: secondimage,
            }
            dispatch(profilefristimage(imgdata)) 
    }

    useEffect(() => {
        if (profile_first) {
                history("/takepicturetwo")
                // dispatch(setCallResponse(null))
                let token = localStorage.getItem("check_token")
                let data = {
                    token: token
                }
                dispatch(getUserData(data))
            } 
        
    }, [profile_first])




    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Content>
                <Header />
                <div className='' style={{ background: '#000000', color: 'white' }}>

                    <div className='d-flex flex-row justify-content-around align-items-center pt-5 pb-5 my-5' style={{ width: '100%', textAlign: 'center', padding: '3rem 0' }} >
                        <div className='d-flex flex-column justify-content-center align-items-center' >
                            <div className=" d-flex flex-column picture-area">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-6  text-dark">
                                            <div className="image-area">
                                                <img src={`${img_url}${profile_poses?.first_image}`} className='profile-pic' style={{ width: '100%', height: '34vh', borderRadius: '10px' }} />
                                            </div>
                                        </div>
                                        <div className="col-md-6  text-dark">
                                            <div className="image-area">
                                                <label style={{ width: "100% !important", height: '100% !important' }}>
                                                    <input type="file" accept="image/*" multiple style={{ display: 'none', visibility: 'hidden' }} onChange={(event) => setSecondimage(event.target.files[0])} />
                                                    {
                                                       profile_data?.profile_verification_images?.first_pose == "" ?
                                                            file2 && file2 != "" ?
                                                                <img style={{ width: "200px", height: '300px', borderRadius: '17px' }} src={file2} />
                                                                :
                                                                <div className='d-flex justify-content-center align-items-center' style={{ width: "200px", height: '300px', borderRadius: '17px' }}>
                                                                    <img style={{ width: "50px", height: '50px', }} src={imagesfill} />
                                                                </div>
                                                            :
                                                            <img src={`${img_url}${profile_data?.profile_verification_images?.first_pose}`} className='profile-pic' style={{ width: '100%', height: '34vh' }} />
                                                    }
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="image-title my-3">
                                        <h4 className='mt-5'>Take Picture</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex flex-row justify-content-around align-items-center pt-5 pb-5' style={{ width: '100%', textAlign: 'center', padding: '3rem 0' }} >
                        <div className='d-flex flex-column justify-content-center'>
                            <Button onClick={() => handleClick()} style={{ width: '200px', height: '50px', background: '#00DFDF', borderRadius: '10px', border: '2px solid transparent', color: 'white' }}>Done</Button>
                        </div>
                    </div>
                </div>
            </Content>
            <Footer />
        </Layout>
    )
}

export default TakePicture
