import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory} from 'react-router';
import { userLogout } from '../../../redux/actions/userlogin.action';
import { Button } from '../../atoms';
import { ConfirmDialog } from '../../molecules';

import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      fontSize: 14,
      fontWeight: 'normal'
    },
  }));

const NavBar = props => {
    
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const { menuSettings, username, role } = useSelector(state => state.userlogin);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const [showProfile, setShowProfile] = useState(false);


    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        history.push('/profile');
        setAnchorEl(null);
    };
  
    function onClickHandler(e) {
        window.localStorage.access_token = ''
        window.localStorage.expiresIn = '';
        dispatch(userLogout())
        history.push('/login');
    }

    function onHandleMenuClick(menu) {
        history.push(menu);
    }

    function onShowProfile() {
        setAnchorEl(null);
        setShowProfile(true)
    }

    function onCloseProfile() {
        setShowProfile(false)
    }

    function getProfile() {
        return (
            <p>
                <b>Connected as:</b>{username}<br/>
                <b>Role: </b>{role}
            </p>
        )
    }
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    { username }
                </Typography>                
                    { menuSettings.map(({ menu, name }) => (                         
                                <Button text={name} onClick={() => onHandleMenuClick(`/${menu}`)} />
                            )
                    )}
                    <div>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                            <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                            }}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={() => onShowProfile()}>Profile</MenuItem>
                            <MenuItem onClick={onClickHandler}>Logout</MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>      
            { showProfile && 
                <ConfirmDialog 
                    confirmMesage={getProfile()}
                    title={'Profile'}
                    maxWidth={"sm"} 
                    fullWidth={true}
                    showCancelButton={false}
                    confirmButonText={`Ok`}
                    onClose={onCloseProfile}
                    onConfirmClick={onCloseProfile}
                    openPopup={showProfile} />}
        </div>
    )
}

export default NavBar;