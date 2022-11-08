import React from "react";
import Tile from "./Tile";

function TileGrid({ hogs, filteredBy }) {

    let hogsToDisplay

    if (filteredBy === "all") {
        hogsToDisplay = hogs
    } else if (filteredBy === "greased") {
        hogsToDisplay = hogs.filter(hog=>hog.greased === true)
    } else if (filteredBy === "not greased") {
        hogsToDisplay = hogs.filter(hog=>hog.greased === false)
    }

    const tiles = hogsToDisplay.map(hog => {
       return (
        <Tile
            key={hog.name}
            name={hog.name}
            image={hog.image}
            specialty={hog.specialty}
            weight={hog.weight}
            greased={hog.greased}
            highestMedal={hog['highest medal achieved']}
        />
       )
    })

    return (
        <div className="ui grid container">
            {tiles}
        </div>
    )
}

export default TileGrid