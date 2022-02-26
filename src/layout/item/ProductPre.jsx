
import React, { Component, useEffect, useState } from 'react';
import {Redirect, NavLink} from "react-router-dom";
import {product,  setItem} from '../../util/APIUtils';
import Alert from 'react-s-alert';
import './product.css'


const ItemTitleParentComponent = () => { 
    function AlertFunc(Title){
      alert(Title);
    }
    return (
      <div>
        <b> ParentComponent Title: 립스틱이름</b>
        <ItemTitleChildComponent Title={립스틱이름1} AlertFunc={AlertFunc}/>
  
      </div>
    )
   };
  const ItemTitleChildComponent = (props) => {
    return (
      <div>
        <hr/>
        <b>ChildComponent Tilte: {props.Title}</b>
        <button 
        onClick={() => {
          props.AlertFunc(props.Title);
        }}>
            props전달
        </button>
      </div>
    )
  }