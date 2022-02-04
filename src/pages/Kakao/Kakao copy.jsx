const {Kakao} = window;
const kakaoLogin = ()=>{
    console.log("hello");
    Kakao.Auth.authorize({
        redirectUrl:'http://localhost:3001/oauth/kakao/callback'
    })
}

const Kakao = ()=>{
    return(
        <div>
            <a id="kakaobtn" onClick={kakaoLogin}>
                <img
                src="C:\mimo-frontend-main\public\assets\kakao_login.png"
                />
            </a>
        </div>
    );
};

export default Kakao;