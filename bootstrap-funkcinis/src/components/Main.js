import React from 'react'
import Card from './Card'
import Cart from './Cart'
import data from '../data/prekes.json'

export default function Main() {
    return (
        <div className="container">
            <div className="row">
                {data.map(item => { return <Card nuotrauka={item.nuotrauka} pavadinimas={item.pavadinimas} aprasymas={item.aprasymas} kaina={item.kaina} /> })}
            </div>
            <div className="container">
                <Cart />
            </div>
        </div>
    )
}
