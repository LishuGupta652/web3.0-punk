import React from "react";

const PunkList = ({ punkListData }) => {
  return (
    <div>
      <div className="punkList">
        {punkListData.map((punk) => {
          <div></div>;
        })}
      </div>
    </div>
  );
};

export default PunkList;
