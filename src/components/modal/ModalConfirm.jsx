import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

ModalConfirm.propTypes = {
    message: PropTypes.string.isRequired,
    answer: PropTypes.func.isRequired,
    setMessage: PropTypes.func.isRequired,
};

function ModalConfirm(props) {
  const handleClose = () => {
    props.setMessage('');
  };

  const handleSave = () => {
    props.answer();
    props.setMessage('');
  };
  return (
    <div>
      <Dialog
        open={!!props.message}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
      >
        <DialogTitle id="alert-dialog-title">Thông báo</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">{props.message}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSave}>Đồng ý</Button>
          <Button onClick={handleClose}>Hủy</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ModalConfirm;
