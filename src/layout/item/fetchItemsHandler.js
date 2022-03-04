import React , {useState, useEffect} from 'react'
import {  Redirect , NavLink} from "react-router-dom";

import Item from './Item';
import ItemList from './ItemList';


async function fetchItemsHandler(){

    const [items, setItems] = useState([]);
    const [itemName, setItemName] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [itemData, setItemData] = useState("");
  
    setIsLoading(true);
    setError(null);
    try{
      // const response = JSON.parse(tmpData)
      const response =  await fetch('http://localhost:8080/item/311')
      if (!response.ok){
        throw new Error('Something went wrong!');
      }
      const data = await response.json();
      if(data){
        setItems(data);
    
      }
      console.log(data);
    

  
      const transformedItems = data.itemImgDtoList.map(itemData => {
        return {
          id: items.id,
  
        };
      });

      const [ItemData, setItemData] = useState("");
      useEffect(()=>{
        ItemList(data).then(res => {
          setItemData(res.data);
        });
      },[]);




      setItems(transformedItems);
 
      }
    catch(error){
      setError(error.message);

    }
    setIsLoading(false);
    }
export default fetchItemsHandler
