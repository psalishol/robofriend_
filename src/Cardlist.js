import React from "react";
import Card from "./Card";
// import { robotName } from "./robot_model";
const CardList = ({ robotName }) => {

  return <div>{robotName.map((user, i) => {
    return (
      <Card
        key={i}
        id={robotName[i].id}
        name={robotName[i].name}
        price={robotName[i].cost}
      />
    );
  })}</div>;
};

export default CardList
