import React from 'react';

import Item from './Item';
import classes from './ItemList.module.css';

const ItemList = (props) => {
  return (
    <ul className={classes['items-list']}>
      {props.items.map((items) => (
        <Item
          key={items.id}
          id={items.id}
         />
      ))}
    </ul>
  );
};

export default ItemList;
