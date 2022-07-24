import fetch from 'isomorphic-fetch';
import { API } from '../config';
import cookie from 'js-cookie'
import Router from 'next/router'

export const casa = data => {
    return fetch(`${API}/ratio/calculator/casa`, {
        method: 'POST',
        headers:{
            Accept: 'application/json',
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => {
        return response.json();
    }).catch(err => {
        console.log(err);
    })
}

export const cacl = data => {
    return fetch(`${API}/ratio/calculator/calculatecurrentassetsandliabilities`, {
        method: 'POST',
        headers:{
            Accept: 'application/json',
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => {
        return response.json();
    }).catch(err => {
        console.log(err);
    })
}

export const currentratiocal = data => {
    return fetch(`${API}/ratio/calculator/currentratio`, {
        method: 'POST',
        headers:{
            Accept: 'application/json',
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => {
        return response.json();
    }).catch(err => {
        console.log(err);
    })
}
