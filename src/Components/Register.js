import React from 'react';
import '../Styles/Login.css'

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='container'>
        <form method="get" id="login-form" className="login-form" autoComplete="off" role="main">
          <h1 className="header">Register</h1>
          <div>
            <label className="label-username">
              <span className="required">Username</span>
              <input type="text" className="text" name="username" placeholder="Username" />
            </label>
          </div>
          <div>
            <label className="label-email">
              <span className="required">Email</span>
              <input type="email" className="text" name="email" placeholder="Email" />
            </label>
            </div>
          <div>
            <label className="label-password">
              <span className="required">Password</span>
              <input type="password" className="text" name="password" placeholder="Password" required />
            </label>
          </div>
          <button className='submit' >Log in</button>
        </form>
      </div>
    );
  }
}