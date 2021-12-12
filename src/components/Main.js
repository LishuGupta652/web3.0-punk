import React from "react";
import instagramLogo from "../assets/owner/instagram.png";
import twitterLogo from "../assets/owner/twitter.png";
import moreIcon from "../assets/owner/more.png";
const Main = () => {
  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkHighLigh">
          <div className="punkContainer">
            <img
              src="https://nftlabs.mypinata.cloud/ipfs/bafkreiasgnibw32isqfyjnv5lhj4wxzp6izayculjlo4ampmmfla3j4tj4"
              alt=""
            />
          </div>
        </div>
        <div className="punkDetails" style={{ color: "#fff" }}>
          <div className="title">{"lishugupta"}</div>
          <div className="itemNumber">{"#3"}</div>
        </div>
        <div className="ownerDetails">
          <div className="ownerImageContainer">
            <img
              src={
                "https://nftlabs.mypinata.cloud/ipfs/bafkreiasgnibw32isqfyjnv5lhj4wxzp6izayculjlo4ampmmfla3j4tj4"
              }
              alt=""
            />
          </div>
          <div className="ownerDetails">
            <div className="ownerNameAndHandle">
              <div>0x512C67ecE7670b9E192291e64912cAdd51B53802</div>
              <div className="ownerHandle">@lishugupta652</div>
            </div>
            <div className="ownerLink">
              <img src={instagramLogo} alt="" />
            </div>
            <div className="ownerLink">
              <img src={twitterLogo} alt="" />
            </div>
            <div className="ownerLink">
              <img src={moreIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
