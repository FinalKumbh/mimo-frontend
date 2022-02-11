import ReactDOM from 'react-dom';
import React, { useState } from "react";
import {  Link, useNavigate, useSearchParams } from "react-router-dom";
import "./Customer.css";

 
 
const Customer = ()=>{
    class Square extends React.Component {
        render() {
          return (
            <button className="square">
              {this.props.value}
            </button>
          );
        }
      }
      
      class Board extends React.Component {
        renderSquare(i) {
          return <Square value={i} />;
        }
      
        render() {
          const status = 'Next player: X';
      
          return (
            <div>
              <div className="status">{status}</div>
              <div className="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
              </div>
              <div className="board-row">
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
              </div>
              <div className="board-row">
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
              </div>
            </div>
          );
        }
      }
      
      class Game extends React.Component {
        render() {
          return (
            <div className="game">
              <div className="game-board">
                <Board />
              </div>
              <div className="game-info">
                <div>{/* status */}</div>
                <ol>{/* TODO */}</ol>
              </div>
            </div>
          );
        }
      }
      
     // ========================================
      
     ReactDOM.render(
        <Game />,
        document.getElementById('root')
      );
      
 
    return ( 
    <div>





    <div className="CustomerText">
      <h1>Customer</h1>
      <p>이곳은 Customer 입니다.</p>
      <div className="CustomerTitle">
  
        <text ></text>
        <div className="CustomerInfo">
            <text></text>
        </div>
     </div>
    </div>
    <div className="SkinType"> 
        <div className="SkinSortType">


        </div>
        <div className="SkinColorType">


        </div>
    </div>

    <div className="Nextbuttomarea">
        
    </div>
  </div>   
    );
  };


export default Customer;