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
import { uploadUserProfilimageeVerify, setCallResponse,getUserData } from "../../actions/auth"
import { getProfileposes,profilefristimage } from "../../actions/users"

const { Content } = Layout;

const TakePictureTwo = () => {
    const history = useNavigate();
    let dispatch = useDispatch();

  
    const [file2, setFile2] = React.useState(``)
    const [firstimage, setFirstimage] = useState('')
    const [secondimage, setSecondimage] = useState('')
   

    const call_response = useSelector((state) => state.auth.call_response)
    const profile_poses = useSelector((state) => state.users.profile_poses)
    const profile_first = useSelector((state) => state.users.profile_first)
    let profile_data = useSelector((state) => state.auth.profile_data)


    // console.log('profile_data-----**********', profile_data?.profile_verification_images?.first_pose)


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
        dispatch(getUserData(data))
        dispatch(profilefristimage())
      
    }, [])

    useEffect(() => {
        if (profile_first) {
            setFirstimage(profile_first?.first_image)
        }  
        if (profile_data) {
            setSecondimage(profile_data?.profile_verification_images?.second_pose)
        }
    }, [profile_first,profile_data])

    // console.log("secondimage==========",secondimage)
    // console.log("firstimage++++++++++",firstimage)



    useEffect(() => {
        if (typeof secondimage !== "string") {
            (async function () {
                let x = await toBase64(secondimage)
                setFile2(x)
                // console.log(x)
            })()
        }
        // setFile2(`${imagesfill}`)
    }, [secondimage])


    const currentpath = () => {

    }

    const handleClick = () => {
        // console.log('firstimage=============',firstimage)
            let imgdata = {
                first_image: firstimage,
                second_image: secondimage,
                type:'profile_verification'
            }
            // console.log('imgdata----------',imgdata)
            dispatch(uploadUserProfilimageeVerify(imgdata)) 
       
        
    }

    useEffect(() => {
        if (call_response) {
            if (call_response.status) {
                toast.success(call_response.message)
                history("/profile")
                dispatch(setCallResponse(null))
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
                                            <img src={`${img_url}${profile_poses?.second_image}`} className='profile-pic' style={{ width: '100%', height: '34vh', borderRadius: '10px' }} />
                                            </div>
                                        </div>
                                        <div className="col-md-6  text-dark">
                                            <div className="image-area">
                                                <label style={{ width: "100% !important", height: '100% !important' }}>
                                                    <input type="file" accept="image/*" multiple style={{ display: 'none', visibility: 'hidden' }} onChange={(event) => setSecondimage(event.target.files[0])} />
                                                    {
                                                        profile_data?.profile_verification_images?.second_pose == "" ?
                                                            file2 && file2 != "" ?
                                                                <img style={{ width: "200px", height: '300px', borderRadius: '17px' }} src={file2} />
                                                                :
                                                                <div className='d-flex justify-content-center align-items-center' style={{ width: "200px", height: '300px', borderRadius: '17px' }}>
                                                                    <img style={{ width: "50px", height: '50px', }} src={imagesfill} />
                                                                </div>
                                                            :
                                                            <img src={`${img_url}${profile_data?.profile_verification_images?.second_pose}`} className='profile-pic' style={{ width: '100%', height: '34vh' }} />
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

export default TakePictureTwo
