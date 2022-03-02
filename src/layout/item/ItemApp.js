import React , {useState, useEffect} from 'react'

import ItemList from './ItemList';


function ItemApp(props) {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [itemData, setItemData] = useState("");

  const fetchItemsHandler = async(props) =>{
    setIsLoading(true);
    setError(null);
    try{
      // const response = JSON.parse(tmpData)
      const response =  await fetch('http://localhost:8080/item/309')
      if (!response.ok){
        throw new Error('Something went wrong!');
      }
      const data = await response.json();
      if(data.itemImgDtoList){
        setItems(data.itemImgDtoList)
      }
      console.log(data.itemImgDtoList);

      if (typeof data.itemImgDtoList === 'function'){

      }
 
  
      const transformedItems = data.itemImgDtoList.map(items => {
        return {
          id: items.id,
     
        };
      });
 
       




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
        <button onClick={fetchItemsHandler}>Fetch Item</button>

      </section>
      <section>
        {!isLoading && items.length > 0 && <ItemList items={items} />}
        {!isLoading && items.length === 0 && !error&&<p>Found</p>}
        {isLoading && <p>Loading..</p>}
        {!isLoading && error &&<p>{error}</p>}
      </section>



    </React.Fragment>
   
  );
}

export default ItemApp;
