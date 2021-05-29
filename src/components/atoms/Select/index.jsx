import React, { useState, useEffect } from 'react';
import { useQuery, useQueryClient } from 'react-query';

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

const MySelect =  props => {

    const { 
        label, 
        name, 
        value, 
        onChange, 
        dataSourceId='',
        fetchDataSource=null,
        dataField='',
        dataText='',
        options, 
        ...rest } = props;

        const [ listItems, setListItems ] = useState(options ?? null)
        const shouldFetchData = dataSourceId !== '' 
                                && fetchDataSource !== null
                                && dataField !== ''
                                && dataText !== '';

        const { 
            data, 
            isLoading,           
            isFetching 
        } = useQuery(
                    [dataSourceId], async () => await fetchDataSource(), 
                    { staleTime: 2000, refetchOnWindowFocus: shouldFetchData, enabled: shouldFetchData  }
                );    

        useEffect(() => {
            if(!isLoading && shouldFetchData) {
                const { rows } = data;
                if(rows) {  
                    setListItems(rows.map(r => ({ value: r[dataField], label: r[dataText]})))
                }
            }
        }, [isLoading, data])

    return (
        <FormControl variant="outlined">
            <InputLabel>{label}</InputLabel>
            <Select
                                                                  
                    label={label}
                    name={name}
                    value={value}       
                    onChange={onChange}                
                    {...rest}
                    defaultValue=""
                    inputProps={{
                        name: name,
                        id: name,
                        "data-testid": `select-input`,
                      }}
                >
                {listItems && listItems.map((option) => (
                        <MenuItem                            
                            key={option.value} 
                            value={option.value + ""}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
        </FormControl>
        )
}

export default MySelect;