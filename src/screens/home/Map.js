import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import FooterOne from '../../components/footerOne/index'
import marker from '../../images/marker.png'
import toast from "../../components/common/toast"
import { Switch, Slider } from 'antd';
import { Layout } from 'antd';
import Header from '../../components/header/index'
import Footer from '../../components/footer/index'
import GMap from '../../components/gmap';
import { getUserData, setCallResponse, updateVisibleOnMap } from "../../actions/auth"


const { Content } = Layout;


//API key of the google map
const GOOGLE_MAP_API_KEY = 'AIzaSyD1ToAtHzTv97-afeDEALssddR1zYPv1zs';

// load google map script  

const Map = () => {
    const history = useNavigate();
    const dispatch = useDispatch();

    let profile_data = useSelector((state) => state.auth.profile_data)
    let call_response = useSelector((state) => state.auth.call_response)

    const loadGoogleMapScript = (callback) => {
        if (typeof window.google === 'object' && typeof window.google.maps === 'object') {
          callback();
        } else {
          const googleMapScript = document.createElement("script");
          googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key${GOOGLE_MAP_API_KEY}`;
          window.document.body.appendChild(googleMapScript);
          googleMapScript.addEventListener("load", callback);
        }
      }

    const [loadMap, setLoadMap] = useState(false);

    useEffect(() => {
        let token = localStorage.getItem("check_token")
        let data = {
            token: token
        }
        dispatch(getUserData(data))
    }, [])

    useEffect(() => {
        loadGoogleMapScript(() => {
          setLoadMap(true)
        });
      }, []);

      function onChange(checked, type) {
        console.log(checked)
        let token = localStorage.getItem("check_token")
        if(type == "visible"){
            dispatch(updateVisibleOnMap({visible_on_map : checked == 1 ? "0" : "1"}))
        }    
    }

    useEffect(() => {
        if (call_response) {
            if (call_response.status) {
                toast.success(call_response.message)
                // history("/setting")
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

    function onAfterChange(value) {
        console.log('onAfterChange: ', value);
    }

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Content>
                <Header />
                <div className='d-flex flex-row justify-content-around align-items-center pt-5 pb-5' style={{ width: '100%', textAlign: 'center', padding: '3rem 0' }} >
                    <div className='d-flex flex-column justify-content-center align-items-center '>
                        <div className='col-md-12 offset-2 my-5 d-flex flex-column justify-content-center  map-area  ' >
                            <div className='d-flex flex-column justify-content-center align-items-center' >
                                <div className="container">
                                    <div className="row">
                                        <div class="col-6">
                                            <div className="location-warp my-5">
                                                {!loadMap ? <div>Loading...</div> : <GMap />}
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div className='d-flex flex-row justify-content-around align-items-center pt-5 pb-5' style={{ width: '100%', textAlign: 'center', padding: '3rem 0' }} >
                                                <div className='d-flex flex-column justify-content-center align-items-center' >
                                                    <div className=" d-flex flex-column distance-area"  >
                                                        <div className="row">
                                                            <div className="col-md-6 text-white">
                                                                {/* <Switch defaultChecked onChange={onChange} />  */}
                                                                <Switch checked={profile_data?.visible_on_map == 1 ? true : false} onChange={()=>onChange(profile_data?.visible_on_map, "visible")} />
                                                                &nbsp;Hide My Profole
                                                            </div>
                                                            <div className="col-md-6 text-white">Show Profile</div>
                                                            <div className="col-md-6 text-white my-4">
                                                                Distance
                                                            </div>
                                                            <div className="col-md-6 text-white my-4">
                                                                <small>40 Mins</small>
                                                            </div>

                                                            <div className="col-md-12 text-white my-4">
                                                                <Slider defaultValue={30} onChange={onChange} onAfterChange={onAfterChange} />
                                                            </div>
                                                            <div className="col-md-6 text-white ">
                                                                <input type="checkbox" id="horns" name="global" />
                                                                <label for="global">  &nbsp; Global</label>
                                                            </div>
                                                            <div className="col-md-12 text-white my-4">
                                                                <span className='location-icon'>
                                                                    <i class="fa-solid fa-location-dot"></i>
                                                                </span>
                                                                <input type="text" class="form-control" id="location" aria-describedby="emailHelp" placeholder="Enter Location" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterOne bgColor={"black"} />
            </Content>
            <Footer />
        </Layout>
    )
}

export default Map
