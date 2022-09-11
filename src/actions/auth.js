import {
    LOGIN_RESPONSE,
    FORGOT_RESPONSE,
    LOGOUT,
    REGISTER_RESPONSE,
    VERIFY_OTP_RESPONSE,
    VALIDATE_OTP_RESPONSE,
    RESEND_OTP_RESPONSE,
    RESET_PASSWORD_RESPONSE,
    SOCIAL_LOGIN_RESPONSE,
    GET_ALL_INTERESTS,
    GET_ALL_CONNECTION,
    GET_YOUR_INTERESTS,
    GET_IMAGES_GALLERY,
    GET_USER_DATA,
    GET_HOME_DATA,
    GET_OTHER_USER_DATA,
    USER_TOKEN,
    UPDATE_USER_INTERESTED,
    UPDATE_USER_CONNECTION,
    UPDATE_YOUR_INTERESTED,
    USER_PROFILE_UPDATE,
    USER_PROFILE_IMAGE_UPDATE,
    CHANGE_PASSWORD,
    CALL_RESPONSE,
    SHOW_LOADER
    
} from './types';

import { base_url } from "../constants/const"
import { apiCall } from "../api";

const token = localStorage.getItem("check_token")

// console.log('authtoken==========',token)

export const login = (data) => async dispatch => {
    let config = {
        method: 'post',
        headers: {},
        url: `${base_url}auth/login`,
        data,
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: LOGIN_RESPONSE,
        payload: response?.data
    })
}

export const socialLogin = (data) => async dispatch => {
    let config = {
        method: 'post',
        headers: {},
        url: `${base_url}auth/social_login`,
        data,
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: SOCIAL_LOGIN_RESPONSE,
        payload: response?.data
    })
}

export const forgotPassword = (data) => async dispatch => {
    let config = {
        method: 'post',
        headers: {},
        url: `${base_url}auth/forgot`,
        data,
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: FORGOT_RESPONSE,
        payload: response?.data
    })
}

export const verifyOtp = (data) => async dispatch => {
    let config = {
        method: 'post',
        headers: {},
        url: `${base_url}users/verify_otp`,
        data,
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: VERIFY_OTP_RESPONSE,
        payload: response.data
    })
}

export const validateOtp = (data) => async dispatch => {
    let config = {
        method: 'post',
        headers: {},
        url: `${base_url}users/verify_otp`,
        data,
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: VALIDATE_OTP_RESPONSE,
        payload: response.data
    })
}

export const resendOtp = (data) => async dispatch => {
    let config = {
        method: 'post',
        headers: {},
        url: `${base_url}users/register`,
        data,
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: RESEND_OTP_RESPONSE,
        payload: response.data
    })
}
export const expireOtp = (data) => async dispatch => {
    let config = {
        method: 'post',
        headers: {},
        url: `${base_url}users/expire_otp`,
        data,
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: RESEND_OTP_RESPONSE,
        payload: response.data
    })
}

export const ResetPasswordWithOtp = (data) => async dispatch => {
    let config = {
        method: 'post',
        headers: {},
        url: `${base_url}auth/reset_password`,
        data,
    }
    let response = await apiCall(config, dispatch)
 
    dispatch({
        type: RESET_PASSWORD_RESPONSE,
        payload: response.data
       
    })
}

export const registerUser = (data) => async dispatch => {
    let config = {
        method: 'post',
        headers: {},
        url: `${base_url}users/register`,
        data
    }
    // console.log('data----',data)
    let response = await apiCall(config, dispatch)
    // console.log(response)
    dispatch({
        type: REGISTER_RESPONSE,
        payload: response.data
    })
}

// now with token

export const getUserData = (data) => async dispatch => {
    let config = {
        method: 'post',
        headers: {Authorization: `Bearer ${data.token}`},
        url: `${base_url}users/get_detail`
    }
    let response = await apiCall(config, dispatch)
        dispatch({
            type:GET_USER_DATA,
            payload: response.data
        })
    
}
export const getHomeData = (data) => async dispatch => {
    let config = {
        method: 'get',
        headers: {Authorization: `Bearer ${data.token}`},
        url: `${base_url}users/get_home_connections?interested_in=${data.interested_in}&connection_type=${data.connection_type}&min_age=${data.min_age}&max_age=${data.max_age}&profile_verification=${data.profile_verification}&background_check_verification=${data.background_check_verification}&driving_license_verification=${data.driving_license_verification}&filter_lat=${data.filter_lat}&filter_lng=${data.filter_lng}&filter_distance=${data.filter_distance}&page=${data.page}`
    }
    let response = await apiCall(config, dispatch)
        dispatch({
            type:GET_HOME_DATA,
            payload: response.data
        })
    
}


export const getAllInterests = (data) => async dispatch => {
    let config = {
        method: 'post',
        headers: {Authorization: `Bearer ${data.token}`},
        url: `${base_url}interests/get_interesed_in`
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: GET_ALL_INTERESTS,
        payload: response.data
    })
}
export const getYourInterests = (connection_type_id) => async dispatch => {
    let config = {
        method: 'post',
        headers: {Authorization: `Bearer ${token}`},
        url: `${base_url}interests/get_all_interests`,
        data:connection_type_id
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: GET_YOUR_INTERESTS,
        payload: response.data
    })
}
export const getAllConnection = (data) => async dispatch => {
    let config = {
        method: 'POST',
        headers: {Authorization: `Bearer ${token}`},
        url: `${base_url}interests/get_connection_type`
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: GET_ALL_CONNECTION,
        payload: response.data
    })
}
export const getAllProfileImages = (data) => async dispatch => {
    let config = {
        method: 'POST',
        headers: {Authorization: `Bearer ${data.token}`},
        url: `${base_url}users/get_gallery`
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: GET_IMAGES_GALLERY,
        payload: response.data
    })
}




