import React , {useState, useEffect} from 'react'

import CartList from './CartList';


function CartApp(props) {

  const [carts, setCarts] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  const fetchCartsHandler = async(props) =>{
    setIsLoading(true);
    setError(null);
    try{
    
      const response =  await fetch('http://localhost:8080/item/309')
      if (!response.ok){
        throw new Error('Something went wrong!');
      }
      const data = await response.json();
      if(data.itemImgDtoList){
        setCarts(data.itemImgDtoList);
    
    
      }
      console.log(data);
    
      console.log(data.CartListDTO);

      if (typeof data.itemImgDtoList.app === 'function'){

      }
 
  
      const transformedcarts = data.itemImgDtoList.map(cartData => {
        return {
          id: items.id,
  
        };
      });

      const [cartData, setCartData] = useState("");
      useEffect(()=>{
        CartList(data).then(res => {
          setCartData(res.data);
        });
      },[]);




      setCarts(transformedcarts);
 
      }
    catch(error){
      setError(error.message);

    }
    setIsLoading(false);
    }


  return (
    <React.Fragment>
      <section>
        <button onClick={fetchCartsHandler}>Cart</button>

      </section>
      <section>
        {!isLoading && carts.length > 0 && <CartList carts={carts} />}
        {!isLoading && carts.length === 0 && !error&&<p>Found</p>}
        {isLoading && <p>Loading..</p>}
        {!isLoading && error &&<p>{error}</p>}
      </section>

    


    </React.Fragment>
   
  );
}

export default CartApp;
