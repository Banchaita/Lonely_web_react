import {
    REGISTER_RESPONSE,
    VERIFY_OTP_RESPONSE,
    VALIDATE_OTP_RESPONSE,
    RESEND_OTP_RESPONSE,
    GET_ALL_INTERESTS,
    GET_ALL_CONNECTION,
    GET_YOUR_INTERESTS,
    GET_IMAGES_GALLERY,
    GET_USER_DATA,
    GET_HOME_DATA,
    UPDATE_USER_INTERESTED,
    UPDATE_USER_CONNECTION,
    UPDATE_YOUR_INTERESTED,
    USER_PROFILE_UPDATE,
    USER_PROFILE_IMAGE_UPDATE,
    CALL_RESPONSE,
    LOGOUT
    
} from "../actions/types";
import { img_url } from '../constants/const';



const initialState = {

    token: '',
    user_data: null,
    user_conn_data: null,
    yours_hobbies:null,
    user_profile_data:null,
    user_profile_image:null,
    call_response: null,
    login_call_response: null,
    interests: [],
    your_interests: [],
    connection: [],
    profile_images:[],
    profile_data:[],
    home_data:[],
   
};

export default (state = initialState, action) => {


    const { type, payload } = action;

    switch (type) {
        case REGISTER_RESPONSE:
            return {
                ...state,
                call_response: payload,
                user_data : payload.data
            };
        case RESEND_OTP_RESPONSE:
            return {
                ...state,
                login_call_response: payload
            };
            case VERIFY_OTP_RESPONSE:
                return {
                    ...state,
                    call_response: payload
                };
            case VALIDATE_OTP_RESPONSE:
                return {
                    ...state,
                    call_response: payload
                };
                case GET_ALL_INTERESTS:
            return {
                ...state,
                interests: payload
            };
            case GET_ALL_CONNECTION:
            return {
                ...state,
                connection: payload
            };
            case GET_YOUR_INTERESTS:
                console.log('payload===',payload)
            return {
                ...state,
                your_interests: payload.data[0]?.interest_data.map(data => {
                    data['selected'] = false
                    data['color'] = "white"
                    return data
                })
            };
            case GET_IMAGES_GALLERY:
            return {
                ...state,
                profile_images: payload
            };
            case GET_USER_DATA:
            return {
                ...state,
                profile_data: payload.data
            };
            case GET_HOME_DATA:
                // console.log(payload.data, " : payload//////////////////")
                let data = payload.data.map(payloadData => {
                    
                    payloadData.gallery.map(gallery => {
                        gallery["url"] = img_url + gallery["media"] 
                        // console.log('gallery---------',gallery["url"] = img_url + gallery["media"])
                    })
                    return payloadData
                })
                // console.log(data, ": Datapaylaod")
            return {
                ...state,
                home_data: data
            };
           
            case UPDATE_USER_INTERESTED:
                return {
                    ...state,
                    user_data: payload.status ? payload.data : null 
                };
                
            case UPDATE_USER_CONNECTION:
                return {
                    ...state,
                    user_conn_data: payload.status ? payload.data : null 
                };
            case UPDATE_YOUR_INTERESTED:
                return {
                    ...state,
                    yours_hobbies: payload.status ? payload.data : null 
                };
            case USER_PROFILE_UPDATE:
                return {
                    ...state,
                    user_profile_data: payload.status ? payload.data : null 
                };
            case USER_PROFILE_IMAGE_UPDATE:
                return {
                    ...state,
                    user_profile_image: payload.status ? payload.data : null 
                };
        case CALL_RESPONSE:
            return {
                ...state,
                call_response: payload
            };
            // case LOGOUT:
            //     localStorage.removeItem('check_token')
            // return {
            //     ...state,
            //     user_data: null,
            //     token: '',
            //     call_response: payload
            // };
        default:
            return state;
    }
}
