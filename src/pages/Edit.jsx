import {  useNavigate, useSearchParams } from "react-router-dom";
 
const Edit = ()=>{

    const navigate = useNavigate();
    const [SearchParams, setSearchParams] = useSearchParams(); 
    const id = SearchParams.get("id");
    console.log("id: ",id);

    const lips = SearchParams.get("lips");
    console.log("lips: ",lips);

  return ( 
    <div>
      <h1>Edit</h1>
      <p>이곳은 Edit 입니다.</p>
      <button onClick={()=> setSearchParams({who: "user"})}>
        로그인
      </button>
      <button onClick={()=> {navigate("/home");}}>
        HOME
      </button>
      <button onClick={()=> {navigate(-1);}}>
      ◀
      </button>
      <button onClick={()=> {navigate(+1);}}>
        ▶
      </button>
    </div>
    );
  };
  
  export default Edit;
  