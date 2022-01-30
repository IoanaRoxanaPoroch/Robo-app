import React from "react";
import Card from "../Card/Card";

const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((robot, i) => (
        <Card
          key={i}
          id={robot.id}
          name={robot.name}
          email={robot.email}
        ></Card>
      ))}
    </div>
  );
};
export default CardList;
