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
import { logo } from 'img/SlideImages';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import CartHeader from './CartHeader';
import './styles.scss';
import styles from './header.module.scss'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Api_order } from 'axios/Axios';
import { useContext } from 'react';
import { ThemeUseContext } from 'ThemeuseContext/useContext';
import HeaderCart from './HeaderCart';


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

Header.propTypes = {};

function Header(props) {

  const [number, setNumber] = useState([])

  const { numberCart } = useContext(ThemeUseContext)
  // console.log(number);


  // const[update,setUpdate]=useState(0)
  let update = numberCart

  useEffect(() => {
    Api_order
      .getAll()
      .then(res => setNumber(res.data))
  }, [update])

  const result = number.reduce((total, num) => {
    return total + num.price * num.number
  }, 0)

  const [checkTodos, setCheckTodos] = useState('')

  const handleCheckTodo = (check) => {
    setCheckTodos(check)
  }

  return (
    <>
      <div className="custom-app-bar-fixed">
        {/* <div className={styles.header}>
          <button>ĐĂNG NHẬP</button>
          <img src={logo} />
          <CartHeader />
        </div> */}
        <AppBar position="static" className="custom-app-bar">
          <Toolbar className={styles.toolbar}>
            <div className="toolbar__item">
              {pages.map((page, i) => (
                <NavLink
                  key={i} to={page.path}
                  onClick={() => handleCheckTodo(page.name)}
                >
                  {page.name}
                </NavLink>
              ))}
            </div>
            {checkTodos === "Todos" ? (
              <HeaderCart type={number.length} totalprice={result} />
            ) : (<div></div>)}
          </Toolbar>
        </AppBar>
      </div>

    </>
  );
}

export default Header;
