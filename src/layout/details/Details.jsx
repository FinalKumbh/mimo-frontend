import React, { Component, useEffect, useState } from 'react';
import "./Details.css";
import {  Redirect } from "react-router-dom";
import { details } from '../../util/APIUtils';

function Details(props) {
  if(props.authenticated) {
    return <Redirect
        to={{
        pathname: "/main",
        state: { from: this.props.location }
    }}/>;            
  }
  return (
    <div className="App">
      <div className="logininfotxt">
        <p> 님에 대한 고유한 스타일을 모아주세요</p>
      </div> 

      <div className="logininfosubtxt">
        <p>
          아름다워질 수 있도록 저희가 도와드릴게요. 
        </p>
      </div>

      <div className="skintypesection1"> 
        <p> 피부타입</p>
      </div>
      <DetailsForm {...props} />
    </div>
    
  );
}

function DetailsForm() {;
  
 
  const [skintype,skintone] = useState("");

  handleInputChange = handleInputChange.bind(this);
  handleSubmit = handleSubmit.bind(this);

  function handleInputChange(event) {
    const target = event.target;
    const inputName = target.name;        
    const inputValue = target.value;
    console.log(inputName)
    console.log(inputValue)
    // this.setState({
    //   [inputName] : inputValue
    // });        
  }

    function handleSubmit(event) {
        //event.preventDefault();   
        //console.log(this.state.skintype)
        
        const detailsRequest = Object.assign({}, this.state);

        details(detailsRequest)
        .then(response => {
            this.props.history.push("/main");
        }).catch(error => {
        });
    }

    return (
        <form onSubmit={handleSubmit}>
          <div className="skintyperow1"> 
            <div className="skintypebutton">
              <input type="radio" name="skintype" 
                placeholder="복합성"
                value="복합성" onChange={handleInputChange} required/>
              복합성
            </div>
              
            <div className="skintypebutton">
              <input type="radio" name="skintype" 
                placeholder="건성"
                value="건성" onChange={handleInputChange} required/>
                건성
            </div>
            <div className="skintypebutton">
              <input type="radio" name="skintype" 
                placeholder="지성"
                value="지성" onChange={handleInputChange} required/>
                지성
            </div>
            <div className="skintypebutton">
              <input type="radio" name="skintype" 
                placeholder="민감성"
                value="민감성" onChange={handleInputChange} required/>
                민감성
            </div>
            <div className="skintypebutton">
              <input type="radio" name="skintype" 
                placeholder="중성"
                value="중성" onChange={handleInputChange} required/>
                중성
            </div>
          </div>


          <div className="skintyperow3"> 
            <div className="skintonebutton">
              <input type="radio" name="skintone" 
                placeholder="봄웜"
                value="봄웜" onChange={handleInputChange} required/>
              봄웜
            </div>
              
            <div className="skintonebutton">
              <input type="radio" name="skintone" 
                placeholder="여름쿨"
                value="여름쿨" onChange={handleInputChange} required/>
                여름쿨
            </div>
            <div className="skintonebutton">
              <input type="radio" name="skintype" 
                placeholder="가을웜"
                value="가을웜" onChange={handleInputChange} required/>
                가을웜
            </div>
            <div className="skintonebutton">
              <input type="radio" name="skintype" 
                placeholder="겨울쿨"
                value="겨울쿨" onChange={handleInputChange} required/>
                겨울쿨
            </div>
            <div className="skintonebutton">
              <input type="radio" name="skintype" 
                placeholder="아직 모름"
                value="아직 모름" onChange={handleInputChange} required/>
                아직 모름
            </div>
            <div className="skintypebutton">
              <button type="submit" className="btn btn-block btn-primary" >Sign Up</button>
            </div>
          </div>
        </form>                    
        );
}


export default Details;