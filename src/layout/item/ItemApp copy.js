import React , {useState, useEffect} from 'react'
import {  Redirect , NavLink} from "react-router-dom";
import ItemList from './ItemList';


function ItemApp(props) {

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
      const response =  await fetch('http://localhost:8080/item/311')
      if (!response.ok){
        throw new Error('Something went wrong!');
      }
      const data = await response.json();
      if(data){
        setItems(data);
    
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
     
      <NavLink to="/item">  <button onClick={fetchItemsHandler}> <img id="eimage2" className="eimage2" src={process.env.PUBLIC_URL+`assets/image/bestitem1.png` }/></button></NavLink>

      </section>
      <section>
        {!isLoading && items.length > 0 && <ItemList items={items} />}
        {!isLoading && items.length === 0 && !error&&<p>Found</p>}
        {isLoading && <p>Loading..</p>}
        {/* {!isLoading && error &&<p>{error}</p>} */}
      </section>
  


    


    </React.Fragment>
   
  );
}

export default ItemApp;
