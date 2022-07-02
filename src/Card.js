import React from "react";
import 'tachyons'

const Card = (props) => {
  return (
    <div className="bg-light-green dib br4 ma2 pa3 grow bw2 shadow-5">
      <img src={`https://robohash.org/${props.name}?200x200`}  alt="component"/>

      <div>
        <h2>{props.name}</h2>
        <p>{props.price}</p>
      </div>
    </div>
  );
};


export default Card;
