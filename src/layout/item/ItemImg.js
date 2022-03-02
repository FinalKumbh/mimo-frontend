import React from 'react';

import Item from './Item';
import classes from './ItemList.module.css';




export default function ItemImg({props}) {
  return (
    <div>
          <ul className={classes['items-list']}>
      {props.items.map((items) => (
        <Item
          key={items}
          imgUrl={items.imgUrl}
      
         />
         
      )
      
      )}
      
    </ul>
       
    
    </div>
  );
}




