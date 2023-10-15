import React, { useState,useEffect } from "react";
import './Card.css';
import { useDataContext } from "../Hooks/useDataContext";



const Card = (props) => {
    const [ data, setData ] = useState();
    const [admin, setAdmin] = useState(false)
    const [option, setOption] = useState()


  
    const setLabel = (i) => {
   const result = props.allcards.map((pre) => pre.id===i ? {...pre,name:option}: pre )
        props.setAllCards(result);
    }

    

    const removeLabel = (i) => {
   const result = props.allcards.map((pre) => pre.id===i ? {...pre,name:'Undefined'}: pre )
        props.setAllCards(result);
    }

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('items'));
        if (items) {
            setData(items);
        }
      }, []);

    return (
        <div className="card">
            <img src={props.item.img} alt="Animal" />
            <div className="card-holder">
            <span>{props.item.name}</span>
<<<<<<< HEAD
            <select onChange={(e)=>setOption(e.target.value)}>
                {data && data.map((item, i) => {
=======
                    <span>Label:<select onChange={(e) => setOption(e.target.value)}>
                {data.map((item, i) => {
>>>>>>> f43d92319c13877b5d82d4c8e992c50328c81a7a
                    return <option className="classifer">{ item.label}</option>
                })}
            </select></span>
            <div className="buttons">
            <button onClick={()=>setLabel(props.id)}>Set Label</button>
                    <button onClick={() => removeLabel(props.id)}>Remove Label</button>
                    </div>
                </div>
        </div>
    );
}

export default Card