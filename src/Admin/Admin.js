import React, { useState } from "react";
import './Admin.css';
import { useDataContext } from '../Hooks/useDataContext';

const Admin = () => {

    const { data, setData } = useDataContext()
    const [label, setLabel] = useState()
    const submit = () => {
        setData(pre => {return [...data,{id:1,label:label}]})
    }

    console.log(data)
    return (
        <div className="admin-container">
            <div className="input">
            <input onChange={(e)=>setLabel(e.target.value)} type="text" name="newlabel"/>
                <button onClick={submit}>Add New Label</button>
            </div>

            <div className="label-container">
                {data.map((item, i) => {
                    return <span className="classifer">{ item.label}</span>
                })}
               
            </div>
        </div>
    );
}

export default Admin