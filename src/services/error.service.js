

export const getError = error => {

    const { response: { status, data }} = error;

    switch(status) {
        case 401: {
            // dispatch(userloginActions.userLogout())
            // return <Redirect to="/login" />
        }        
    }

    return data.error;
}