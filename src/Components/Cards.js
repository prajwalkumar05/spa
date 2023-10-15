import React, { useState, useEffect } from "react";
import "./Cards.css";
import Card from "./Card";
<<<<<<< HEAD
import Dog1 from "../assets/images/dog1.jpg";
import { useDataContext } from "../Hooks/useDataContext";

const Cards = ({ userRole }) => {
  console.log(userRole);

  // const { data, setData } = useDataContext()

  const [data, setData] = useState();
  const [filtervalue, setFilterValue] = useState();
  console.log(filtervalue);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      setData(items);
    }
  }, []);

  const [allcards, setAllCards] = useState([
    { id: 0, img: Dog1, name: "Undefined" },
    { id: 1, img: Dog1, name: "Undefined" },
    { id: 2, img: Dog1, name: "Undefined" },
    { id: 3, img: Dog1, name: "Undefined" },
    { id: 4, img: Dog1, name: "Undefined" },
    { id: 5, img: Dog1, name: "Undefined" },
    { id: 6, img: Dog1, name: "Undefined" },
    { id: 7, img: Dog1, name: "Undefined" },
    { id: 8, img: Dog1, name: "Undefined" },
    { id: 9, img: Dog1, name: "Undefined" },
    { id: 10, img: Dog1, name: "Undefined" },
    { id: 11, img: Dog1, name: "Undefined" },
  ]);


  const submit = () =>{
    const filtered = allcards.filter(item => {
        return (
          item.name === filtervalue 
        );
      });

      setAllCards(filtered)
  }

//   useEffect(() => {
//     let filteredUsers =
//     allcards &&
//     allcards.filter((item) => {
//         return item.name === filtervalue;
//       });

//       setAllCards(filteredUsers);
//   }, [filtervalue]);


  return (
    <div className="main-container">
      <div className="cards-container">
        <div>
          <select onChange={(e) => setFilterValue(e.target.value)}>
            {data &&
              data.map((item, i) => {
                return (
                  <option key={i} value={item.label}>
                    {item.label}
                  </option>
                );
              })}
          </select>
          <button onClick={submit}>On click</button>
=======
import Cat1 from '../assets/images/cat1.jpg'
import Cat2 from '../assets/images/cat2.jpg'
import Cat3 from '../assets/images/cat3.jpg'
import Cat4 from '../assets/images/cat4.jpg'
import Cat5 from '../assets/images/cat5.jpg'

import Dog1 from '../assets/images/dog1.jpg'
import Dog2 from '../assets/images/dog2.jpg'
import Dog3 from '../assets/images/dog3.jpg'
import Dog4 from '../assets/images/dog4.jpg'

import Horse1 from '../assets/images/horse1.jpg'
import Horse2 from '../assets/images/horse2.jpg'
import Horse3 from '../assets/images/horse3.jpg'

const Cards = () => {
    const [allcards, setAllCards] = useState([{ id: 0, img: Cat1, name: 'Undefined' },
        { id: 1, img: Cat2, name: 'Undefined' },
        { id: 2, img: Cat3, name: 'Undefined' },
        { id: 3, img: Cat4, name: 'Undefined' },
        { id: 4, img: Cat5, name: 'Undefined' },
        { id: 5, img: Dog1, name: 'Undefined' },
        { id: 6, img: Dog2, name: 'Undefined' },
        { id: 7, img: Dog3, name: 'Undefined' },
        { id: 8, img: Dog4, name: 'Undefined' },
        { id: 9, img: Horse1, name: 'Undefined'},
        { id: 10,img: Horse2, name: 'Undefined'},
        { id: 11,img: Horse3, name: 'Undefined'}])
    return (
        <div className="main-container">
            <div className="cards-container">
                {allcards.map((item, i) => {
               
                    return <Card item={item} id={i} allcards={allcards} setAllCards={setAllCards} />
            })
          }       
            </div>
>>>>>>> f43d92319c13877b5d82d4c8e992c50328c81a7a
        </div>

        {allcards.map((item, i) => {
          return (
            <Card
              filtervalue={filtervalue}
              item={item}
              id={i}
              allcards={allcards}
              setAllCards={setAllCards}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
