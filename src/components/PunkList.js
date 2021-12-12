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
            name={punk.token_id}
            traits={[{ value: 7 }]}
            image="https://nftlabs.mypinata.cloud/ipfs/bafkreiasgnibw32isqfyjnv5lhj4wxzp6izayculjlo4ampmmfla3j4tj4"
          />;
        })}
      </div>
    </div>
  );
};

export default PunkList;
