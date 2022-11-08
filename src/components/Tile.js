import React, { useState } from "react";

function Tile({ name, image, specialty, weight, greased, highestMedal }) {

    const [isExpanded, setIsExpanded] = useState(false)

    function MoreDetails() {
        return (
            <div>
                <p>Specialty: {specialty}</p>
                <p>Weight: {weight}</p>
                <p>{greased ? "Greased" : "Not Greased"}</p>
                <p>Highest Medal Achieved: {highestMedal}</p>
            </div>
        )
    }

    return (
       <div className="pigTile" onClick={()=>setIsExpanded(!isExpanded)}>
            <h3>{name}</h3>
            <img src={image} alt={name}/>
            {isExpanded ? <MoreDetails /> : null}
       </div> 
    )
}

export default Tile