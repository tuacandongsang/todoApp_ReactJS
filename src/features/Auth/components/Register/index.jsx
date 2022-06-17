import { unwrapResult } from '@reduxjs/toolkit';
import { register } from 'features/Auth/userSlice';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import RegisterForm from '../RegisterForm/index';
Register.propTypes = {
  closeDialog: PropTypes.func,
};

function Register(props) {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();

  const handleSubmit = async (val) => {
    try {
      val.username = val.email;
      const action = register(val);
      const resultAction = await dispatch(action);
      unwrapResult(resultAction);

      //close dialog
      const { closeDialog } = props;
      if (closeDialog) {
        closeDialog();
      }

      enqueueSnackbar('I love hooks', { variant: 'success' });
    } catch (error) {
      console.log(error,"error");
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };
  return <RegisterForm handleSubmit={handleSubmit} />;
}

export default Register;
