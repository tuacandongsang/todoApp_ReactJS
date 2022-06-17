import { yupResolver } from '@hookform/resolvers/yup';
import { LockOutlined } from '@mui/icons-material';
import { Avatar, Button, CircularProgress, Typography } from '@mui/material';
import InputField from 'components/form-controls/InputField';
import PasswordField from 'components/form-controls/PasswordField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import "./styles.scss";

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

function RegisterForm(props) {
  const schema = yup.object({
    email: yup
      .string()
      .required('Địa chỉ email không được bỏ trống')
      .email('Địa chỉ email không hợp lệ, vui lòng điền lại'),
    fullName: yup
      .string()
      .required('Tên không được bỏ trống')
      .test('Tên ít nhất 2 kí tự', 'Tên phải có ít nhất 2 kí tự', (val) => {
        return val.split(' ').length >= 2;
      }),
    password: yup.string().required('Password không được bỏ trống'),
    retypePassword: yup
      .string()
      .required('Password không được bỏ trống')
      .oneOf([yup.ref('password')], 'Password không khớp'),
  });

  const form = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      retypePassword: '',
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = async (val) => {
    const { handleSubmit } = props;
    if (handleSubmit) {
      await handleSubmit(val);
    }
  };
  const cancleForm = () => {
    // form.reset();
  };
  const { isSubmitting } = form.formState;

  return (
    <div className="register">
      <Avatar className="register__avatar">
        <LockOutlined></LockOutlined>
      </Avatar>
      <Typography className="register__title">
        Create An Account
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="email" form={form} label="Email" />
        <InputField name="fullName" form={form} label="FullName" />
        <PasswordField name="password" form={form} label="Nhập mật khẩu" />
        <PasswordField name="retypePassword" form={form} label="Nhập lại mật khẩu" />
        <Button type="submit" variant="contained" className="register__btn" disabled={isSubmitting} size="large">
          Đăng kí tài khoản
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

export default RegisterForm;
