import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';
import PropTypes from "prop-types";

export const IconTypes = {
    Edit: 'edit',
    Close: 'close'
}

const Icon = ({ name, ...rest }) => {

    switch(name) {
        case IconTypes.Close: {
            return <CloseIcon {...rest } />
        }
        case IconTypes.Edit: {
            return <EditIcon {...rest } />
        }
        default:
            return 'Icon not supported'
    }
}


export default Icon;

Icon.propTypes = {
    name: PropTypes.string.isRequired
};