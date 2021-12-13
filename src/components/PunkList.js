import React from "react";
import CollectionCard from "./CollectionCard";

const PunkList = ({ punkListData, setSelectedPunk }) => {
  console.log(punkListData);
  return (
    <div>
      <div className="punkList">
        {punkListData.map((punk) => {
          return (
            <div
              onClick={() => setSelectedPunk(punk.token_id)}
              key={punk.token_id}
            >
              <CollectionCard
                id={punk.token_id}
                name={punk.name}
                traits={punk.traits}
                image={punk.image_original_url}
              />
            </div>
          );
        })}
        {punkListData.map((punk) => {
          return (
            <div
              onClick={() => setSelectedPunk(punk.token_id)}
              key={punk.token_id}
            >
              <CollectionCard
                id={punk.token_id}
                name={punk.name}
                traits={punk.traits}
                image={punk.image_original_url}
              />
            </div>
          );
        })}
        {punkListData.map((punk) => {
          return (
            <div
              onClick={() => setSelectedPunk(punk.token_id)}
              key={punk.token_id}
            >
              <CollectionCard
                id={punk.token_id}
                name={punk.name}
                traits={punk.traits}
                image={punk.image_original_url}
              />
            </div>
          );
        })}
        {punkListData.map((punk) => {
          return (
            <div
              onClick={() => setSelectedPunk(punk.token_id)}
              key={punk.token_id}
            >
              <CollectionCard
                id={punk.token_id}
                name={punk.name}
                traits={punk.traits}
                image={punk.image_original_url}
              />
            </div>
          );
        })}
        {punkListData.map((punk) => {
          return (
            <div
              onClick={() => setSelectedPunk(punk.token_id)}
              key={punk.token_id}
            >
              <CollectionCard
                id={punk.token_id}
                name={punk.name}
                traits={punk.traits}
                image={punk.image_original_url}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PunkList;
