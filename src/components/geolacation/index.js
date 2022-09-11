import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import toast from "../../components/common/toast"
import { userlocation,setCallResponse} from "../../actions/auth"


const Geolocation = () => {
    const history = useNavigate();
    let dispatch = useDispatch();
    
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [status, setStatus] = useState(null);

    const call_response = useSelector((state) => state.auth.call_response)



    const getLocation = () => {
        if (!navigator.geolocation) {
            setStatus('Geolocation is not supported by your browser');
        } else {
            setStatus('Locating...');
            navigator.geolocation.getCurrentPosition((position) => {
                setStatus(null);
                setLat(position.coords.latitude);
                setLng(position.coords.longitude);

                // console.log(position.coords)
                let locationdata ={
                    lat:position.coords.latitude,
                    lng:position.coords.longitude,
                    userlat : localStorage.setItem("userlat",position.coords.latitude),
                    userlng : localStorage.setItem("userlng",position.coords.longitude)
                }
                dispatch(userlocation(locationdata))
            }, () => {
                setStatus('Unable to retrieve your location');
               
            });
        }
    }

    useEffect(() => {
        if (call_response) {
            if (call_response.status) {
                toast.success(call_response.message)
                history("/notifications")
                dispatch(setCallResponse(null))


            } else {
                toast.error(call_response.message)
            }
        }
    }, [call_response])

    return (
        <>
            <div className=' button-part mt-5 ml-5'>
                <div onClick={getLocation} className="authlocation_btn" style={{ width: '100%' }}>
                    <p style={{ padding: '12px 8rem', height: 'auto', margin: '0', background: '#282c34', borderRadius: '7px', color: 'white' }}>  Allow Location</p></div>
            </div>
            {/* <h1>Coordinates</h1> */}
            {/* <p>{status}</p> */}
        </>
    )
}

export default Geolocation