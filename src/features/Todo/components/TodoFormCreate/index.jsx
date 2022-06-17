import TodoForm from 'features/Todo/components/TodoForm';
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { SnackbarProvider, VariantType, useSnackbar } from 'notistack';


TodoFormCreate.propTypes = {
  handleSubmit: PropTypes.func,
};

function TodoFormCreate(props) {
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmit = (val) => {
    axios
      .post('https://api-fake-todo.herokuapp.com/api/tasks', val)
      .then(
        enqueueSnackbar('This is a success message!', { variant: "success" })
      )
      .catch((err) => console.log(err));
  };
  return (
    <div>
      TodoFormCreate:
      <TodoForm handleSubmit={handleSubmit} />
    </div>
  );
}

export default TodoFormCreate;
