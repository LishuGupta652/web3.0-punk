import React from "react";
import CollectionCard from "./CollectionCard";

const PunkList = ({ punkListData }) => {
  return (
    <div>
      <div className="punkList">
        {punkListData.map((punk) => {
          <CollectionCard
            key={punk.token.id}
            id={punk.token.id}
            name={punk.name}
            traits={punk.traits}
            image={punk.image_original_url}
          />;
        })}
      </div>
    </div>
  );
};

export default PunkList;
