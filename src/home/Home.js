import React, {useEffect } from 'react';
import './Home.css';
import mimoMain from '../img/MIMO_logo.png';



function Home(props){

    useEffect(()=>{

        if (props.authenticated){
            props.history.push('/main')
        }
    },[])
    return(
        <div className="home-container">
            <div className="container">
                <img className="home_logo" src={mimoMain} alt="mimoMain" />
            </div>
            <div className='home_text'>
            가입을 진행할 경우, <b>이용약관</b>과 <b>개인정보 수집 및 
            이용</b>에 대해 동의한 것으로 간주됩니다.
            </div>
        </div>
    )
}



export default Home;