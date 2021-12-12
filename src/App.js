import "./App.css";
import CollectionCard from "./components/CollectionCard";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [punkListData, setPunkListData] = useState([]);
  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        "https://testnets.opensea.io/api/v1/assets?asset_contract_address='0x512C67ecE7670b9E192291e64912cAdd51B53802'"
      );
      console.log(openseaData);
      setPunkListData(openseaData.data.assets);
    };
    getMyNfts();
  }, []);
  return (
    <div className="App">
      <Header />
      <CollectionCard
        id={0}
        name={"gitman"}
        traits={[{ value: 7 }]}
        image="https://nftlabs.mypinata.cloud/ipfs/bafkreiasgnibw32isqfyjnv5lhj4wxzp6izayculjlo4ampmmfla3j4tj4"
      />
    </div>
  );
}

export default App;
