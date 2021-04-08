import React from 'react'

export default function Card(props) {
    console.log(props);
    return (
        <div className="col-md-4">
            <div className="card mb-4 box-shadow">
                <img className="card-img-top" data-src={props.nuotrauka} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{props.pavadinimas}</h5>
                    <p className="card-text">{props.aprasymas}</p>
                    <h6 className="card-subtitle mb-2 text-muted">{props.kaina}</h6>
                    <a href="#" className="card-link">Card link</a>
                </div>
            </div>
        </div>
    )
}
