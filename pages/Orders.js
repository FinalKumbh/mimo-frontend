import React, { useEffect, useState } from 'react';
import './Orders.css';
import { useStateValue } from "./StateProvider";
import { db } from "./DB";
import Order from "./Order";

function Orders() {
  const [{
    basket,
    user
  }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (user) {
      db.collection('users').doc(user?.uid).collection('orders').orderBy('created', 'desc').onSnapshot(snapshot => setOrders(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      }))));
    } else {
      setOrders([]);
    }
  }, [user]);
  return /*#__PURE__*/React.createElement("div", {
    className: "orders"
  }, /*#__PURE__*/React.createElement("h1", null, " \uC8FC\uBB38\uB0B4\uC5ED "), /*#__PURE__*/React.createElement("div", {
    className: "orders_order"
  }, orders?.map(order => /*#__PURE__*/React.createElement(Order, {
    order: order
  }))));
}

export default Orders;