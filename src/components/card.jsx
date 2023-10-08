import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img class=" circle-img" src={props.img} alt={props.alt} />
      </div>
      <div className="bottom">
        <p>{props.contact}</p>
        <p>{props.email}</p>
      </div>
    </div>
  );
}
export default Card;
