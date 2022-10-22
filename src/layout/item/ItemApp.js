import React , {useState, useEffect} from 'react'

import ItemList from './ItemList';


import { Link, NavLink } from 'react-router-dom';



function ItemApp(props) {
  const [imgSrc, setImgSrc] = React.useState(null);

  const search = props.location;
  console.log(search);

  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [itemData, setItemData] = useState("");

  const fetchItemsHandler = async(props) =>{
    setIsLoading(true);
    setError(null);
    try{
      // const response = JSON.parse(tmpData)
      const response =  await fetch('http://localhost:8080/item/${item_id}')
      if (!response.ok){
        throw new Error('Something went wrong!');
      }
      const data = await response.json();
      if(data){
        setItems(data);
        setImgSrc(data);
      }
      console.log(data);
    

    console.log(data.itemImgDtoList);
 
  
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


    console.log(setImgSrc);

      setItems(transformedItems);
 
      }
    catch(error){
      setError(error.message);

    }
    setIsLoading(false);
    }


  return (
    <React.Fragment>
      <section>
        <button onClick={fetchItemsHandler}>ITEM</button>

      </section>
      <section>
        {!isLoading && items.length > 0 && <ItemList items={items} />}
        {!isLoading && items.length === 0 && !error&&<p>Found</p>}
        {isLoading && <p>Loading..</p>}
        {/* {!isLoading && error &&<p>{error}</p>} */}
      </section>
      <div>
        
        
       
      </div>
      <div className='productNav'> 
    <div className='producthead'>

   
    {/* <img className="product_prod" src={ imgUrl}  }/> */}
   
    </div>
      <div className='prod_title'>
        <p>롬앤</p>  
        {/* <p className='itemTitle'>{items.itemId}{items.itemName}</p> */}
        
        <p className='itemTitle'>{items.itemName}</p>
        <p >판매가 </p>
        <p className='itemPrice'>{items.price}원</p>
        <p>판매상태 :  {items.itemSellStatus}</p>
        {/* <img
            src={imgSrc}
          /> */}
        {/* <img src={} /> */}
      </div>
      <div className='payimg'>
      <NavLink to="/cart">  <img className="basket" src={process.env.PUBLIC_URL+`assets/image/basket.png` }/></NavLink>
      </div>
 
  </div>


    


    </React.Fragment>
   
  );
}

export default ItemApp;
