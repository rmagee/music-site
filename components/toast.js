import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} {...props} />;
});

export default function Toast(props) {
    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Stack spacing={2} sx={{width: '100%'}}>
            <Snackbar open={props.open && open} autoHideDuration={6000} onClick={handleClose}
                      anchorOrigin={{ vertical: 'top', horizontal: 'center' }} key={'top' + 'center'}>
                <Alert onClose={handleClose} sx={{backgroundColor: "fff", width: '100%'}} severity="error" variant="filled">
                    {props.message}
                </Alert>
            </Snackbar>
        </Stack>
    );
}