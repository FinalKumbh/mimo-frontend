import { API_BASE_URL, ACCESS_TOKEN } from '../constants';
import axios from 'axios';

const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })
    
    if(localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
    }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
    .then(response => 
        response.json().then(json => {
            if(!response.ok) {
                return Promise.reject(json);
            }
            return json;
        })
    );
};

export function getCurrentUser() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/user/me",
        method: 'GET'
    });
}

export function login(loginRequest) {
    return request({
        url: API_BASE_URL + "/auth/login",
        method: 'POST',
        body: JSON.stringify(loginRequest)
    });
}

export function signup(signupRequest) {
    return request({
        url: API_BASE_URL + "/auth/signup",
        method: 'POST',
        body: JSON.stringify(signupRequest)
    });
}

export function details(detailsRequest) {
    return axios.get( API_BASE_URL + "/home" ).then( res => {
        console.log(res);

    });

    //아래 부분은 기존소스용으로 참고 axios 익숙해지고 백엔드랑 통신이 완벽하게 될경우 삭제
    // return request({
    //     url: API_BASE_URL + "/user/details/update",
    //     method: 'PUT',
    //     body: JSON.stringify(detailsRequest)
    // });
}

export function home2() {
    return request({
        url: API_BASE_URL + "/home2",
        method: 'GET'
    });
}