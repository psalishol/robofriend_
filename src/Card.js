import React from "react";
import 'tachyons'

const Card = () => {
  return (
    <div className="bg-light-green dib br4 ma3 pa3 grow">
      <img src="https://robohash.org/test?200x200"  alt="component"/>

      <div>
        <h2>Psalishol NFT</h2>
        <p>psalishol@gmail.com</p>
      </div>
    </div>
  );
};


export default Card;
