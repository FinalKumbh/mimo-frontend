import React, {Component, useEffect, useState} from 'react';

import {Redirect,  NavLink } from "react-router-dom";

import {BUY} from '../../constants';
import { FooterNav } from '../nav/FooterNav';
import { HeaderNav } from '../nav/HeaderNav';



function Cart(props ) {
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
        <div className="Cart">
 
            <HeaderNav/>
  

            <div className="logininfotxt">
                <p>
                    {props.currentUser.name}님, 오늘도 예쁜 하루 보내세요</p>
            </div>

            <div className="logininfosubtxt">
                <p>
                   아이탬 구매 항목
                </p>
            </div>
            <CartForm {...props}/>
        </div>

    );
}

function CartForm() {;
    return (
        <div> 
     
            <hr/>   
     
        {/* <img className="product_prod" src={ imgUrl}  }/> */}
                {/* <p className='itemTitle'>{items.itemId}{items.itemName}</p> */}

        {/* <div className="graytextitem">롬앤 제로 벨벳 틴트 #오리지널시리즈</div>  */}

        <div className="graytextitem">롬앤 제로 벨벳 틴트 #오리지널시리즈</div> 
        {/* <div className="graytextprice">8400원</div> */}
        {/* <p className='itemPrice'>{carts.id}원</p> */}

        <div className="graytextprice">8400원</div>
        <div className="itemprice"> </div>
            <p> 결제금액</p>
            <hr/>
            <p>최종결제금액</p>
   <hr/>
 
 <a  className="buybutton" href={BUY}>  <img   src={process.env.PUBLIC_URL+`assets/image/buybutton.png`}  /></a>
    <footer>
        <FooterNav/>
    </footer>
                     


 </div>
  
    );
}

export default Cart;