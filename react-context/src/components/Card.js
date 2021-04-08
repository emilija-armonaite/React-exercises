import React, { createContext } from 'react'
import { useState } from 'react'
import { useGlobalContext } from '../context/likeContext'

export const LikeContext = createContext();

export default function Card({ name, email, id, image, location }) {
    const { likesCount, getLikes } = useGlobalContext();
    const [likes, setCount] = useState(0);

    const funkcija = () => {
        setCount(likes + 1)
        getLikes(likesCount+likes)
    }

    return (
        <div className="card mb-4 box-shadow">
            <div className="card-header">
                <h4 className="my-0 font-weight-normal">{name} </h4>
            </div>
            <div className="card-body">
                <img src={image} alt={name} />
                <ul className="list-unstyled mt-3 mb-4">
                    <li>{email}</li>
                    <li>{location}</li>
                </ul>
                <button onClick={() => funkcija()}
                    type="button"
                    className="btn btn-lg btn-block btn-outline-primary">like {likes}
                </button>
            </div>
        </div>
    )
}
