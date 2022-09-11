import {
    GET_DISCOVER,
    GET_OTHER_USER_DATA,
    GET_SENT_REQUEST_DATA,
    GET_RECEIVED_REQUESTS_DATA,
    GET_BLOCK_USER_DATA,
    GET_MY_CONNECTION_LIST,
    GET_PROFILE_VERIFICATION_POSES,
    GET_FAQ_DATA,
    GET_USER_BY_LOCATION ,
    DELETE_MODAL,
    BLOCK_USER,
    CALL_RESPONSE,
    SET_OTHER_USER_ID,
    USER_PROFILE_FRIST_IMAGE_UPDATE
} from './types';

import { base_url } from "../constants/const"
import { apiCall } from "../api";

const token = localStorage.getItem("check_token")

export const getAllDiscover = (data) => async dispatch => {
    let config = {
        method: 'post',
        headers: {Authorization: `Bearer ${token}`},
        url: `${base_url}users/get_discover_data`,
        data
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: GET_DISCOVER,
        payload: response.data
    })
}

export const getOtheruserdata = (_id) => async dispatch => {
    let config = {
        method: 'POST',
        headers: {Authorization: `Bearer ${token}`},
        url: `${base_url}users/other_user_detail`,
        data:_id
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: GET_OTHER_USER_DATA,
        payload: response.data
    })
}
export const getUserreqestdata = (data) => async dispatch => {
    let config = {
        method: 'post',
        headers: {Authorization: `Bearer ${data.token}`},
        url: `${base_url}users/get_sent_requests`
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: GET_SENT_REQUEST_DATA,
        payload: response.data
    })
}
export const getblockuserdata = (data) => async dispatch => {
    let config = {
        method: 'post',
        headers: {Authorization: `Bearer ${data.token}`},
        url: `${base_url}users/get_block_users`
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: GET_BLOCK_USER_DATA,
        payload: response.data
    })
}
export const getreceivedrequestdata = (data) => async dispatch => {
    let config = {
        method: 'post',
        headers: {Authorization: `Bearer ${data.token}`},
        url: `${base_url}users/get_received_requests`
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: GET_RECEIVED_REQUESTS_DATA,
        payload: response.data
    })
}
export const getMyConntectiondata = (data) => async dispatch => {
    let config = {
        method: 'post',
        headers: {Authorization: `Bearer ${data.token}`},
        url: `${base_url}users/get_my_connection_list`
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: GET_MY_CONNECTION_LIST,
        payload: response.data
    })
}
export const getProfileposes = (data) => async dispatch => {
    let config = {
        method: 'post',
        headers: {Authorization: `Bearer ${data.token}`},
        url: `${base_url}users/get_profile_verification_poses`
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: GET_PROFILE_VERIFICATION_POSES,
        payload: response.data
    })
}
export const getFaqdata = (data) => async dispatch => {
    let config = {
        method: 'post',
        headers: {Authorization: `Bearer ${data.token}`},
        url: `${base_url}users/get_faq`
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type:GET_FAQ_DATA,
        payload: response.data
    })
}
export const getLocationByUser = (data) => async dispatch => {
    // console.log('data--------------',data)
    let config = {
        method: 'post',
        headers: {Authorization: `Bearer ${data.token}`},
        url: `${base_url}users/get_user_by_location`,
        data
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type:GET_USER_BY_LOCATION,
        payload: response.data
    })
}

export const blockUserdata = (data) => async dispatch => {
    // console.log(data)
    let config = {
        method: 'post',
        headers: {Authorization: `Bearer ${localStorage.getItem("check_token")}`},
        url: `${base_url}users/block_user`,
        data
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: CALL_RESPONSE,
        payload: response.data
    })
}
export const unblockUserdata = (data) => async dispatch => {
    // console.log(data)
    let config = {
        method: 'post',
        headers: {Authorization: `Bearer ${localStorage.getItem("check_token")}`},
        url: `${base_url}users/block_user`,
        data
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: CALL_RESPONSE,
        payload: response.data
    })
}
export const searchUsername = (data) => async dispatch => {
    console.log(data)
    let config = {
        method: 'post',
        headers: {Authorization: `Bearer ${localStorage.getItem("check_token")}`},
        url: `${base_url}users/search_by_username`,
        data
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: GET_DISCOVER,
        payload: response.data
    })
}
export const searchUserConectionname = (data) => async dispatch => {
    console.log(data)
    let config = {
        method: 'post',
        headers: {Authorization: `Bearer ${localStorage.getItem("check_token")}`},
        url: `${base_url}users/search_by_username`,
        data
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: GET_MY_CONNECTION_LIST,
        payload: response.data
    })
}
export const searchUserrquestname = (data) => async dispatch => {
    console.log(data)
    let config = {
        method: 'post',
        headers: {Authorization: `Bearer ${localStorage.getItem("check_token")}`},
        url: `${base_url}users/search_by_username`,
        data
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: GET_SENT_REQUEST_DATA,
        payload: response.data
    })
}
export const deleleUserSendRequest = (data) => async dispatch => {
    // console.log(data)
    let config = {
        method: 'post',
        headers: {Authorization: `Bearer ${localStorage.getItem("check_token")}`},
        url: `${base_url}users/delete_sent_request`,
        data
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: CALL_RESPONSE,
        payload: response.data
    })
}
export const deleleUserConnection = (data) => async dispatch => {
    // console.log(data)
    let config = {
        method: 'post',
        headers: {Authorization: `Bearer ${localStorage.getItem("check_token")}`},
        url: `${base_url}users/delete_connection`,
        data
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: CALL_RESPONSE,
        payload: response.data
    })
}
export const userSetProfile = (data) => async dispatch => {
    // console.log(data)
    let config = {
        method: 'post',
        headers: {Authorization: `Bearer ${localStorage.getItem("check_token")}`},
        url: `${base_url}users/set_as_profile`,
        data
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: CALL_RESPONSE,
        payload: response.data
    })
}
export const updateGallleyOrder = (data) => async dispatch => {
    console.log('data==========',data)
    let config = {
        method: 'post',
        headers: {Authorization: `Bearer ${localStorage.getItem("check_token")}`},
        url: `${base_url}users/update_gallery_order`,
        data
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: CALL_RESPONSE,
        payload: response.data
    })
}
export const updateUserFCM = (data) => async dispatch => {
    console.log('data==========',data)
    let config = {
        method: 'post',
        headers: {Authorization: `Bearer ${localStorage.getItem("check_token")}`},
        url: `${base_url}users/update_user_fcm`,
        data
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: CALL_RESPONSE,
        payload: response.data
    })
}



export const setCallResponse = (data) => async dispatch => {
    dispatch({
        type: CALL_RESPONSE,
        payload: data
    })
    
}
export const profilefristimage = (data) => async dispatch => {
    dispatch({
        type: USER_PROFILE_FRIST_IMAGE_UPDATE,
        payload: data
    })
    
}


export const setOtherUserId = (id) => async dispatch => {
    dispatch({
        type:  SET_OTHER_USER_ID,
        payload: id
    })
}