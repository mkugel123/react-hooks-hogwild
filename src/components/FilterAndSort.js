import React from "react";

function FilterAndSort({ onFilterChange, onSortByChange }) {
    return (
        <div className="filterWrapper">
            <span>Filter:</span>
            <select onChange={onFilterChange}>
                <option value="all">All</option>
                <option value="greased">Greased</option>
                <option value="not greased">Not Greased</option>
            </select>
            <span>{" | "}Sort by:</span>
            <select onChange={onSortByChange}>
                <option disabled>Choose one</option>
                <option value="name">Name</option>
                <option value="weight">Weight</option>
            </select>
        </div>
    )
}

export default FilterAndSort