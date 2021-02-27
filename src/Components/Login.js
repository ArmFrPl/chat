import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
// import GoogleLogin from './GoogleLogin';
// import GoogleLogout from './GoogleLogout';
import '../Styles/Login.css';

function Login(props) {
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  
  const history = useHistory();

  const handleUsernameChange = (e) => {
    setUsernameInput(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value);
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    let hardcodedCred = {
      username: 'test',
      password: 'pass'
    }

    if ((usernameInput === hardcodedCred.username) && (passwordInput === hardcodedCred.password)) {
      const token = '123456abcdef';
      sessionStorage.setItem('auth-token', token);
      props.onLoginChange(true);
      console.log(history)

      alert('loged in successfully')
      history.push(props.location);
    } else {
      alert('wrong username or password combination');
    }
  }
  
  return (
    <div className='container'>
      <form method="get" id="login-form" className="login-form" autoComplete="off" role="main">
        <h1 className="header">Login</h1>
        <div>
          <label className="label-username">
            <span className="required">Username</span>
            <input type="text" className="text" name="username" placeholder="Username" onChange={handleUsernameChange} />
          </label>
          </div>
        <div>
          <label className="label-password">
            <span className="required">Password</span>
            <input type="password" className="text" name="password" placeholder="Password" required onChange={handlePasswordChange} />
          </label>
        </div>
        <button className='submit' onClick={handleLoginSubmit} >Log in</button>
        {/* <GoogleLogin onLoginChange={props.onLoginChange} /> */}
        {/* <GoogleLogout /> */}
      </form>
    </div>
  );
}

export default Login;