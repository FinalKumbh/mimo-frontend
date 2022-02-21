import React, {Component, useEffect, useState} from 'react';
import "./Details.css";
import {Redirect, NavLink} from "react-router-dom";
import {details} from '../../util/APIUtils';
import Alert from 'react-s-alert';

function Cart(props) {
    if (props.authenticated) {
        return <Redirect
            to={{
                pathname: "/main",
                state: {
                    from: props.location
                }
            }}/>;
    }
    return (
        <div className="App">
            <div className="logininfotxt">
                <p>
                    {props.currentUser.name}님, 오늘도 예쁜 하루 보내세요</p>
            </div>

            <div className="logininfosubtxt">
                <p>
                   아이탬 구매 항목
                </p>
            </div>

            <div className="skintypesection1">
                <p>
                    피부타입</p>
            </div>
            <DetailsForm {...props}/>
        </div>

    );
}

function DetailsForm() {;

    // const [skintype,skintone] = useState(""); useState 1
    const [skintype, setSkintype] = useState("");
    const [skintone, setSkintone] = useState("");

    // handleInputChange = handleInputChange.bind(this); handleSubmit =
    // handleSubmit.bind(this);

    function handleInputChange(event) {
        const target = event.target;
        const inputName = target.name;
        const inputValue = target.value;
        // const [inputName, setInputName] = useState(target.name);
        // const [inputValue, setInputValue] = useState(target.value);

        // setInputName(inputValue);
        // const inputName = target.name; const inputValue = target.value; useState 2
        // setSkintype( skintype );

        if (inputName==skintype){
          setSkintype(inputValue);
        }else{
          setSkintone(inputValue);
        }

        console.log(inputName);
        console.log(inputValue);
        // this.setState({   [inputName] : inputValue });
    }

    const handleSubmit = (event) => {
        event.preventDefault(); 
        //console.log(this.state.skintype) const detailsRequest
        // = Object.assign({}, this.state);
        const detailReqeust = Object.assign({}, {skintype, skintone})
        //useState 3
        // TODO 아래 2줄을  useState로 제대로 값을 가져와서 details함수에 넘겨주기 const skintype =
        // document.querySelector("input[name=skintype]:checked").value; const skintone
        // = document.querySelector("input[name=skintone]:checked").value; details(
        // {skintype, skintone} )
        details(detailReqeust)
            .then(response => {
                this
                    .props
                    .history
                    .push("/main");
            })
            .catch(error => {
                Alert.error(error && error.message);
            });
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="skintypebutton">
            <div className="skintyperow1" > 
                    <button type="submit" className='submitButton1' onChange={handleInputChange}   required="required" >복합성</button>
                    <button type="submit" className='submitButton1'  onChange={handleInputChange}   required="required" >건성</button>
                    <button type="submit" className='submitButton1'  onChange={handleInputChange}   required="required" >지성</button>
                </div>
                <div className='skintyperow2'>
                <button type="submit" className='submitButton1'  onChange={handleInputChange}   required="required" >민감성</button>
                <button type="submit"  className='submitButton1' onChange={handleInputChange}   required="required" >중성</button>
                </div>
            </div>

            <div className="skintypesection2">
                <p>
                    피부톤</p>
            </div>

            <div className="skintonebutton" >
                <div className="skintyperow3" > 
                    <button type="submit" className='submitButton2'  onChange={handleInputChange}   required="required"x >봄웜</button>
                    <button type="submit" className='submitButton2'   onChange={handleInputChange}   required="required" >여름쿨</button>
                    <button type="submit" className='submitButton2'   onChange={handleInputChange}   required="required" >가을웜</button>
                </div>
                <div className='skintyperow4'>
                <button type="submit" className='submitButton2'   onChange={handleInputChange}   required="required" >겨울쿨</button>
                <button type="submit" className='submitButton2'   onChange={handleInputChange}   required="required" >아직모름</button>
                </div>

                <NavLink to="/main">  <button type="submit" className="btn btn-block btn-primary">저장</button></NavLink>

                  
             
            </div>
        </form>
    );
}

export default Cart;