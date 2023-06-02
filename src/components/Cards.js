import React from 'react'
import { Link } from "react-router-dom"

const Cards = ({ d }) => {
    const { show } = d;
    console.log(show)
   
    return (
        
            <div className="card mb-3 mr-3" style={{ width: '18rem' }}>
                <img src={show.image.original} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{show.name}</h5>
                    <p>language : {show.language}</p>
                    <Link to={`/summary/${show.id}`} class="btn btn-primary">View Summary</Link>
                </div>
            </div>

    )
}

export default Cards