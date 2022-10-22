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

export function setSkin({email, skinType, skinTone}) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }
    return axios
        .post(API_BASE_URL + `/user/skin/${email}`, {
            skinType,
            skinTone
        })
}

export function getItemById({itemId}){
    return axios
        .get(API_BASE_URL + `/item/${itemId}`)
}

export function getItems(){
    return axios
        .get(API_BASE_URL + "/item/view")
}

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

export function details() {
    return axios.get( API_BASE_URL + "/home" ).then( res => {
        console.log(res);

    });
}




export function cart() {
    return request({
        url: API_BASE_URL + "/cart",
        method: 'GET'
    });
}


export function setItem({email,item_id, itemType, itemTone}) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }
    return axios
        .post(API_BASE_URL + `/item/${item_id}` , {
            itemType,
            itemTone,
            item_id
        })
}
