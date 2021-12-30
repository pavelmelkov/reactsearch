import React from "react";

function SearchBox({setSearchField}) {
    return (
        <div>
            <input type="search" placeholder="find card" onChange={setSearchField}/>
        </div>
    );
}

export default SearchBox;
