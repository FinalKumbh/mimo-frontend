import React from 'react';

import Item from './Item';
import classes from './ItemList.module.css';

const CartList = (props) => {
  return (
    <ul className={classes['items-list']}>
      {props.carts.map((carts) => (
        <Item
          key={carts}
          id={carts.id}
 
         />
         
      )
      
      )}
    </ul>
  );
};

export default  CartList;
