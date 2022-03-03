import React, {Component, useEffect, useState} from 'react';
import "./Details.css";
import {Redirect} from "react-router-dom";
import {details} from '../../util/APIUtils';
import Alert from 'react-s-alert';
import {BUY} from '../../constants';

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
            <div class="iteminfotext" style="width:450px; height:150px;">
            <p>롬앤</p>
            <p>롬앤 제로 벨벳 틴트 #오리지널시리즈</p>
            <p>무료배송</p>
        </div>
            <div className="skintypesection1">
            <div class="graytext" alt="" style="width:450px; height:150px;" >
            <div class="graytextitem">롬앤 제로 벨벳 틴트 #오리지널시리즈</div> 
             <div class="graytextprice">8400원</div>
        </div>
                <p>피부타입</p>
            </div>

            <div class="totalprice"> 
     
            <p>최종결제금액</p>
        </div>
        <hr/>
        <div class="itemprice">
            <p> 결제금액</p>
        </div>
        <hr/>
        <hr />
          <div class="icon"> 

          <a className="buybutton" href={BUY}>  <img src={process.env.PUBLIC_URL+`assets/image/buybutton.png`}  /></a>

 
          </div>
            <DetailsForm {...props}/>
        </div>

    );
}

function DetailsForm() {;

    const [skintype, setSkintype] = useState("");
    const [skintone, setSkintone] = useState("");

 

    function handleInputChange(event) {
        const target = event.target;
        const inputName = target.name;
        const inputValue = target.value;
      

        if (inputName==skintype){
          setSkintype(inputValue);
        }else{
          setSkintone(inputValue);
        }

        console.log(inputName);
        console.log(inputValue);
 
    }

    const handleSubmit = (event) => {
        event.preventDefault(); 
 
        const detailReqeust = Object.assign({}, {skintype, skintone})
     
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

            
                    <button type="submit" className="btn btn-block btn-primary">저장</button>
             
            </div>
        </form>
    );
}

export default Cart;