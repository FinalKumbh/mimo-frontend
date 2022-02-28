import React, { Component, useEffect, useState } from 'react';
import {Redirect, NavLink} from "react-router-dom";
import {product,  setItem} from '../../util/APIUtils';
import Alert from 'react-s-alert';
import './product.css'


 
function Buyboxes(props) {
    return (
        <div className={`${props.mainClass} ${props.getClassType(props.type)}`} onClick={() => {props.toggleType(props.type)}}>
         {props.type} <img className="basket" src={process.env.PUBLIC_URL+`assets/image/basket.png` }/>
        </div>
    )
}

function ItemTitleboxes(props){
  return (
    <div className={`${props.mainClass} ${props.getClassItemTitle}`} >
        

    </div> 
    )
}


 

function Product(props) {
  const [itemType, setItemType] = useState([]);
  const [itemTitle, setItemTitle] = useState([]);
  const [item_id, setItem_id] = useState([]);

  const getClassItem_id= type => {
    return item_id.includes(type) ? 'checked' : '';
  }

  const toggleItem_id = type => {
    setItem_id(
      item_id.includes(type)
      ? item_id.filter(r => r!==type)
      : [...item_id, type]
    )
  }
 const getClassItemType = type =>{
      return itemType.includes(type) ? 'checked' : '';
   }

  const toggleItemType = type => {
      setItemType( 
      itemType.includes(type)
      ? itemType.filter(r=>r!==type)
      : [...itemType, type]
    )
  }
  

const getClassItemTitle = type =>{
    return itemTitle.includes(type) ? 'checked' : '';
 }

const toggleItemTitle = type => {
    setItemTitle( 
    itemTitle.includes(type)
    ? itemTitle.filter(r=>r!==type)
    : [...itemTitle, type]
  )
}


  const save = (props) => {
      setItem({
          item_id : item_id.join(','),

          itemType: itemType.join(','),
          itemTitle: itemTitle.join(','),
        })
      
      console.log('save', {
        itemType,
        itemTitle,
        item_id
        

    })

    setItemTitle({
      item_id : item_id.join(','),
      itemTitle: itemTitle.join(','),
  })
 

  }

  
  const setComponent = async () => {
      
  }
  
  useEffect(() => {
      setComponent
      if (props.currentUser.itemType) {
        setItemType(props.currentUser.itemType.split(','))
    }
    if (props.currentUser.itemTitle) {
      setItemTitle(props.currentUser.itemTitle.split(','))
    }
    if (props.currentUser.item_id){
      setItem_id(props.currentUser.ItemTitleboxes.split(','))
    }
     
  }, [])


  return( 
      <div>
          <div className="skintypebutton">
          <div className="skintyperow0" > 
              {['장바구니1','장바구니2'].map((type,i) => (
                  <Buyboxes key={i} mainClass="submitButton0" getClassType={getClassItem_id} toggleType={toggleItem_id} type={type} />
              ))}
              </div>
              <div className="skintyperow1" > 
              {['장바구니1','장바구니2'].map((type,i) => (
                  <Buyboxes key={i} mainClass="submitButton1" getClassType={getClassItemType} toggleType={toggleItemType} type={type} />
              ))}
              </div>
              <p className='itemTitle'>롬앤 제로 벨벳 틴트 #오리지널시리즈</p>
              <div className='itemTitle'>
              {['  롬앤 제로 벨벳 틴트 #오리지널시리즈'].map((type,i) => (
                  <ItemTitleboxes key={i} mainClass="submitButton1" getClassType={getClassItemTitle} toggleType={toggleItemTitle} type={type} />
              ))}
              </div>

        </div>
   
          <NavLink to="/cart"> <button type="submit" className="btn btn-block btn-primary" onClick={save}>저장</button></NavLink>
         

      </div> 

  )
}
  

export default Product;