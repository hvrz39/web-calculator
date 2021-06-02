

export const getError = error => {
    
    const { response} = error;

    if(!response) {        
        return error.message;
    }

    const { status, data } = response;
    switch(status) {
        case 401: {
            // dispatch(userloginActions.userLogout())            
        }        
    }

    return data.error;
}