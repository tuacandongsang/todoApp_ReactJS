import { Button, Dialog, DialogContent, DialogTitle } from '@mui/material';
import React, { useEffect } from 'react';
import TodoFormCreate from './components/TodoFormCreate';
import TodoFormUpdate from './components/TodoFormUpdate';
import './styles.scss';
import HeaderTodo from './HeaderTodo'
import { Outlet } from 'react-router-dom';

Todo.propTypes = {};

function Todo(props) {

  const {handleIdIndexRIGHT } = props

  const [open, setOpen] = React.useState(false);
  const [update, setUpdate] = React.useState(false);

  const index = window.location.href
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [index]);

  const handleClickCreate = () => {
    setOpen(true);
    setUpdate(false);
  };
  const handleClickUpdate = () => {
    setOpen(true);
    setUpdate(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (

    <>
      <div className="todo">
        <div className="todo__title">Todos</div>
          < HeaderTodo handleIdIndexRIGHT={handleIdIndexRIGHT} />
        <Button variant="contained" onClick={() => handleClickCreate()}>
          Create
        </Button>
        <Button variant="contained" onClick={() => handleClickUpdate()}>
          Update
        </Button>

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Update</DialogTitle>
          <DialogContent>{update ? <TodoFormUpdate /> : <TodoFormCreate />}</DialogContent>
        </Dialog>
      </div>

      <div>
        <Outlet />
      </div>
    </>


  );
}

export default Todo;
