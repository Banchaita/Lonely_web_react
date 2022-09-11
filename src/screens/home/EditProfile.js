import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import FooterOne from '../../components/footerOne/index'
import uploadImage from '../../images/uploadImage.png'
import { Button } from 'antd';
import toast from "../../components/common/toast"
import delet from '../../images/delete_icon.png'
import Header from '../../components/header'
import { getUserData, setUserToken, updateUserProfileData, setCallResponse, updateUserProfileImgageData, getAllProfileImages, getAllInterests, userGalleryremove } from "../../actions/auth"
import { img_url } from '../../constants/const';

const EditProfile = () => {
    const history = useNavigate();
    let dispatch = useDispatch();

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [occupation, setOccupation] = useState('')
    const [gender, setGender] = useState("")
    // const [genderid, setGenderID] = useState('')
    const [bio, setBio] = useState('')
    const [gallery_media, setGallerymedia] = useState('')
    const [file1, setFile1] = React.useState(``)
    const [sort_order, setSortorder] = useState('')
    const [is_profile, setIsprofile] = useState('')


    let profile_data = useSelector((state) => state.auth.profile_data)
    const call_response = useSelector((state) => state.auth.call_response)
    const profile = useSelector((state) => state.auth.profile_images)
    const interests = useSelector((state) => state.auth.interests)




    useEffect(() => {
        let token = localStorage.getItem("check_token")
        let data = {
            token: token
        }
        dispatch(getUserData(data))
        dispatch(getAllProfileImages(data))
        dispatch(getAllInterests())
    }, [])

    useEffect(() => {
        if (profile_data) {
            setUsername(profile_data?.username || username)
            setEmail(profile_data?.email || email)
            setOccupation(profile_data?.occupation || occupation)
            // setGenderID(profile_data?.gender?._id || gender)
            setGender(profile_data?.gender?._id || gender)
            setBio(profile_data?.bio || bio)
        }

        console.log(username,'====')
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
        setFile1(`${uploadImage}`)
    }, [gallery_media])


    useEffect(() => {
        if (profile) {
            console.log(profile, " : profile")
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

    const selectorder = (sort_order) => {
        setSortorder(sort_order)
    }


    const handleClick = () => {
        let token = localStorage.getItem("check_token")
        let data = {
            username: username,
            email: email,
            occupation: occupation,
            gender: gender,
            bio: bio,
            token: token
        }
        let imgdata = {
            gallery_media: gallery_media,
            sortorder: sort_order,
            token: token
        }
        console.log('imgdata=====', imgdata)

        dispatch(updateUserProfileData(data))
        dispatch(updateUserProfileImgageData(imgdata))
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
                dispatch(getAllProfileImages())

            } else {
                toast.error(call_response.message)
            }
        }
    }, [call_response])


    const removephoto = (id, is_profile) => {
        is_profile = String(is_profile)
        let removedata = {
            gallery_id: id,
            is_profile: is_profile
        }
        console.log('removedata-------', removedata)
        dispatch(userGalleryremove(removedata))
    }




    return (
        <><Header />
            <div className='row m-0' style={{ background: '#000000', minHeight: '100vh' }}>
                <div className='col-8 offset-2 my-5 d-flex flex-column justify-content-center align-items-center' >
                    <div className='container'>
                        <div className='form'>
                            <div className='mt-5 d-flex flex-column justify-content-center align-items-center'>
                                <h2 className='text'>Edit Profile Details</h2>
                            </div>
                            <div>
                                <div className='row mt-2'>
                                    <div className='col-md-6'>
                                        <label style={{ transform: `translate(13px, 22px)`, background: 'black', color: 'white', padding: '5px' }}>Username/Nickname</label>
                                        <input className={"form-control blackInput"} type="text" value={username} onChange={(e) => setUsername(e.target.value)} style={{ marginBottom: 10, border: '2px solid white', color: 'rgb(221 221 221 / 79%)', height: '4rem', fontSize: '14px', borderRadius: '1rem', width:'500px'}} />
                                    </div>
                                    <div className='col-md-6'>
                                        <label style={{ transform: `translate(13px, 22px)`, background: 'black', color: 'white', padding: '5px' }}>Email</label>
                                        <input className={"form-control blackInput"} type="text" value={email} onChange={(e) => setEmail(e.target.value)} style={{ marginBottom: 10, border: '2px solid white', color: 'rgb(221 221 221 / 79%)', height: '4rem', fontSize: '14px', borderRadius: '1rem',width:'500px' }} />
                                    </div>

                                </div>
                                <div className='row mt-2'>
                                    <div className='col-md-6'>
                                        <label style={{ transform: `translate(13px, 22px)`, background: 'black', color: 'white', padding: '5px' }}>Occupation</label>
                                        <input className={"form-control blackInput"} type="text" value={occupation} onChange={(e) => setOccupation(e.target.value)} style={{ marginBottom: 10, border: '2px solid white', color: 'rgb(221 221 221 / 79%)', height: '4rem', fontSize: '14px', borderRadius: '1rem',width:'500px' }} />
                                    </div>
                                    <div className='col-md-6 gender_input'>
                                        <label style={{ transform: `translate(13px, 22px)`, background: 'black', color: 'white', padding: '5px' }}>Gender</label>
                                        <select className='form-control editgender' value={gender} onChange={(e) => setGender(e.target.value)}>
                                            <>
                                                {
                                                    !profile_data?.gender ? <option value="Select your gender"> Select your gender  </option> :
                                                        <option value={profile_data?.gender?._id}> {profile_data?.gender?.name} </option>
                                                }
                                            </>
                                            {interests && interests?.data?.map((key) => <option value={key._id}>{key.name}</option>)}
                                        </select>
                                    </div>

                                </div>
                                <div className='row mt-4'>
                                    <div className='col-md-12'>
                                        <label style={{ transform: `translate(13px, 22px)`, background: 'black', color: 'white', padding: '5px' }}>Bio</label>
                                        <textarea className={"form-control textareaBlackInput"} type="textarea" value={bio} onChange={(e) => setBio(e.target.value)} style={{ marginBottom: 10, border: '2px solid white', color: 'rgb(221 221 221 / 79%)', height: '3rem', fontSize: '14px', borderRadius: '1rem' }} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='interests mt-5'>
                            <h5 className='text'>Interests</h5>
                            <div className="row justify-content-center align-items-center mb-3">
                                <>
                                    {
                                        profile_data?.my_interests?.map(interests => (
                                            <div className="col-3 text-white interest_box px-4 p-2  text-center mx-3 mb-4 mt-3' style={{ border: '1px solid  #00DFDF' }}">
                                                <div className='row justify-content-center py-1 position-relative mb-2'>
                                                    <div className='mx-2' style={{ backgroundColor: 'rgba(0,223,222)', borderRadius: '50%', width: '10px', height: '10px', border: '1px solid #00DFDF' }}></div>
                                                    <div className='mx-2' style={{ backgroundColor: '#f580f0', borderRadius: '50%', width: '10px', height: '10px', border: '1px solid #f580f0' }}></div>
                                                    <div className='mx-2' style={{ background: "linear-gradient(#f580f0,#00DFDF)", borderRadius: '50%', width: '10px', height: '10px', borderImage: 'linear-gradient(to right, #0083c5 0%, #0083c5 33%, #ec4a26 66%, #ec4a26 100%)', }}></div>
                                                    <Button type='danger' style={{ position: "absolute", top: '-25px', right: '-20px', background: 'white', color: 'white', padding: '5px', borderRadius: '50%', height: '30px', width: '30px', textAlign: '-webkit-center' }}><img src={delet} style={{ height: '17px', display: 'flex', alignItems: 'center0', justifyContent: 'center' }}></img></Button>
                                                </div>
                                                {interests?.interest?.name}
                                            </div>
                                        ))
                                    }
                                </>
                            </div>
                        </div>
                        <div className='gallery'>
                            <div className='mt-5 d-flex flex-column justify-content-center align-items-center'>
                                <h2 className='text'>Edit Images</h2>
                            </div>
                            <div>
                                <div className="row">
                                    <>

                                        {/* {console.log("gallery---------",profile_data?.gallery)} */}
                                        {
                                            profile_data?.gallery?.map(gallery => (
                                                <div className="col-md-3 mb-4">

                                                    <div className='position-relative text-white' style={{ width: 'fit-content' }}>
                                                        <img src={`${img_url}${gallery?.media}`} style={{ width: '200px', height: '250px' }} />
                                                        {/* <p>{gallery?._id}</p>
                                                        <p>{gallery?.is_profile}</p> */}
                                                        <Button onClick={() => removephoto(gallery?._id, gallery?.is_profile)} type='danger' style={{ position: "absolute", top: '0px', right: '0px', background: 'white', color: 'white', padding: '5px', borderRadius: '50%', height: '30px', width: '30px', textAlign: '-webkit-center' }}><img src={delet} style={{ height: '17px', display: 'flex', alignItems: 'center0', justifyContent: 'center' }}></img></Button>

                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </>
                                    <div className='col-md-3 pb-2'>
                                        <label>
                                            <input type="file" accept="image/*" multiple style={{ display: 'none', visibility: 'hidden' }} onChange={(event) => setGallerymedia(event.target.files[0])} />
                                            <img style={{ width: '200px', height: '250px' }} src={file1} />
                                        </label>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div onClick={() => handleClick()} className="about_btn" style={{ width: '100%' }}><p style={{ padding: '12px 8rem', height: 'auto', margin: '0', background: '#00DFDF', borderRadius: '13px', color: 'white', cursor: 'pointer' }}>Save</p></div>
                    </div>
                </div>
            </div >
            <FooterOne bgColor={"black"} />
        </>
    )
}

export default EditProfile