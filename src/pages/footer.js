import {  Link, useNavigate, useSearchParams } from "react-router-dom";

<div className=  "footer_nav ">
<div className="icon">
<Link to="/checkout"> 
<img id="homeicon" src={process.env.PUBLIC_URL+`assets/homeicon.png` }/>
</Link>
<Link to="/checkout"> 
<img id="searchicon" src={process.env.PUBLIC_URL+`assets/searchicon.png`}/>
</Link>
<Link to="/camera" >
<img id="cameraicon" src={process.env.PUBLIC_URL+`assets/cameraicon.png` }/>
</Link>
<Link to="/share" >
<img id="shareicon" src={process.env.PUBLIC_URL+`assets/shareicon.png`}/>
</Link>
<Link to="/like" >
<img id="loveicon" src={process.env.PUBLIC_URL+`assets/loveicon.png`}/>
</Link>
</div>
</div>