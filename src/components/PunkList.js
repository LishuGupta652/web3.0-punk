import React from "react";
import CollectionCard from "./CollectionCard";

const PunkList = ({ punkListData }) => {
  console.log(punkListData);
  return (
    <div>
      <div className="punkList">
        {punkListData.map((punk) => {
          return (
            <CollectionCard
              key={punk.token_id}
              id={punk.token_id}
              name={punk.name}
              traits={punk.traits}
              image={punk.image_original_url}
            />
          );
        })}
        {punkListData.map((punk) => {
          return (
            <CollectionCard
              key={punk.token_id}
              id={punk.token_id}
              name={punk.name}
              traits={punk.traits}
              image={punk.image_original_url}
            />
          );
        })}
        {punkListData.map((punk) => {
          return (
            <CollectionCard
              key={punk.token_id}
              id={punk.token_id}
              name={punk.name}
              traits={punk.traits}
              image={punk.image_original_url}
            />
          );
        })}
        {punkListData.map((punk) => {
          return (
            <CollectionCard
              key={punk.token_id}
              id={punk.token_id}
              name={punk.name}
              traits={punk.traits}
              image={punk.image_original_url}
            />
          );
        })}
        {punkListData.map((punk) => {
          return (
            <CollectionCard
              key={punk.token_id}
              id={punk.token_id}
              name={punk.name}
              traits={punk.traits}
              image={punk.image_original_url}
            />
          );
        })}
        {punkListData.map((punk) => {
          return (
            <CollectionCard
              key={punk.token_id}
              id={punk.token_id}
              name={punk.name}
              traits={punk.traits}
              image={punk.image_original_url}
            />
          );
        })}
        {punkListData.map((punk) => {
          return (
            <CollectionCard
              key={punk.token_id}
              id={punk.token_id}
              name={punk.name}
              traits={punk.traits}
              image={punk.image_original_url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PunkList;
