import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { CardItem } from './CardItem';


const Home = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios(
                `https://www.breakingbadapi.com/api/characters`
            );
            console.log(result.data);
            setItems(result.data);
        }

        fetchItems();
    }, [])

    return (
        <div className="container">
            <div className="row">
                {items.map(item => (<CardItem key={item.char_id} name={item.name} image={item.img} char_id={item.char_id} />))}
            </div>
        </div>
    )
}

export default Home

