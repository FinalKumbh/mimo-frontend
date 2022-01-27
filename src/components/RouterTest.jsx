import {Link} from "react-router-dom";

const RouterTest = () => {
    return(
            <>
            <Link to={"/"}>HOME</Link>
            <br/>
            <Link to={`/detail`}>DETAIL</Link>
            <br/>
            <Link to={`/new`}>NEW</Link>
            <br/>
            <Link to={`/edit`}>EDIT</Link>
            
            </>


    );


};

export default RouterTest;