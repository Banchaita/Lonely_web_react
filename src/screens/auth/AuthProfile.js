import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import toast from "../../components/common/toast"
import logo from '../../images/logo.png'
import moment from "moment"
import { Button } from 'antd'
import gender_bg from '../../images/gender_bg.png'
import four from '../../images/four.png'
import profile_pic from '../../images/profileImage.png'
import { updateUserProfileData, getAllInterests, getAllProfileImages, updateUserProfileImgageData, getUserData, setCallResponse } from '../../actions/auth'
import imagesfill from '../../images/image-fill.png'
import { img_url } from '../../constants/const';



const AuthProfile = () => {
    const history = useNavigate();
    const dispatch = useDispatch();

    const [username, setUsername] = useState("")
    const [phone_number, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")
    const [gender, setGender] = useState("")
    // const [genderid, setGenderID] = useState('')
    const [dob, setDOB] = useState("")
    const [bio, setBio] = useState("")

    const [gallery_media, setGallerymedia] = useState('')
    const [sort_order, setSortorder] = useState('')
    const [file1, setFile1] = React.useState(``)

    const profile = useSelector((state) => state.auth.profile_images)
    const interests = useSelector((state) => state.auth.interests)
    const call_response = useSelector((state) => state.auth.call_response)
    let profile_data = useSelector((state) => state.auth.profile_data)

    console.log(interests)


    useEffect(() => {
        let token = localStorage.getItem("check_token")
        let data = {
            token: token
        }
        dispatch(getUserData(data))
        dispatch(getAllInterests(data))
        dispatch(getAllProfileImages(data))
    }, [])

    useEffect(() => {
        if (profile_data) {
            setUsername(profile_data?.username || username)
            setEmail(profile_data?.email || email)
            setPhoneNumber(profile_data?.phone_number || phone_number)
            // setGenderID(profile_data?.gender?._id || gender)
            setGender(profile_data?.gender?._id || gender)
            setBio(profile_data?.bio || bio)
            setDOB(moment(profile_data?.dob * 1000).format('YYYY-MM-DD') || moment(dob * 1000).format('YYYY-MM-DD'))
        }
    }, [profile_data])

    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });

    useEffect(() => {
        if (typeof gallery_media !== "string") {
            (async function () {
                let x = await toBase64(gallery_media)
                setFile1(x)
            })()
        }
        setFile1(`${profile_pic}`)
    }, [gallery_media])

    const selectorder = (sort_order) => {
        setSortorder(sort_order)
    }

    useEffect(() => {
        if (profile) {
            // console.log(profile, " : profile")
            if (profile?.data?.length == 0) {
                setSortorder("0")
            } else {
                let i = 0;
                profile?.data?.map((key) => {
                    if (i == profile.data.length - 1) {
                        setSortorder(key.sort_order)
                    }
                    i++
                })
            }
        }
    }, [profile])

    const handleClick = () => {
        let token = localStorage.getItem("check_token")
        let data = {
            username: username,
            email: email,
            gender: gender,
            phone_number: phone_number,
            dob: moment(dob).unix(),
            bio: bio,
            token:token
        }
        console.log('gender=========', gender)
        let imgdata = {
            gallery_media: gallery_media,
            sortorder: sort_order,
            token:token
        }
        dispatch(updateUserProfileData(data))
        dispatch(updateUserProfileImgageData(imgdata))
    }

    useEffect(() => {
        if (call_response) {
            if (call_response.status) {
                toast.success(call_response.message)
                history("/location")
                dispatch(getAllProfileImages())
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
        <>
            <div className='d-flex flex-column justify-content-center align-items-center' style={{ background: '#000000', minHeight: '100vh' }}>
                <div className='d-flex flex-column justify-content-center align-items-center' >
                    <div>
                        <img src={logo} style={{ width: '200px', height: '50px' }} />
                    </div>
                    <div className='mt-5'>
                        <img src={four} style={{ width: '100%', height: '40px' }} />
                    </div>

                    <div className='mt-5 d-flex flex-column justify-content-center align-items-center'>
                        <h4 className='text'>Profile Details</h4>
                        <div className='mt-2'>
                            <>

                                {
                                    profile_data?.profile_pic == "" ?
                                        <label>
                                            <input type="file" accept="image/*" multiple style={{ display: 'none', visibility: 'hidden' }} onChange={(event) => setGallerymedia(event.target.files[0])} />
                                            <img style={{ width: '150px', height: '150px', borderRadius: '10px' }} src={file1} />
                                        </label>
                                        : 
                                        <img src={`${img_url}${profile_data?.profile_pic}`} className='profile-pic' style={{ width: '150px', height: '150px', borderRadius: '10px' }} />
                                }
                            </>
                        </div>
                        <div className='mt-2'>
                            <a className='profile' href='#'>Add Profile Pic</a>
                        </div>
                    </div>
                    <div className='d-flex flex-column justify-content-center align-items-center' >
                        <div className='container'>
                            <div className='row mt-2'>
                                <div className='col-md-6 gender_input'>
                                    <label style={{ transform: `translate(13px, 22px)`, background: 'black', color: 'white', padding: '5px' }}>Username/Nickname</label>
                                    <input className={"form-control whiteInput"} type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter Username/Nickname" />
                                </div>
                                <div className='col-md-6 gender_input'>
                                    <label style={{ transform: `translate(13px, 22px)`, background: 'black', color: 'white', padding: '5px' }}>Phone</label>
                                    <input className={"form-control whiteInput"} type="text" value={phone_number} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="xxx-xxx-xxxx" />
                                </div>
                            </div>
                            <div className='row mt-2'>
                                <div className='col-md-6 gender_input'>
                                    <label style={{ transform: `translate(13px, 22px)`, background: 'black', color: 'white', padding: '5px' }}>Email</label>
                                    <input className={"form-control whiteInput"} type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
                                </div>
                                <div className='col-md-6 gender_input'>
                                    <label style={{ transform: `translate(13px, 22px)`, background: 'black', color: 'white', padding: '5px' }}>Gender</label>
                                    <select className='form-control gender' value={gender} onChange={(e) => setGender(e.target.value)}>
                                        <> 
                                            {
                                                !profile_data?.gender ?  <option value="Select your gender"> Select your gender  </option> :  
                                                <option value={profile_data?.gender?._id}> {profile_data?.gender?.name} </option> 
                                            }
                                        </>
                                        {interests && interests?.data?.map((key) => <option value={key._id}>{key.name}</option>)}
                                    </select>
                                </div>
                            </div>
                            <div className='row mt-5'>
                                <div className='col-md-12 gender_input'>
                                    <input className={"form-control whiteInput_colorInput "} type="date" value={dob} onChange={(e) => setDOB(e.target.value)} placeholder="Choose birthday date" />
                                </div>
                            </div>
                            {/* <div className='row mt-5'>
                                <div className='col-md-12 gender_input'>
                                    <input className={"form-control colorInput"} type="date" value={dob} onChange={(e) => setDOB(e.target.value)} placeholder="Choose birthday date" />
                                </div>
                            </div> */}
                            <div className='row mt-2'>
                                <div className='col-md-12 gender_input'>
                                    <label style={{ transform: `translate(13px, 13px)`, background: 'black', color: 'white', padding: '5px' }}>Bio</label>
                                    <textarea className={"form-control textareaInput"} type="textarea" value={bio} onChange={(e) => setBio(e.target.value)} placeholder="Enter Bio" style={{ marginBottom: 10, border: '2px solid white', color: 'white', height: '3rem', fontSize: '14px', borderRadius: '1rem' }} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mt-5'>
                        <div onClick={() => handleClick()} className="profile_btn" style={{ width: '100%' }}><p style={{ padding: '12px 8rem', height: 'auto', margin: '0', background: '#282c34', borderRadius: '7px', color: 'white' }}>Confirm</p></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AuthProfile