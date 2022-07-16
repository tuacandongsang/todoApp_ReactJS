import { Logout, Settings } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import { Button, ListItemIcon } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Register from 'features/Auth/components/Register/index';
import { logout } from 'features/Auth/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import './styles/index.scss';
import './styles.scss';

function Login() {
    const [anchorElUser, setAnchorElUser] = useState(null);
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [mode, setMode] = useState(MODE.LOGIN);
    const loggedInUser = useSelector((state) => state.user.current);
    const handleLogoutClick = () => {
        const action = logout();
        dispatch(action);
        handleCloseUserMenu();
    };
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const isLoggedIn = !!loggedInUser.id;

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const MODE = {
        LOGIN: 'login',
        REGISTER: 'register',
    };


    return (
        <>
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
        </>
    );
}

export default Login;