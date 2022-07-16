import { Button, Dialog, DialogContent, DialogTitle } from '@mui/material';
import React from 'react';
import '../../styles.scss';
import HeaderTodo from './HeaderTodo'
import { Outlet } from 'react-router-dom';
import TodoFormUpdate from 'features/Auth/components/TodoFormUpdate';
import TodoFormCreate from 'features/Auth/components/TodoFormCreate';

Todo.propTypes = {};

function Todo(props) {

  const {handleIdIndexRIGHT } = props

  const [open, setOpen] = React.useState(false);
  const [update, setUpdate] = React.useState(false);

  const index = window.location.href

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
