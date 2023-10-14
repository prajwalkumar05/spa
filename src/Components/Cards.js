import React, { useState } from "react";
import './Cards.css';
import Card from "./Card";
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
        </div>
    );
}

export default Cards