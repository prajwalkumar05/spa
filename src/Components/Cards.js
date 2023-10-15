import React, { useState, useEffect } from "react";
import "./Cards.css";
import Card from "./Card";
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
