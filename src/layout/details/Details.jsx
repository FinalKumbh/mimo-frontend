import React, {Component, useEffect, useState} from 'react';
import "./Details.css";
import {Redirect, NavLink} from "react-router-dom";
import {details, getSkin, setSkin} from '../../util/APIUtils';
import Alert from 'react-s-alert';

 
function Checkboxes(props) {
    return (
        <div>
            <button className={`${props.mainClass} ${props.getClassType(props.type)}`} onClick={() => {props.toggleType(props.type)}}>{props.type}</button>
        </div>
    )
}

function Details(props) {
    if(props.authenticated) {
        return <Redirect
            to={{
            pathname: "/main",
            state: { from: this.props.location }
        }}/>;            
      }

    const [skinType, setSkinType] = useState([]);
    const [skinTone, setskinTone] = useState([]);
    const getClassSkinType = type =>{
        return skinType.includes(type) ? 'checked' : '';
     }

    const toggleSkinType = type => {
        setSkinType( 
        skinType.includes(type)
        ? skinType.filter(r=>r!==type)
        : [...skinType, type]
      )
    }
    

    const getClassskinTone = type =>{
        return skinTone.includes(type) ? 'checked' : '';
     }

    const toggleskinTone = type => { 
        setskinTone( 
        skinTone.includes(type)
        ? skinTone.filter(r=>r!==type)
        : [...skinTone, type]
      )
    }
    const save = (this.props.currentUser); => {
        if (skinType.length === 0) {
        }
        console.log('save', {
            skinType,
            skinTone
        })

        const setSkinRequest = Object.assign({}, skinType, skinTone);
        
        console.log(setSkinRequest)
        setSkin(setSkinRequest);
        //     setSkin(useremail ,setSkinRequest);
    }

    
    // const setComponent = async () => {
    //     const tone = await getSkin();
    //     console.log(tone)
    //     setskinTone(tone)
    // }
    // useEffect(() => {
    //     setComponent()
    // }, [])
  
  
    return( 
        <div>
            <p className="detailinfo"> {props.currentUser.name}님 피부타입을 알려주세요</p>
            <div className="skintypebutton">
                <div className="skintyperow1" > 
                {['복합성','건성','지성'].map((type,i) => (
                    <Checkboxes key={i} mainClass="submitButton1" getClassType={getClassSkinType} toggleType={toggleSkinType} type={type} />
                ))}
                </div>
                 <div className='skintyperow2'>
                 {['민감성','중성'].map((type,i) => (
                    <Checkboxes key={i} mainClass="submitButton1"  getClassType={getClassSkinType} toggleType={toggleSkinType} type={type} />
                ))}
               </div>
            </div>
            <div className="skintonebutton" >
                <div className="skintyperow3" > 
                    {['봄웜','여름쿨','가을웜'].map((type,i) => (
                        <Checkboxes key={i}  mainClass="submitButton2"  getClassType={getClassskinTone} toggleType={toggleskinTone} type={type} />
                    ))}
               </div>
                <div className='skintyperow4'>
                    {['겨울쿨','아직모름'].map((type,i) => (
                            <Checkboxes key={i}  mainClass="submitButton2"  getClassType={getClassskinTone} toggleType={toggleskinTone} type={type} />
                        ))}
               </div>
            </div>
            <NavLink to="/main"> <button type="submit" className="btn btn-block btn-primary" onClick={save}>저장</button></NavLink>
           

        </div> 

    )
}
    

export default Details;