import { useHistory } from 'react-router-dom';
import { useDispatch  } from 'react-redux';
import * as userloginActions from '../redux/actions/userlogin.action';

export const getError = error => {

   // const dispatch = useHistory();

    const { response: { status, data }} = error;

    switch(status) {
        case 401: {
            // dispatch(userloginActions.userLogout())
            // return <Redirect to="/login" />
        }        
    }

    return data.error;
}