import React, { Component, useEffect, useState } from 'react';
import {  Redirect } from "react-router-dom";
import { details } from '../../util/APIUtils';
import Alert from 'react-s-alert';

function ItemAdd(props) {
  if(props.authenticated) {
    return <Redirect
        to={{
        pathname: "/main",
        state: { from: this.props.location }
    }}/>;            
  }
  return (
    <div className="App">
      상품등록
    </div>
    
  );
}


export default ItemAdd;