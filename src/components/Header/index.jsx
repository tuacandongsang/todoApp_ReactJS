import { Logout, Settings } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import { Button, ListItemIcon } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Login from 'features/Auth/components/Login';
import Register from 'features/Auth/components/Register/index';
import { logout } from 'features/Auth/userSlice';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './styles.scss';

const pages = [
  {
    name: 'Trang chủ',
    path: '/home',
  },
  {
    name: 'Giới thiệu',
    path: '/Introduce',
  },
  {
    name: 'Todos',
    path: '/todos',
  },
  {
    name: 'Employee',
    path: '/employee',
  },
  {
    name: 'Cham Cong',
    path: '/chamcong',
  },
];
const MODE = {
  LOGIN: 'login',
  REGISTER: 'register',
};
Header.propTypes = {};

function Header(props) {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const loggedInUser = useSelector((state) => state.user.current);
  const isLoggedIn = !!loggedInUser.id;
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(MODE.LOGIN);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleLogoutClick = () => {
    const action = logout();
    dispatch(action);
    handleCloseUserMenu();
  };
  return (
    <>
      <div className="custom-app-bar-fixed">

        <AppBar position="static" className="custom-app-bar">
          <Toolbar className="toolbar">
            <div className="toolbar__icon">
              <img src="https://xuanthanhphat.vn/wp-content/uploads/2021/10/logo.png" className='logo__xtp' />
            </div>
            <div className="toolbar__item">
              {pages.map((page, i) => (
                <NavLink key={i} to={page.path}>
                  {page.name}
                </NavLink>
              ))}
            </div>
            <div className="toolbar__right">
              {!isLoggedIn && (
                <Button color="inherit" onClick={handleClickOpen}>
                  Login
                </Button>
              )}
              {isLoggedIn && (
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="User">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: '45px' }}
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">Thông tin</Typography>
                    </MenuItem>
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">Đổi mật khẩu</Typography>
                    </MenuItem>
                    <MenuItem onClick={handleCloseUserMenu}>
                      <ListItemIcon>
                        <Settings fontSize="small" />
                      </ListItemIcon>
                      <Typography textAlign="center">Cài đặt</Typography>
                    </MenuItem>
                    <MenuItem onClick={handleLogoutClick}>
                      <ListItemIcon>
                        <Logout fontSize="small" />
                      </ListItemIcon>
                      <Typography textAlign="center">Đăng xuất</Typography>
                    </MenuItem>
                  </Menu>
                </Box>
              )}
            </div>
          </Toolbar>
        </AppBar>
        <Dialog
          open={open}
          onClose={handleClose}
          disableEscapeKeyDown
          aria-labelledby="alert-dialog-title"
          className="dialog"
        >
          <IconButton className="dialog__btn-close" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
          <DialogContent>
            {mode === MODE.LOGIN && (
              <>
                <Login closeDialog={handleClose} />
                <Box textAlign="center">
                  <Button color="primary" onClick={() => setMode(MODE.REGISTER)}>
                    Don't have an account. Register here
                  </Button>
                </Box>
              </>
            )}
            {mode === MODE.REGISTER && (
              <>
                <Register closeDialog={handleClose} />
                <Box textAlign="center">
                  <Button color="primary" onClick={() => setMode(MODE.LOGIN)}>
                    Already have an account. Login here
                  </Button>
                </Box>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>

    </>
  );
}

export default Header;
