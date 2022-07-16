import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@mui/material';
import InputField from 'components/form-controls/InputField';
import PasswordField from 'components/form-controls/PasswordField';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

TodoForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  valEdit: PropTypes.object,
  data: PropTypes.object,
};

function TodoForm(props) {
  const schema = yup.object({
    name: yup.string().required(),
    status: yup.string().required(),
  });
  const form = useForm({
    defaultValues: {
      name: '',
      status: '',
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = (val) => {
    console.log(val);
    props.handleSubmit(val);
  };

  useEffect(() => {
    if (props.data) {
      const fields = ['name', 'status'];
      fields.forEach((field) => form.setValue(field, props.data[field]));
    }
  }, [form, props.data]);

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField name="name" form={form} label="Name" />
      <InputField name="status" form={form} label="Status" />
      <Button type="submit">Đăng kí</Button>
    </form>
  );
}

export default TodoForm;
