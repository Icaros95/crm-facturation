import * as React from 'react';
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CustomerAdd = (props:any) => {
    // data basic
    const [fullName, setFullName] = useState('');
    const [mail, setMail] = useState('');
    const [phone, setPhone] = useState('');
    const [primaryCurrency, setPrimaryCurrency] = useState('');
    // direccionamiento de envio
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');   

    const [open, setOpen] = React.useState(false);


    const handleFormSubmit = async(e:any) => {
        e.preventDefault();
        addCustomer();

        setFullName('');
        setMail('');
        setPhone('');
        setPrimaryCurrency('');
        setCountry('');
        setState('');
        setCity('');
        setAddress('');
        setOpen(false);
    }

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setFullName('');
        setMail('');
        setPhone('');
        setPrimaryCurrency('');
        setCountry('');
        setState('');
        setCity('');
        setAddress('');
        setOpen(false);
    }

    const addCustomer = () => {
        const url = '/customer';
        const data:{} = {fullName, mail, phone, primaryCurrency, country, state, city, address};
        
        // fetch >> envio con post de nuevo cliente
        // fetch(url, {
        //     method: 'POST',
        //     headers: {'Content-type': 'application/json'},
        //     body: JSON.stringify(data)
        // })
        // .then((res) => res.json())
        // .then((data) => console.log(data))
        // .finally(() => props.stateRefresh())
        
        console.log(data);
        

    };


    return (
        <div>
            <Button onClick={handleClickOpen}>Add Customer</Button>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby='add-new-customer'
            aria-describedby='add new customer'
            >
                <Box sx={{ position: 'absolute' as 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 700, bgcolor: 'background.paper', border: '2px solir #000', boxShadow: 24, p: 4 }}>
                    <Typography id='modal-modal-title' variant='h6' component='h2'>
                        Add New Customer
                    </Typography>
                    <form onSubmit={handleFormSubmit}>
                        <h2>Data Basic</h2>
                        <div>
                            Full Name: <input type="text" name='fullName' value={fullName} onChange={(e) => {setFullName(e.target.value)}}/> <br />
                            Mail: <input type="text" name='mail' value={mail} onChange={(e) => {setMail(e.target.value)}}/> <br />
                            Phone: <input type="text" name='phone' value={phone} onChange={(e) => {setPhone(e.target.value)}}/> <br />
                            Primary Currency: <input type="text" name='primaryCurrent' value={primaryCurrency} onChange={(e) => {setPrimaryCurrency(e.target.value)}}/> <br />
                            Country: <input type="text" name='country' value={country} onChange={(e) => {setCountry(e.target.value)}}/> <br />
                            State: <input type="text" name='state' value={state} onChange={(e) => {setState(e.target.value)}}/> <br />
                            City: <input type="text" name='city' value={city} onChange={(e) => {setCity(e.target.value)}}/> <br />
                            Address: <input type="text" name='adress' value={address} onChange={(e) => {setAddress(e.target.value)}}/> <br />
                        </div>
                        <div>
                            <Button type='submit'>Add</Button>
                        </div>
                    </form>
                </Box>
            </Modal>
        </div>
    )
}

export default CustomerAdd;