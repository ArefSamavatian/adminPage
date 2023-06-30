import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { BsPlus } from 'react-icons/bs'
import classes from './previewCategorys.module.css'

function PopUpcategory(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <BsPlus onClick={handleClickOpen} style={{width:'20px',height:'20px'}}>

            </BsPlus>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle > نام پوشه </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We
                        will send updates occasionally.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="نام"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                  
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>خروج</Button>
                    <Button onClick={handleClose}>ثبت</Button>
                </DialogActions>
            </Dialog>

        </div>
    );
}

export default PopUpcategory;