import React, { Component, useEffect, useState } from 'react';
import {Redirect, NavLink} from "react-router-dom";
import {product,  setItem} from '../../util/APIUtils';
import Alert from 'react-s-alert';
import './product.css'


 


 

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
     <React.Fragment>
       <section>
         <button>Fetch Movies</button>
        </section>
          <MoviesList 

</React.Fragment>  )
}
  

export default Product;