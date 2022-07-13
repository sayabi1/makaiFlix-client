import React, {useState} from 'react';

export function LoginView (props){
    const [ username, setUsername] = useState('');
    const [ password, setPassword] = useState('');

    const handelSubmit = (e) => {
        e.preventDefault();
        console.log(username, password);
        /* send arequest to the server for authentication */
        /* than call props.onLoggedIn(username) */
        // props.onLoggedIn(username);
    }
    
    }
     return(
            <form>
                <label>
                    Username:
                    <input type="text" value={this.state.username} onChange={this.onUsernameChange}/>
                </label>
                <label>
                    password:
                    <input type="password" value={this.state.password} onChange={this.onPasswordChange}/>
                </label>
                <button type="button" onClick={this.handelSubmit}>Submit</button>
            </form>
        );
   
