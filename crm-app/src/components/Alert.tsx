//import * as React from 'react';
import MuiAlert from '@mui/material/Alert';
import { AlertProps } from '@mui/material';
import Stack from '@mui/material/Stack';

export default function Alert(props: AlertProps) {
    return (
        <Stack sx={{ width: '100%' }} spacing={2}>
            <MuiAlert elevation={6} variant='filled' {...props} />
        </Stack>
    );
};