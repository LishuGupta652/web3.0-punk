import React from "react";
import weth from "../assets/images/weth.png";
const CollectionCard = ({ id, name, traits, iamge }) => {
  return (
    <div className="collectionCard">
      <img src={image} alt="" />
      <div className="details"></div>
      <div className="name">
        {name} <div className="id"> . #{id}</div>
      </div>
      <div className="priceContainer">
        <img src={weth} alt={name} className="wethImage" />
        <div className="price">{traits[0].value}</div>
      </div>
    </div>
  );
};

export default CollectionCard;
