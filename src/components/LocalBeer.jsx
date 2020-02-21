import React from 'react';
import PropTypes from 'prop-types';

function LocalBeer(props){
  return (
    <div>
      <style jsx>{`
          div {
            background-color: sesame;
          }
        `}</style>
      <h3>{props.month}</h3> 
      <ul>
        {props.selection.map((item, index) =>
          <li key ={index} className = "itemList"> {item} </li>)}
      </ul>
      <hr/>
    </div>
  );
}

LocalBeer.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.array.isRequired
};

export default LocalBeer;