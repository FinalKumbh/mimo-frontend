import React, { useState } from 'react'
import '../naverlogin/src/App';
import '../naverlogin/src/App.css';
import NaverLogin from 'react-naver-login';

function Naver(){

    const buttonStyle = {
        backgroundColor: '#20c997',
    width: '140px',
    height: '32px',
    padding: '16px',
    margin: '100px auto',
    fontSize: '24px',
    fontWeight: 600,
    color: 'white',
    textAlign: 'center',
    cursor: 'pointer',
    border: '1px solid #dee2e6',
    borderRadius: '4px',
    }
    return (
      <div className="App">
        <NaverLogin 
          clientId="kpRDFcrQJ7pJIlfe4BLs"
          callbackUrl="http://127.0.0.1:3000/login"
          render={(props) => <div style={buttonStyle} onClick={props.onClick}>Naver Login</div>}
          onSuccess={(result) => console.log(result)}
          onFailure={(result) => console.error(result)}
        />
      </div>
    );
}

export default Naver;