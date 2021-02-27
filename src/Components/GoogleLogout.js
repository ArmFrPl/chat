import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId = '593236304001-1tsona927d3v9k2j4mej5snhn18a3881.apps.googleusercontent.com';

function LogoutHooks() {
  const onLogoutSuccess = res => {
    console.log('Logged out successfully :)');
    console.log(res)
  }

  const onFailure = res => {
    console.log('Handle failure cases');
  }

  return(
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText='Log Out'
        onLogoutSuccess={onLogoutSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        className='googleButton'
        isSignedIn={false}
      />
    </div>
  )
}

export default LogoutHooks;

