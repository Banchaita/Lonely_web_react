import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import toast from "../../components/common/toast"
import logo from '../../images/logo.png'
import two from '../../images/two.png'
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { getAllConnection, updateUserConnectionData,setCallResponse } from '../../actions/auth'
import { img_url } from '../../constants/const'

const TypesOfConnection = () => {
    const history = useNavigate();
    const dispatch = useDispatch();

    const [connection_id, setConnectionId] = useState("")
    const [token, setToekn] = useState("")

    const connection = useSelector((state) => state.auth.connection)
    const call_response = useSelector((state) => state.auth.call_response)

    // console.log('call_response--------', call_response)

    const _renderItem = () => { }
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        centerMode: true,
        // centerPadding: '50px',
        focusOnSelect: true,
        // arrows:false,
        useCSS: true
    };
    useEffect(() => {
        dispatch(getAllConnection())
    }, [])

    const selectconnection = (id) => {
        setConnectionId(id)
       let connection_id = localStorage.setItem("connection_id",id)

        let data = {
            connection_type: id,
           
        }
        dispatch(updateUserConnectionData(data))
    }
    useEffect(() => {
        if (call_response) {
            // console.log('======',call_response)
            if (call_response.status) {
                toast.success(call_response.message)
                history("/interest")
                dispatch(setCallResponse(null))
            } else {
                return false
            }
        }
    }, [call_response])

   
    return (
        <>
            <div className="container-fluid p-0">
                <div className="row" style={{ background: '#000000', minHeight: '100vh' }}>
                    <div className="col-8 offset-2 my-5 d-flex flex-column justify-content-center align-items-center">
                        <div className="div">
                            <img src={logo} style={{ width: '200px', height: '50px' }} />
                        </div>
                        <div>
                            <img src={two} style={{ width: '100%', height: '40px' }} />
                        </div>
                        <h4 className='text mt-3'>Types of Connection</h4>
                    </div>
                    <div className="col-md-12">
                        <div className='w-100 d-flex flex-column justify-content-center align-items-center'>
                            <>
                                <div className='w-100 text-center'>
                                    <Slider {...settings}  className='slider'>
                                        {connection?.data?.map((item, index) =>
                                            <div style={{ textAlign: 'center', opacity: '0.6' }} onClick={() => selectconnection(item?._id)} value={item?._id} onChange={(e) => setConnectionId(e.target.value)}>
                                                <img style={{ opacity: '0.2', marginLeft: '15%', marginTop: '5%', borderRadius: '12px',width:'250px' }} className="img w-75" src={img_url + item?.images[0].name} />
                                                <p className="legend text-white text-center pt-3">{item?.name}</p>
                                                <p className="legend text-white text-center pt-3" hidden>{item?._id}</p>
                                            </div>
                                        )}
                                    </Slider>
                                </div>
                            </>
                        </div>
                    </div>

                </div>
            </div> 
        </>
    )
}

export default TypesOfConnection
