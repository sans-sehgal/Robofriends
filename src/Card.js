import React from "react";
import './Card.css';


const Card = ({id, name, email}) => {
    return (
        <div className="tc dib br3 pa3 ma4 bw2 shadow-5 card">
            <img src = {`https://robohash.org/${id}?150x150`} alt = 'robots'/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card