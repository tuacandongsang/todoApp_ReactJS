import { Button, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from '../../Todo.module.scss'
import React, { useEffect, useState } from 'react';
import PopupState, { bindMenu, bindTrigger } from 'material-ui-popup-state';
import { Api_stores } from "axios/Axios";

const listTodo = [
    {
        name: 'Reactjs',
        url_todos: '/todos/React',
    },
    {
        name: 'HTML',
        url_todos: '/todos/HTML',
    },
    {
        name: 'CSS',
        url_todos: '/todos/CSS',
    },
    {
        name: 'JAVASCRIPT',
        url_todos: '/todos/JAVASCRIPT',
    },
    {
        name: 'PHP',
        url_todos: '/todos/PHP',
    },

]
function HeaderTodo(props) {

    const handleIdIndexRIGHT = (id) =>{
        props.handleIdIndexRIGHT(id)
    }

    const [listTodos, setlistTodos] = useState(listTodo)

    useEffect(() => {
        Api_stores
            .getAll()
            .then(res => 
                // console.log(res.data)
                setlistTodos(res.data)
                )
    }, [listTodo])

    return (
        <>
            <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                    <React.Fragment>
                        <Button variant="contained" {...bindTrigger(popupState)}>
                            Danh sach khoa hoc
                        </Button>
                        <Menu {...bindMenu(popupState)}>
                            {listTodos.map((list) => (
                                <Link
                                    key={list.name}
                                    className={styles.hoverNavLink_Nav}
                                    to={list.url_todos}
                                    onClick={() => handleIdIndexRIGHT(list.id)}
                                >
                                    <MenuItem onClick={popupState.close}>{list.name}</MenuItem>
                                </Link>
                            ))}
                        </Menu>
                    </React.Fragment>
                )}
            </PopupState >
        </>
    )
}
export default HeaderTodo;