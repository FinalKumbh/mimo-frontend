import React, { useState } from 'react'
import { GoogleLogin } from '../googlelogin/src'
import { GoogleLogout } from '../googlelogin/src'


const clientId = '1087230567642-cfb1blqjbcs4i8bdqq16l38t3pqk7n41.apps.googleusercontent.com'

const success = response => {
  console.log(response) // eslint-disable-line
}

const error = response => {
  console.error(response) // eslint-disable-line
}

const loading = () => {
  console.log('loading') // eslint-disable-line
}

const logout = () => {
  console.log('logout') // eslint-disable-line
}

const MountTest = () => {
  const [showButton, toggleShow] = useState(true)

 

  return <button onClick={() => toggleShow(true)}>show button</button>
}

export default () => (
  <div>
    <MountTest />
 
 
    <br />
    <GoogleLogin theme="dark" style={{ background: 'blue' }} onSuccess={success} onFailure={error} clientId={clientId} />
    <br />
    <br />
    <GoogleLogout buttonText="Logout" onLogoutSuccess={logout} />
  </div>
)
