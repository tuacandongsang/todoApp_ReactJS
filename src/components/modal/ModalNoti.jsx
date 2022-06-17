import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

ModalNoti.propTypes = {
    message: PropTypes.string.isRequired,
    setMessage: PropTypes.func.isRequired,
};

function ModalNoti(props) {
  const handleClose = () => {
    props.setMessage('');
  };
  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={!!props.message}
        fullWidth
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Thông báo
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>{props.message}</Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Đóng
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ModalNoti;
