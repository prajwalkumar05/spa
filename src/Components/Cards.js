import React, { useState } from "react";
import './Cards.css';
import Card from "./Card";
import Dog1 from '../assets/images/dog1.jpg'

const Cards = () => {
    const [allcards,setAllCards]=useState([{id:0,img:Dog1,name:'Undefined'},{id:1,img:'',name:'1'},{img:'',name:'1'},{img:'',name:'1'},{img:'',name:'1'}])
    return (
        <div className="main-container">
            <div className="cards-container">
                {allcards.map((item, i) => {
               
                    return <Card item={item} id={i} allcards={allcards} setAllCards={setAllCards} />
            })
          }       
            </div>
        </div>
    );
}

export default Cards