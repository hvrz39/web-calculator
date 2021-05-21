import { useState } from 'react';
import PropTypes from 'prop-types';
import { produce } from 'immer';

const useFormFields = initialState => {
    const [fields, setFields] = useState(initialState);
    
    return [
        fields,
        function(event){
            setFields(produce(fields, draft => {                             
                draft[event.target.name] = event.target.value               
            }))
        },
        setFields
    ];

};

export default useFormFields;

useFormFields.PropTypes = {
    fields: PropTypes.array.isRequired
}