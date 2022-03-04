import React from 'react';
import {  Redirect , NavLink} from "react-router-dom";
import classes from './Item.module.css';

const Item = (items) => {

  return (
    <li className={classes.item}>
     
  
      <div className="product">
    
      <div className='productNav'> 
    <div className='producthead'>
    
{/*    
    <img className="product_prod" src={ imgUrl}  }/>
      <img className="product_prod" src={process.env.PUBLIC_URL+`assets/image/velvettint.jpeg`  }/> */}
    </div>
      <div className='prod_title'>
        <p>롬앤</p>  
        <p className='itemTitle'>{items.itemId}{items.itemName}</p>
        
        <p className='itemTitle'>{items.itemName}</p>
        <p >판매가 </p>

        <p>판매상태 :  {items.itemSellStatus}</p>
        <p className='itemPrice'>{items.price}원</p>
      </div>
      <div className='payimg'>
      <NavLink to="/cart">  <img className="basket" src={process.env.PUBLIC_URL+`assets/image/basket.png` }/></NavLink>
      </div>
 
  </div>
 



  </div> 
    </li>
  );
};

export default Item;
