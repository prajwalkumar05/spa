import React, { useState } from "react";
import './Card.css';
import { useDataContext } from "../Hooks/useDataContext";
import { Dropdown } from "bootstrap";


const Card = (props) => {
    const { data, setData } = useDataContext()
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

    return (
        <div className="card">
            <img src={props.item.img} alt="Animal" />
            <span>{props.item.name}</span>
            <select onChange={(e)=>setOption(e.target.value)}>
                {data.map((item, i) => {
                    return <option className="classifer">{ item.label}</option>
                })}
            </select>
            <button onClick={()=>setLabel(props.id)}>Set Label</button>
            <button onClick={()=>removeLabel(props.id)}>Remove Label</button>
        </div>
    );
}

export default Card