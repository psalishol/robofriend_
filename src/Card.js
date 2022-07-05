import React from "react";
import "tachyons";

const Card = ({ name, price }) => {
  return (
    <div className="bg-light-green dib br4 ma2 pa3 grow bw2 shadow-5">
      <img src={`https://robohash.org/${name}?200x200`} alt="component" />

      <div>
        <h2>{name}</h2>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default Card;
