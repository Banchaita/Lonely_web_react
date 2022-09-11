import React, { useEffect, useState, useRef } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setCallResponse, verifyOtp, validateOtp, registerUser, getUserData, resendOtp,expireOtp } from '../../actions/auth'
import toast from "../../components/common/toast"
import Auth from '../../components/common/Auth'
import OtpTimer from "otp-timer"


const Otp = () => {
    const history = useNavigate();
    const dispatch = useDispatch();

    const { from } = useParams()

    const inputref1 = useRef(null)
    const inputref2 = useRef(null)
    const inputref3 = useRef(null)
    const inputref4 = useRef(null)

    const [otp, setOtp] = useState(["", "", "", ""]);
    const [loading, setLoading] = useState(false)

    const [otp1, setOtp1] = useState("")
    const [color, setcolor] = useState("")


    let token = localStorage.getItem("check_token")


    const loadUserData = async () => {
        dispatch(getUserData())
    }

    useEffect(() => {
        if (token == "") {
            token = localStorage.getItem('token')
            if (!token || token == "" || token == undefined) {
                history.push("/")
            } else {
                loadUserData()
            }
        }
    }, [])

    const call_response = useSelector((state) => state.auth.call_response)
    const user_data = useSelector((state) => state.auth.user_data)
    const login_call_response = useSelector((state) => state.auth.login_call_response)

    // console.log('call_response=============',call_response)


    const submitOtp = async () => {
        let val = otp[0] + otp[1] + otp[2] + otp[3]
        if (val === "") {
            toast.error("Please enter a valid otp!")
            return false
        }
        let phone_number = localStorage.getItem("phone_number")
        if (from == "forgot") {
            phone_number = localStorage.getItem("phone_number")
        }
        if (otp === "" || phone_number == "" || phone_number == undefined) {
            toast.error("Please Enter OTP to Proceed")
            return false
        }
        setLoading(true)
        if (from == "forgot") {
            dispatch(verifyOtp({ phone_number, otp: val }))
        } else {
            dispatch(validateOtp({ phone_number, otp: val }))
        }
    }

    useEffect(() => {
        if (call_response) {
            if (!call_response.status) {
                setLoading(false)
                toast.error(call_response.message)
                dispatch(setCallResponse(null))
                return false
            }
            toast.success(call_response.message)
            dispatch(setCallResponse(null))
            if (call_response) {
                console.log(user_data)
                localStorage.setItem("check_token", call_response.other.token)
                // console.log('curresnt_user_id',call_response.data._id)
                localStorage.setItem("current_user_id", call_response.data._id)
                if(user_data?.interested_in.length > 0 && user_data?.my_interests.length > 0 && user_data?.connection_type.length > 0){
                    history("/home")
                }else{
                    history("/gender_select")
                }
            }
            else {
                history("/")
            }
        }
    }, [call_response])


    const onChangeText1 = (value) => {
        let isNumber = !isNaN(Number(value))
        if (isNumber) {
            setOtp([value, otp[1], otp[2], otp[3]])
            if (!value.trim() == "") {
                inputref2.current.focus()
            }
        } else {
            setOtp(['', otp[1], otp[2], otp[3]])
        }
    }

    const onChangeText2 = (value) => {
        let isNumber = !isNaN(Number(value))
        if (isNumber) {
            setOtp([otp[0], value, otp[2], otp[3]])
            if (value.trim() == "") {
                inputref1.current.focus()
            } else {
                inputref3.current.focus()
            }
        } else {
            setOtp([otp[0], '', otp[2], otp[3]])
        }
    }

    const onChangeText3 = (value) => {
        let isNumber = !isNaN(Number(value))
        if (isNumber) {
            setOtp([otp[0], otp[1], value, otp[3]])
            if (value.trim() == "") {
                inputref2.current.focus()
            } else {
                inputref4.current.focus()
            }
        } else {
            setOtp([otp[0], otp[1], '', otp[3]])
        }
    }

    const onChangeText4 = (value) => {
        let isNumber = !isNaN(Number(value))
        if (isNumber) {
            setOtp([otp[0], otp[1], otp[2], value])
            if (value.trim() == "") {
                inputref3.current.focus()
            } else {
                inputref4.current.blur()
            }
        } else {
            setOtp([otp[0], otp[1], otp[2], ''])
        }
    }
    const submit = () => {
        // console.log("button clicked");
        let phone_number = localStorage.getItem("phone_number")
        let country_code = localStorage.getItem("country_code")
        // console.log('phone_number------', phone_number)
        // console.log('country_code----->>>>>>>>', country_code)
        dispatch(resendOtp({ phone_number, country_code, login_source: 'phone' }))
        // dispatch(expireOtp({ phone_number }))
        toast.success("OTP send success")
    };

    // const expire =() =>{
    //     alert('oooo')
    // }


    return (
        <div className="container-fluid p-0">
            <div className="" style={{ height: '100vh' }}>
                <Auth />
                <div className="px-0 col-12 col-lg-6 col-md-12 d-flex flex-column align-items-center justify-content-between signup_right" style={{ background: "#1A1717", height: '100vh' }}>
                    <div style={{ width: '100%', marginTop: '2rem' }}>
                        <Link to={'/login'} style={{ marginLeft: '1rem' }}><img src="plugins/images/Group 17194.png" /></Link>
                    </div>
                    <div className="col-10 p-5 " style={{ borderRadius: 5, color: 'white', textAlign: 'center' }}>
                        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '3rem', borderRadius: 20 }}>
                            <img class="img-fluid" style={{ maxHeight: '200px', width: '200px' }} src='plugins/images/Mask Group 19@2x.png' />
                        </div>
                        <h4 style={{ color: 'white', fontSize: '19px', marginBottom: '2rem' }}>
                            <div className='otptimer'>
                                <OtpTimer
                                    className="otptimer text-white"
                                    minutes={0}
                                    seconds={30}
                                    style={{ color: '#fff' }}
                                    ButtonText="Resend Otp"
                                    resend={submit}
                                   
                                />
                            </div>


                        </h4>
                        <div className='d-flex flex-column justify-content-center align-items-center' style={{ padding: '0 0 2rem 0' }}>
                            <p className='login-text' style={{ fontWeight: '100', width: '45%' }}>Type the verificaton code we've set you.</p>
                        </div>
                        <div className="d-flex justify-content-center">
                            <input ref={inputref1} value={otp[0]} onChange={(e) => onChangeText1(e.target.value)} className={"form-control phoneInput otpInput "} id="box1" type="number" placeholder="0" maxLength={1} autofocus="" style={{ textAlign: 'center', backgroundColor: otp1 != "" ? "#FA81F0" : 'black', color: otp1 != "" ? color : "white" }} />
                            <input ref={inputref2} value={otp[1]} onChange={(e) => onChangeText2(e.target.value)} className={"form-control phoneInput otpInput "} id="box2" type="number" placeholder="0" maxLength={1} style={{ textAlign: 'center' }} />
                            <input ref={inputref3} value={otp[2]} onChange={(e) => onChangeText3(e.target.value)} className={"form-control phoneInput otpInput "} id="box3" type="number" placeholder="0" maxLength={1} style={{ textAlign: 'center' }} />
                            <input ref={inputref4} value={otp[3]} onChange={(e) => onChangeText4(e.target.value)} className={"form-control phoneInput otpInput "} id="box4" type="number" placeholder="0" maxLength={1} style={{ textAlign: 'center' }} />
                        </div>
                        <div className='d-flex justify-content-center align-items-center' style={{ width: '100%', marginTop: '4rem' }}>
                            <div onClick={() => submitOtp()} className="signlog_login_btn" style={{ width: '60%' }}><p style={{ padding: '1rem 4rem', height: 'auto', margin: '0', background: '#282c34', borderRadius: '13px', color: 'white' }}>Confirm</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Otp