export const updateUserInterestedData = (data) => async dispatch => {
    let config = {
        method: 'post',
        headers: {Authorization: `Bearer ${data.token}`},
        url: `${base_url}users/update_user_interested_in`,
        data
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: CALL_RESPONSE,
        payload: response.data
    })
}

export const updateUserConnectionData = (data) => async dispatch => {
    let config = {
        method: 'post',
        headers: {Authorization: `Bearer ${localStorage.getItem("check_token")}`},
        url: `${base_url}users/update_user_connection_type`,
        data
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: CALL_RESPONSE,
        payload: response.data
    })
}
export const updateYourInterestedData = (data) => async dispatch => {
    let config = {
        method: 'post',
        headers: {Authorization: `Bearer ${data.token}`},
        url: `${base_url}users/update_user_interests`,
        data
    }
    // console.log(localStorage.getItem('check_token'),"++++++++++++++")
    let response = await apiCall(config, dispatch)
    dispatch({
        type: CALL_RESPONSE,
        payload: response.data
    })
}
export const updateUserProfileData = (data) => async dispatch => {
    // console.log(data)
    let config = {
        method: 'post',
        headers: {Authorization: `Bearer ${data.token}`},
        url: `${base_url}users/update_profile`,
        data
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type:  CALL_RESPONSE,
        payload: response.data
    })
}

export const uploadUserProfilimageeVerify = (data) => async dispatch => {
    let formdata = new FormData();
    formdata.append('first_image',data.first_image)
    formdata.append('second_image',data.second_image)
    formdata.append('front_image',data.front_image)
    formdata.append('back_image',data.back_image)
    formdata.append('type',data.type)
    
    let config = {
        method: 'post',
        headers: {Authorization: `Bearer ${token}`},
        url: `${base_url}users/upload_profile_verifaction_images`,
        data:formdata
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type:  CALL_RESPONSE,
        payload: response.data
    })
}

export const updateUserProfileImgageData = (data) => async dispatch => {
    // console.log('data===',data)
    let formdata = new FormData();
    formdata.append('gallery_media',data.gallery_media)
    formdata.append('last_sort_order',data.sortorder)
    let config = {
        method: 'post',
        headers: {Authorization: `Bearer ${data.token}`},
        url: `${base_url}users/add_profile_gallery`,
        data:formdata
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: USER_PROFILE_IMAGE_UPDATE,
        payload: response.data
    })
}

export const userRightSwipe = (data) => async dispatch => {
    let config = {
        method: 'post',
        headers: {Authorization: `Bearer ${localStorage.getItem("check_token")}`},
        url: `${base_url}users/right_swipe`,
        data
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: CALL_RESPONSE,
        payload: response.data
    })
}

export const userLeftSwipe = (data) => async dispatch => {
    let config = {
        method: 'post',
        headers: {Authorization: `Bearer ${localStorage.getItem("check_token")}`},
        url: `${base_url}users/left_swipe`,
        data
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: CALL_RESPONSE,
        payload: response.data
    })
}
export const userUndoLeftSwipe = (data) => async dispatch => {
    let config = {
        method: 'post',
        headers: {Authorization: `Bearer ${localStorage.getItem("check_token")}`},
        url: `${base_url}users/undo_left_swipe`,
        data
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: CALL_RESPONSE,
        payload: response.data
    })
}
export const userGalleryremove = (data) => async dispatch => {
    // console.log('data============',data)
    let config = {
        method: 'post',
        headers: {Authorization: `Bearer ${localStorage.getItem("check_token")}`},
        url: `${base_url}users/remove_from_gallery`,
        data
    }
    let response = await apiCall(config, dispatch)
    // console.log(response)
    dispatch({
        type: CALL_RESPONSE,
        payload: response.data
    })
}
export const userlocation = (data) => async dispatch => {
    let config = {
        method: 'post',
        headers: {Authorization: `Bearer ${localStorage.getItem("check_token")}`},
        url: `${base_url}users/update_user_location`,
        data
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: CALL_RESPONSE,
        payload: response.data
    })
}

export const updateVisibleOnMap = (data) => async dispatch => {
    let config = {
        method: 'post',
        headers: {Authorization: `Bearer ${token}`},
        url: `${base_url}users/update_visible_on_map`,
        data
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type:  CALL_RESPONSE,
        payload: response.data
    })
}



export const changePassword = (data) => async dispatch => {
    let config = {
        method: 'post',
        headers: {Authorization: `Bearer ${token}`},
        url: `${base_url}auth/change_password`,
        data
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: CHANGE_PASSWORD,
        payload: response.data
    })
}


export const logout = () => async dispatch => {
    const token = localStorage.removeItem("check_token")
    const current_user_id = localStorage.removeItem("current_user_id")

    dispatch({
        type: LOGOUT,
        payload: ''
    })
}


export const setCallResponse = (data) => async dispatch => {
    dispatch({
        type: CALL_RESPONSE,
        payload: data
    })    
}



// export const setUserToken = (data) => async dispatch => {
//     dispatch({
//         type: USER_TOKEN,
//         payload: data
//     })
// }


// export const removePhoneNumber= (data) => async dispatch => {
//     dispatch({
//         type: REMOVE_PHONE_NUMBER,
//         payload:data
//     })
// }
