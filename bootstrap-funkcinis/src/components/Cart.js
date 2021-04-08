import React from 'react'
import data from '../data/prekes.json'
export default function Cart() {
    return (
        <div>
            <div className="col-md-12"></div>
            <div className="card text-center">
                <div className="card-body ">
                    <h5 className="card-title">Krepšelio suma: {data.reduce((sum, item) => { return Math.round((sum + item.kaina)*100)/100 }, 0)}</h5>
                    
                    <a href="#" className="btn btn-primary">Pirkti</a>
                </div>
            </div>
        </div>
    )
}
