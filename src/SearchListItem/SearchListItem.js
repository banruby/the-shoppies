import React from 'react';
import "./SearchListItem.scss";

const SearchListItem = (props) => {

    const { id, title, year, handleClick } = props;

 return (
     <li>
         <button onClick={() => handleClick(id)}>
            <p>{title}</p>
            <p>{year}</p>
         </button>
     </li>
 )
}

export default SearchListItem;