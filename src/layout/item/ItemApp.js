import React , {useState} from 'react'

import ItemList from './ItemList';


function ItemApp() {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchItemsHandler(){
    setIsLoading(true);
    const response =  await fetch('http://localhost:8080/item/${item_id}')
 
    const data = await response.json();

    const transformedItems = data.results.map(itemData => {
      return {
        id: itemData.item_id,
        title : itemData.item_name,
        detail : itemData.item_detail,
        color : itemData.color,
        code : itemData.code

      };
    });
    setItems(transformedItems);
    setIsLoading(false);
  }


  return (
    <React.Fragment>
      <section>
        <button onClick={fetchItemsHandler}>Fetch Item</button>
      </section>
      <section>
        {!isLoading && <ItemList items={items} />}
      {isLoading && <p>Loading..</p>}
      </section>
    </React.Fragment>
  );
}

export default ItemApp;
