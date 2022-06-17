import { yupResolver } from '@hookform/resolvers/yup';
import { LockOutlined } from '@mui/icons-material';
import { Avatar, Button, CircularProgress, Typography } from '@mui/material';
import InputField from 'components/form-controls/InputField';
import PasswordField from 'components/form-controls/PasswordField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import './styles.scss';

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

function LoginForm(props) {
  const schema = yup.object({
    identifier: yup
      .string()
      .required('Địa chỉ email không được bỏ trống')
      .email('Địa chỉ email không hợp lệ, vui lòng điền lại'),
    password: yup.string().required('Password không được bỏ trống'),
  });

  const form = useForm({
    defaultValues: {
      identifier: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = async (val) => {
    const { handleSubmit } = props;
    if (handleSubmit) {
      await handleSubmit(val);
    }
  };
  const { isSubmitting } = form.formState;

  return (
    <div className="register">
      <Avatar className="register__avatar">
        <LockOutlined></LockOutlined>
      </Avatar>
      <Typography className="register__title">Sign In</Typography>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="identifier" form={form} label="Email" />
        <PasswordField name="password" form={form} label="Nhập mật khẩu" />
        <Button
          type="submit"
          variant="contained"
          disabled={isSubmitting}
          size="large"
          className="register__btn"
        >
          SIGN IN
          {isSubmitting && (
            <CircularProgress
              size={24}
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                marginTop: '-12px',
                marginLeft: '-12px',
              }}
            />
          )}
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
