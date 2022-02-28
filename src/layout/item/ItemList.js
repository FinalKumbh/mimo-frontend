import React from 'react';

import Item from './Item';
import classes from './ItemList.module.css';

const ItemList = (props) => {
  return (
    <ul className={classes['items-list']}>
      {props.items.map((item) => (
        <Item
          key={item.id}
          title={item.title}
         />
      ))}
    </ul>
  );
};

export default ItemList;
