import React , {useState, useEffect} from 'react'

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
      const response =  await fetch('http://localhost:8080/item/309')
      if (!response.ok){
        throw new Error('Something went wrong!');
      }
      const data = await response.json();
      if(data.itemImgDtoList){
        setItems(data.itemImgDtoList);
        setItemName(data.itemName);
      }
      console.log(data);
      console.log(data.itemName);

      if (typeof data.results.app === 'function'){

      }
 
  
      const transformedItems = data.results.map(itemData => {
        return {
          id: itemData.item_id,
          title : itemData.item_name,
          detail : itemData.item_detail,
          color : itemData.color,
          code : itemData.code,
          price : itemData.price
  
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
    // let content = <p> Found no movies.</p>;



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

      <section>
        {/* <h1>
          {ItemList.data}{' '}
          {ItemList.data.select? (
            <div>
              {props.data}

            </div>
          ) : (
            console.log()
          )}
        </h1> */}
      </section>


    </React.Fragment>
   
  );
}

export default ItemApp;
