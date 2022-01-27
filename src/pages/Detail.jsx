import { useParams } from "react-router-dom";

const Detail = ()=>{
    const {id} = useParams();  
    console.log(id);
    
  return ( 
    <div>
      <h1>detail</h1>
      <p>이곳은  detail 입니다.</p>
    </div>
    );
  };
  
  export default  Detail;
  