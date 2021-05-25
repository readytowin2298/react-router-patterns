import React from 'react';
import dogs from './dogs';
import { useParams } from "react-router-dom";

function DogDetails(){
    const { name } = useParams();
    const dog = dogs.filter(d => d.name === name)[0] || { name: "not found", src: "", facts:["Sorry, we can't seem to locate this dog"], age: 0}
    return (
        <div>
            <h3 className="display-3">{dog.name}</h3>
            <div className="container">
                <img src={dog.src} className="img" />
            </div>
            <p>Age: {dog.age}</p>
            <ul>
                {dog.facts.map(fact => (
                    <li key={fact}>{fact}</li>
                ))}
            </ul>
        </div>
    )
}

export default DogDetails;