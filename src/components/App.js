import React, {useState} from "react";
import Nav from "./Nav";
import FilterAndSort from "./FilterAndSort";
import TileGrid from "./TileGrid";

import hogs from "../porkers_data";

function App() {

	const [sortedHogs, setSortedHogs] = useState(hogs)
	const [filteredBy, setFilteredBy] = useState("all")

	function handleFilterChange(event) {
		setFilteredBy(event.target.value)
	}

	function handleSortByChange(event) {
		const nameSortedHogs = [...hogs].sort((a, b) => a.name > b.name ? 1 : -1,);
		const weightSortedHogs = [...hogs].sort((a, b) => a.weight > b.weight ? 1 : -1,);
		if (event.target.value === "name") {
			setSortedHogs(nameSortedHogs)
		} else if (event.target.value === "weight") {
			setSortedHogs(weightSortedHogs)
		}
		
	}

	return (
		<div className="App">
			<Nav />
			<FilterAndSort 
				onFilterChange={handleFilterChange}
				onSortByChange={handleSortByChange}
			/>
			<TileGrid 
				hogs={sortedHogs}
				filteredBy={filteredBy}
			/>
		</div>
	);
}

export default App;
