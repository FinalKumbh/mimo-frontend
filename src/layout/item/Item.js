import React from 'react';
import {  Redirect , NavLink} from "react-router-dom";
import classes from './Item.module.css';

const Item = (items) => {
  return (
    <li className={classes.item}>
     
  
      <div className="product">
    
    <div className='productNav'> 
    <div className='producthead'>
      <img className="product_prod" src={process.env.PUBLIC_URL+`assets/image/velvettint.jpeg`  }/>
    </div>
      <div className='prod_title'>
        <p>롬앤</p>  
        <p className='itemTitle'>롬앤 제로 벨벳 틴트 #오리지널시리즈</p>
        <p >판매가 </p>
        <p className='itemPrice'>{items.id}원</p>
      </div>
      <div className='payimg'>
      <NavLink to="/cart">  <img className="basket" src={process.env.PUBLIC_URL+`assets/image/basket.png` }/></NavLink>
      </div>
 
  </div>
  <p className="productintroduce">상품소개</p>
  <div className='productbody'>
  <img className='productbodyimg' src={process.env.PUBLIC_URL+`assets/image/ZERO_VELVET_TINT_04_shop1_193337.jpeg` }/>
  </div> 

 



  </div> 
    </li>
  );
};

export default Item;
