import {set} from 'date-fns';
import React, {Component, useEffect, useState} from 'react';
import {Redirect, NavLink} from "react-router-dom";
import {getItemById, getItems} from '../../util/APIUtils';

function ItemTest(props) {

    const [item, setItem] = useState(null);
    const [items, setItems] = useState([]);

    const onClick = () => {
        let itemId = 311;
        getItemById({itemId}).then(response => {
            setItem(response.data);
        })
    }
    const onClick2 = () => {
        getItems().then(response => {
            setItems(response.data);
            // console.log(response.data);
            for (var item in response.data) {
                // setItems(response.data[item]); console.log(response.data[item]);
            }
        })
        // if (items[3]!=null){     let itemValue =
        // Object.fromEntries(Object.entries(items[3]).map(([key,value])=>[key,value]));
        // console.log(itemValue.itemName); }
        console.log(items);
        console.log(items[3]);
        //console.log(itemValue.itemName);        왜 Undefined???

        console.log(user);
        console.log(user2.name);

        // const testtt = Object.entries(items[3]).map((entrie, idx)=>{return
        // console.log(entrie, idx)});
    }
    // const tmp = JSON.stringify(items); console.log("tmp : ",tmp) const [tests,
    // setTests] = useState(JSON.parse(tmp)); console.log("tests : ",tests[0]) const
    // setComponent = async () => { }

    useEffect(() => {
        onClick()
        onClick2()
    }, [])

    let user = {
        name: "V",
        age: 30
    };
    let user2 = Object.fromEntries(
        Object.entries(user).map(([key, value]) => [key, value])
    );

    return (
        <div>
            <div>
                <button onClick={onClick}>아이템 하나 불러오기</button>
                <button onClick={onClick2}>아이템들 불러오기</button>
            </div>
            {item && <textarea rows={7} value={JSON.stringify(item, null, 2)} readOnly={true}/>}
            {items && <textarea rows={7} value={JSON.stringify(items, null, 2)} readOnly={true}/>}
            {items.map(r => (<div>{r.itemName}</div>))}
        </div>

    )
}

export default ItemTest;