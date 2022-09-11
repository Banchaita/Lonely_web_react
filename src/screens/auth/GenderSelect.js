import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import toast from "../../components/common/toast"
import logo from '../../images/logo.png'
import iconone from '../../images/Icon-feather-check@2x.png'
import icontwo from '../../images/Icon-feather-check@2x1.png'
import one from '../../images/one.png'
import { Button } from 'antd'
import { getAllInterests, updateUserInterestedData, setCallResponse, getUserData } from '../../actions/auth'
import { img_url } from '../../constants/const'


const GenderSelect = () => {
    const history = useNavigate();
    const dispatch = useDispatch();
    const [interested_id, setInterestedId] = useState("")

    const interests = useSelector((state) => state.auth.interests)
    const call_response = useSelector((state) => state.auth.call_response)
    let profile_data = useSelector((state) => state.auth.profile_data)


    useEffect(() => {
        let token = localStorage.getItem("check_token")
        let data = {
            token: token
        }
        dispatch(getAllInterests(data))
        dispatch(getUserData(data))
    }, [])

    const selectgender = (id) => {
        setInterestedId(id)
    }

    const handleClick = () => {
        let token = localStorage.getItem("check_token")

        let data = {
            interested_in: interested_id,
            token: token
        }
        let interested_in = localStorage.setItem("interested_in", interested_id)
        dispatch(updateUserInterestedData(data))
    }

    useEffect(() => {
        if (call_response) {
            if (call_response.status) {
                toast.success(call_response.message)
                history("/types_of_connection")
                dispatch(setCallResponse(null))
            } else {
                toast.error(call_response.message)
            }
        }
    }, [call_response])

    useEffect(() => {
        if (profile_data) {
            console.log(profile_data, " : profile")
            profile_data?.interested_in?.map((key) => {
                setInterestedId(key._id)
            })
        }
    }, [profile_data])





    return (
        <>
            <div className="container-fluid">
                <div className="row" style={{ background: '#000000', minHeight: '100vh' }}>
                    <div className="col-8 offset-2 my-5 d-flex flex-column justify-content-center align-items-center">
                        <div>
                            <img src={logo} style={{ width: '200px', height: '50px' }} />
                        </div>
                        <div className='mt-5'>
                            <img src={one} style={{ width: '100%', height: '40px' }} />
                        </div>
                        <div className="interested-part mt-5">
                            <h4 className='text'>Interested In?</h4>
                            <>
                                <div className='d-flex flex-wrap justify-content-center gender_select_input mt-4'>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-12 text-white justify-content-center align-items-center selectgender_area">
                                                <div className="row justify-content-center align-items-center">
                                                    <div className="col-md-7 text-light mx-auto">
                                                        <div className="row">
                                                            <>
                                                                {interests?.data?.map((item, index) =>
                                                                    <div className="col-md-6 gender_input  justify-content-center align-items-center">
                                                                        <div onClick={() => handleClick()} className="gender_selection_btn " style={{ width: '250px',marginBottom:'3rem' }}>
                                                                            <div onClick={() => selectgender(item?._id)} value={item?._id} style={{ height: '4rem', margin: '0', cursor:'pointer', background: '#282c34', borderRadius: '7px', color: 'white', width: '244px',padding:'16px' }}>
                                                                                <div className='row'>
                                                                                    <div className="col-md-8">
                                                                                        <img src={img_url + item?.icon} style={{ width: '20px', marginRight: '1rem', marginLeft: '20%' }} />
                                                                                        <p hidden> {item?._id}</p>
                                                                                        {item?.name}
                                                                                    </div>
                                                                                    <div className="col-md-2">
                                                                                    {interested_id == item?._id ?
                                                                                        (<img src={icontwo} style={{ width: '20px' }} />) :
                                                                                        (<img src={iconone} style={{ width: '20px' }} />)
                                                                                    }
                                                                                    </div>   
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        {/* <Button onClick={() => selectgender(item?._id)} value={item?._id} className={"whiteInput d-flex justify-content-between align-items-center"} onChange={(e) => setInterestedId(e.target.value)} style={{ marginBottom: '10%', background: 'pink', color: '#000' }}>
                                                                            <div style={{ display: 'flex', border: '2px solid #fff' }}>
                                                                                <img src={img_url + item?.icon} style={{ width: '20px', marginRight: '1rem', marginLeft: '20%' }} />
                                                                                <p hidden> {item?._id}</p>
                                                                                {item?.name}
                                                                            </div>
                                                                            {interested_id == item?._id ?
                                                                                (<img src={icontwo} style={{ width: '20px' }} />) :
                                                                                (<img src={iconone} style={{ width: '20px' }} />)
                                                                            }
                                                                        </Button> */}
                                                                    </div>
                                                                )}
                                                            </>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        </div>
                        <div className=' button-part mt-5 ml-5'>
                            <div  onClick={() => handleClick()} className="gender_selection_btn" style={{ width: '100%' }}>
                                <p style={{ padding: '12px 8rem', height: 'auto', margin: '0', background: '#282c34', borderRadius: '7px', color: 'white',cursor:'pointer' }}>Continue</p></div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default GenderSelect