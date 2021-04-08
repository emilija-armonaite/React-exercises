import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Character = ({ match }) => {
    console.log(match);

    const [item, setItem] = useState([]);

    useEffect(() => {
        fetchItem();
    }, [])

    const fetchItem = async () => {
        const result = await axios(
            `https://www.breakingbadapi.com/api/characters/${match.params.id}`
        );

        console.log(result.data);
        console.log(...result.data);
        setItem(...result.data);
    }

    return (
        <div className="col">
            <h1> About: {item.name}</h1>
            <p> <img src={item.img} alt="picture" /> </p>
        </div>
    )
}



export default Character
