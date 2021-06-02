import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function SearchBox({ placeholder='', value='', onClick=f=>f }) {
  
  const [ search, setSearch ] = useState(value)
  const classes = useStyles();

  function onSearchChange(e) {    
    setSearch(e.target.value)
  }

  function onClickHandler(e) {
    e.preventDefault();   
    onClick(search);
  }

  return (<form onSubmit={onClickHandler} >
    <Paper component="form" className={classes.root}>  
      <InputBase
        className={classes.input}
        onChange={onSearchChange}
        value={search}
        placeholder={placeholder}
      />
      <IconButton 
        onClick={onClickHandler}
        type="submit" 
        className={classes.iconButton} 
        aria-label="search">
        <SearchIcon  />
      </IconButton>    
      
    </Paper>
    </form>  
  );
}
