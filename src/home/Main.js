import React, {Component, useState, useEffect} from 'react';
//import {  useNavigate, useSearchParams } from "react-router-dom";
import {Link, NavLink} from 'react-router-dom';
import "./Home.css";
import "./Main.css";
import {getItems} from '../util/APIUtils';
import {FooterNav} from './nav/FooterNav';

function Main(props) {
    const [items, setItems] = useState([]);

    const getItem = () => {
        getItems().then(response => {
            setItems(response.data);
            for (var item in response.data) {}
        })
    }

    useEffect(() => {
        getItem()
    }, [])

    const ifitem = items.filter((x)=> { if(x.skintone == "SPRING") { return x } })

    return (
        <div className="App">

            <div>
                <img id="event1" className='main_event1' src={`assets/image/event1.png`}/>

            </div>

            <div className="fourth-nav">
                <div className="bestitem">피부톤별 화장품 추천</div>
                <div className="bestitemlist">
                    <div className="bestitemimagesample">
                      {ifitem.map(r => (
                        <div>
                        <div className="prod_size">
                            <NavLink to="/itemapp">
                                <img
                                    id="eimage2"
                                    className="eimage2"
                                    src={process.env.PUBLIC_URL + `assets/image/bestitem1.png`}/>
                            </NavLink>
                            <p>{r.itemName}
                            </p>
                            <p className="main_prod_gray">
                            {r.itemDetail}</p>
                        </div>
                        </div>
                      ))}
                    </div>
                </div>
            </div>
            <div className="bestitem">봄이니까 설레는 신상 아이템</div>
            <div className="fifth-nav">
                <div className="newitemlist">
                    <div className="newitemimagesample">

                        <div className="bestimage1">
                            <NavLink to="/product4">
                                <img
                                    id="eimage2"
                                    className="eimage3"
                                    src={process.env.PUBLIC_URL + `assets/image/newitem1.png`}/>
                            </NavLink>

                            <p>쥬시 래스팅 여라</p>
                            <p className="main_prod_gray">
                                #여라 시리즈</p>
                        </div>

                        <div className="bestimage2">
                            <NavLink to="/product5"><img
                                id="eimage2"
                                className="eimage3"
                                src={process.env.PUBLIC_URL + `assets/image/newitem2.png`}/>
                            </NavLink>

                            <p>제로 벨벳 틴트</p>
                            <p className="main_prod_gray">
                                #빈티지 필터</p>
                        </div>
                        <div className="bestimage3">
                            <NavLink to="/product6">
                                <img
                                    id="eimage2"
                                    className="eimage3"
                                    src={process.env.PUBLIC_URL + `assets/image/newitem3.png`}/>
                            </NavLink>

                            <p>듀이풀 워터 틴트</p>
                            <p className="main_prod_gray">
                                #입술에 내린 단비</p>
                        </div>
                        <div className="bestimage4">
                            <NavLink to="/product7">
                                <img
                                    id="eimage2"
                                    className="eimage3"
                                    src={process.env.PUBLIC_URL + `assets/image/newitem4.png`}/>
                            </NavLink>

                            <p>쥬시 래스팅 베어</p>
                            <p className="main_prod_gray">
                                #베어쥬시</p>
                        </div>
                    </div>
                </div>
            </div>

            <footer>
                <div className="sixth-nav">

                    <footer>
                        <FooterNav/>
                    </footer>

                </div>
            </footer>

        </div>

    );
}

export default Main;