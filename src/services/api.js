import axios from 'axios';

export const api = () => 
     axios.create({               
       baseURL: `http://localhost:51044/api/`,
        responseType: "json",
        contentType: "application/json",
        headers: {
            // Authorization: `Bearer ${window.localStorage.access_token ? window.localStorage.access_token : ''}`
            Authorization: `${window.localStorage.access_token ? window.localStorage.access_token : ''}`
        },
    });


export const apiPaths = {
    users: `/users`,
    user: `/users/:id`,
    signin: `/auth/signin`,
    userbalances: `/userbalances`,
    userbalance: `/userbalances/:id`,
    services: `/services`,
    service: `/services/:id`,
    records: `/records`,
    record: `/records/:id`,
};
