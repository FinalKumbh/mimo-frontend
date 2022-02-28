import React from 'react';

import classes from './Item.module.css';

const Item = (props) => {
  return (
    <li className={classes.item}>
      <h2>{props.title}</h2>

    </li>
  );
};

export default Item;
