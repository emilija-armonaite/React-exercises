import React, { useState } from 'react'

export const PostHooks = () => {
    const [like, setLikes] = useState(0);
    const [hate, setHates] = useState(0);


    const countLikes = () => {
        setLikes(like + 1);
    }

    const countHates = () => {
        setHates(hate + 1);
    }

    const reset = () => {
        setLikes(0);
        setHates(0);
    }

    return (
        <div className="card">
            <img src="https://images.unsplash.com/photo-1590868553935-88acad332039?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80" className="card-img-top" alt="nice-view" />
            <div className="card-body">
                <h5 className="card-title">Amazing landscape</h5>
                <p className="card-text">Lorem ipsum, dolor sit amet consectetur, adipisicing elit. At ipsa corporis ullam consequatur. Tempore laudantium id aperiam non ipsam similique! Inventore pariatur, odit voluptates quia dolore nam commodi fugiat odio.</p>
                <button type="button" className="btn btn-success mr-2" onClick={() => countLikes()}>LIKE {like}</button>
                <button type="button" className="btn btn-danger mr-2" onClick={() => countHates()} >HATE {hate}</button>
                <button type="button" className="btn btn-info" onClick={(reset())}>RESET</button>
            </div>
        </div>
    )
}


