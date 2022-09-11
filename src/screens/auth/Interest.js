import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import logo from '../../images/logo.png'
import three from '../../images/three.png'
import toast from "../../components/common/toast"
import { getYourInterests, updateYourInterestedData, setCallResponse } from '../../actions/auth'



const Interest = () => {
    const history = useNavigate();
    const dispatch = useDispatch();
    const [interested_id, setInterestedId] = useState("")
    const [interested, setInterested] = useState([])
    const [show, setShow] = useState(false);
    const [interest_box, setInterestbox] = useState("interest_box");

    const your_interests = useSelector((state) => state.auth.your_interests)
    const call_response = useSelector((state) => state.auth.call_response)

    // console.log('your_interests==========',your_interests)

    useEffect(() => {
        let connection_id = localStorage.getItem("connection_id")
        dispatch(getYourInterests({ connection_type_id: connection_id }))
    }, [])

    const bluebox = (item, color) => {
        // console.log(item)
        your_interests.map(data => {
            if (data._id == interested_id) {
                data["color"] = color;
                data["selected"] = true;
            }
        })
        let finalArr = [...interested];
        if (interested.length > 0) {
            let i = 0;
            let found = interested?.filter(data => data?._id == interested_id)
            // console.log(found)
            if (found.length > 0) {
                interested?.map(data => {
                    if (data?._id == interested_id) {
                        finalArr.splice(i, 1)
                        finalArr.push({
                            _id: interested_id,
                            color
                        })
                    }
                    i++
                })
            } else {
                finalArr.push({
                    _id: interested_id,
                    color
                })
            }
        } else {
            finalArr.push({
                _id: interested_id,
                color
            })
        }
        setInterested(finalArr)
    }

    var stylesBlue = {
        border: '1px solid #00DFDF'
    }
    var stylesPink = {
        border: '1px solid #f580f0'
    }

    var stylesGrad = {
        borderColor: '#f580f0 #f580f0 #00DFDF rgba(0,223,222)'
    }

    

    const handleClick = () => {
        let token = localStorage.getItem("check_token")
        let data = {
            interests: JSON.stringify(interested),
            token
        }
        console.log('data===',data)
        dispatch(updateYourInterestedData(data))
    }

    useEffect(() => {
        if (call_response) {
            if (call_response.status) {
                toast.success(call_response.message)
                history("/authprofile")
                dispatch(setCallResponse(null))
            } else {
                toast.error(call_response.message)
            }
        }
    }, [call_response])

    return (
        <>
            <div className="container-fluid">
                <div className='row' style={{ background: '#000000', minHeight: '100vh' }}>
                    <div className='col-12 mx-auto  my-5 d-flex flex-column justify-content-center align-items-center' >
                        <div>
                            <img src={logo} style={{ width: '200px', height: '50px' }} />
                        </div>
                        <div className='mt-5'>
                            <img src={three} style={{ width: '100%', height: '40px' }} />
                        </div>
                        <div className="interested-part mt-5">
                            <h4 className='text'>Your Interests</h4>
                            <p className='text-center text-white interest_part-subtitle'>Select a few of your interests and let everyone  <br /> know what you’re passionate about.</p>
                            <>
                                <div className='d-flex flex-wrap justify-content-center gender_select_input mt-4'>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-12 text-white justify-content-center align-items-center selectgender_area ">
                                                <div className="row justify-content-center align-items-center">
                                                    <div className="col-md-10  text-white mx-auto">
                                                        <div className="row">
                                                            <>
                                                            {/* {console.log( your_interests?.interest_data,'-----------')} */}
                                                                {
                                                                    your_interests?.map((item, index) =>
                                                                        <div className='col-3 text-white px-4 p-2 text-center mx-3 mb-4 select-interest-area'  onClick={() => setShow(prev => !prev)}>
                                                                            <div className={interest_box} onClick={() => setInterestedId(item?._id)} style={item?.color == "#00DFDF" ? stylesBlue : item?.color == "#f580f0" ? stylesPink : item?.color == "mix" ? stylesGrad : { border: '1px solid white' }}>
                                                                                {
                                                                                    interested_id == item?._id && show &&
                                                                                    <div className='row justify-content-center py-1'>
                                                                                        <div className='blue-box mx-2' onClick={() => bluebox(item, "#00DFDF")} style={{ backgroundColor: '#00DFDF', borderRadius: '50%', width: '10px', height: '10px', border: '1px solid #00DFDF' }}></div>
                                                                                        <div className='pink-box mx-2' onClick={() => bluebox(item, "#f580f0")} style={{ backgroundColor: '#f580f0', borderRadius: '50%', width: '10px', height: '10px', border: '1px solid #f580f0' }}></div>
                                                                                        <div className='gradient-box mx-2' onClick={() => bluebox(item, "mix")} style={{ background: "linear-gradient(#f580f0,#00DFDF)", borderRadius: '50%', width: '10px', height: '10px', borderImage: 'linear-gradient(to right, #0083c5 0%, #0083c5 33%, #ec4a26 66%, #ec4a26 100%)', }}></div>
                                                                                    </div>
                                                                                }
                                                                                {item?.name}
                                                                                <br />
                                                                            </div>
                                                                        </div>

                                                                    )
                                                                }
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
                        <div className='mt-5 gender_selection_btn'>
                            <button onClick={() => handleClick()} className='btn btn-block' style={{ padding: '12px 4rem', height: 'auto', margin: '0', background: '#000', borderRadius: '7px', color: 'white' }}>Done</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Interest