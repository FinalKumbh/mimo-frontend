import React, {Component, useEffect, useState} from 'react';
import "./Details.css";
import {Redirect, NavLink} from "react-router-dom";
import {details, getSkin} from '../../util/APIUtils';
import Alert from 'react-s-alert';

 
function Checkboxes(props) {
    return (
        <div>
            <button className={`${props.mainClass} ${props.getClassType(props.type)}`} onClick={() => {props.toggleType(props.type)}}>{props.type}</button>
        </div>
    )
}

function Cart() {
    const  [skinType, setSkinType] = useState([]);
    const [toneType, setToneType] = useState([]);
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
    

    const getClassToneType = type =>{
        return toneType.includes(type) ? 'checked' : '';
     }

    const toggleToneType = type => { 
        setToneType( 
        toneType.includes(type)
        ? toneType.filter(r=>r!==type)
        : [...toneType, type]
      )
    }
    const save = () => {
        if (skinType.length === 0) {
        }
        console.log('save', {
            skinType,
            toneType
        })
    }
    const setComponent = async () => {
        const tone = await getSkin();
        console.log(tone)
        setToneType(tone)
    }
    useEffect(() => {
        setComponent()
    }, [])
  
  
    return( 
        <div>
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
                        <Checkboxes key={i}  mainClass="submitButton2"  getClassType={getClassToneType} toggleType={toggleToneType} type={type} />
                    ))}
               </div>
                <div className='skintyperow4'>
                    {['겨울쿨','아지모름'].map((type,i) => (
                            <Checkboxes key={i}  mainClass="submitButton2"  getClassType={getClassToneType} toggleType={toggleToneType} type={type} />
                        ))}
               </div>
            </div>
            <NavLink to="/main"> <button type="submit" className="btn btn-block btn-primary" onClick={save}>저장</button></NavLink>
           

        </div> 

    )
}
    

export default Cart;