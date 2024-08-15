/* eslint-disable react/prop-types */

import '../styles/Card.css'

function Card(props) {
    return (
        <div className="Card" onClick={props.onClick}>
            <h1>{props.name}</h1>
            <img className='img' src={props.image} alt={props.name} />
        </div>
    )
}

export default Card
