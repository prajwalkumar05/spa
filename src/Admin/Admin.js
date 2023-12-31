import React, { useState,useEffect } from "react";
import {useNavigate} from "react-router-dom"
import './Admin.css';
import { useDataContext } from '../Hooks/useDataContext';

const Admin = ({userRole}) => {

    console.log(userRole)

    const navigate = useNavigate()

    const { data, setData } = useDataContext()
    // const [data,setData] = useState()
    const [label, setLabel] = useState()

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('items'));
        if (items) {
            setData(items);
        }
      }, []);

    const submit = () => {

        setData((prevItems) => {
            const newItems = [...data,{label:label}];
            window.localStorage.setItem("items", JSON.stringify(newItems));
            return newItems;
          });

        
        
        
    }

    console.log(data)
<<<<<<< HEAD
    if(userRole === 'admin'){
        return (
            <div className="admin-container">
                 <div className="input">
                 <input onChange={(e)=>setLabel(e.target.value)} type="text" name="newlabel"/>
                     <button onClick={submit}>Add New Label</button>
                 </div>
     
                 <div className="label-container">
                     {data && data.map((item, i) => {
                         return <span key={i} className="classifer">{ item.label}</span>
                     })}
                    
                 </div>
                 <button onClick={() => navigate("/cards")}>Client</button>
     
             </div>
         );
    }
   
=======
    return (
        <div className="admin-container">
            <div>
                <h2>AVAILABLE LABELS</h2>
            </div>
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
>>>>>>> f43d92319c13877b5d82d4c8e992c50328c81a7a
}

export default Admin