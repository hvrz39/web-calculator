import axios from 'axios';

export const api = () => 
     axios.create({               
       baseURL: `http://localhost:51044/api/`,
        responseType: "json",
        contentType: "application/json",
        headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwidXNlcm5hbWUiOiJyemhvcmFjaW92QGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsInN0YXR1cyI6ImFjdGl2ZSIsImlhdCI6MTYyMTM5NzA2MSwiZXhwIjoxNjIxNDgzNDYxfQ.jeQU0EGVeaRxgB9cnXPccGNbrnuXZPKt_VNnW1amDlw`,
        },
    });


export const apiPaths = {
    users: `/users`,
    signin: `/auth/signin`
};
