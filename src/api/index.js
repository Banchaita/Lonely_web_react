import axios from "axios";
import { LOGOUT } from "../actions/types";

export const apiCall = (config, dispatch) => {
    return new Promise((resolve, reject) => {
        axios({
            method: config.method,
            url: config.url,
            headers: config.headers,
            data: config.data || {},
            timeout: 70000,
        })
        .then(async (response) => {
            resolve(response);
        })
        .catch(async (error) => {
            let response = error.response;
            if (response.status === 401) {
                localStorage.removeItem("token")
                dispatch({
                    type: LOGOUT,
                });
            }
            reject(error);
        });
    });
};