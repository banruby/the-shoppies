import React from 'react';

const SearchListItem = (props) => {

    const { id, title, year, handleClick } = props;

 return (
     <li>
         <button className="secondary" onClick={() => handleClick(id)}>
            {title} ({year})
         </button>
     </li>
 )
}

export default SearchListItem;