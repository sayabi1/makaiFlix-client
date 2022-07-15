import React, {useState} from 'react';
import {Form, Button,Card,CardGroup } from 'react-bootstrap';


import './registration-view.scss'
import axios from 'axios';

export function RegistrationView (props){
    const [ username, setUsername] = useState('');
    const [ password, setPassword] = useState('');
    const [email, setemail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://makai-flix-db.herokuapp.com/users', {
            username:username,
            password:password,
            Email:email
        })
        .then(response => {
            const data = response.data;
            console.log(data);
            window.open('/', '_self');
            /* the second argument_self is important
            so that the page will open in the new page.
            */
        })
        .catch(e => {
            console.log('error registering the user ');
            alert('something was not entered right');
        });
    };

    return (
        <Form>
            <Form.Group>
                <Form.Label>Username:</Form.Label>
                <Form.Control
                type='text'
                value={username}
                onChange={e => setUsername(e.target.value)}
                required 
                placeholder='Enter a valid Username'
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                type='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                minLength='8' />
            </Form.Group>
          
            <Form.Group className="group">
                <Form.Label>Email <address></address></Form.Label>
                <Form.Control
                type='email'
                value={email}
                onChange={e => setemail(e.target.value)}
                required />
            </Form.Group>

            <Button variant="primary" type="submit"
             onClick={handleSubmit}>
                Submit
             </Button>
             </Form>
    )

}