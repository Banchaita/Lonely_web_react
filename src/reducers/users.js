import {
    GET_DISCOVER,
    GET_OTHER_USER_DATA,
    GET_SENT_REQUEST_DATA,
    GET_RECEIVED_REQUESTS_DATA,
    GET_BLOCK_USER_DATA,
    GET_MY_CONNECTION_LIST,
    GET_PROFILE_VERIFICATION_POSES,
    GET_USER_BY_LOCATION,
    GET_FAQ_DATA,
    CALL_RESPONSE,
    USER_PROFILE_FRIST_IMAGE_UPDATE,
    SET_OTHER_USER_ID
} from "../actions/types";


const initialState = {
    token: '',
    call_response: null,
    other_user_id: null,
    all_discover: [],
    request_data:[],
    received_data:[],
    other_user:[],
    block_user:[],
    connection_list:[],
    profile_poses:[],
    profile_first:[],
    faq_data:[],
    location_user:[]

};

export default (state = initialState, action) => {

    const { type, payload } = action;

    switch (type) {
        case GET_DISCOVER:
            return {
                ...state,
                all_discover: payload?.data
            };
            case GET_OTHER_USER_DATA:
                return {
                    ...state,
                    other_user:payload.data
                };
            case GET_SENT_REQUEST_DATA:
                return {
                    ...state,
                    request_data: payload?.data
                };
            case GET_RECEIVED_REQUESTS_DATA:
                return {
                    ...state,
                    received_data: payload.data
                };
            case GET_BLOCK_USER_DATA:
                return {
                    ...state,
                    block_user: payload.data
                };
            case GET_MY_CONNECTION_LIST:
                return {
                    ...state,
                    connection_list: payload.data
                };
            case GET_PROFILE_VERIFICATION_POSES:
                return {
                    ...state,
                    profile_poses: payload.data
                };
            case GET_FAQ_DATA:
                return {
                    ...state,
                    faq_data: payload.data
                };
            case GET_USER_BY_LOCATION:
                return {
                    ...state,
                    location_user: payload.data
                };
        case CALL_RESPONSE:
            return {
                ...state,
                call_response: payload
            };
        case USER_PROFILE_FRIST_IMAGE_UPDATE:
            return {
                ...state,
                profile_first: payload
            };
            case SET_OTHER_USER_ID:
                return {
                    ...state,
                  other_user_id: payload
                };
        default:
            return state;
    }
}
