import "./App.css";
import CollectionCard from "./components/CollectionCard";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import PunkList from "./components/PunkList";

function App() {
  const [punkListData, setPunkListData] = useState([]);
  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0x512C67ecE7670b9E192291e64912cAdd51B53802"
      );
      setPunkListData(openseaData.data.assets);
      console.log(punkListData);
    };
    return getMyNfts();
  }, []);
  return (
    <div className="App">
      <Header />
      <PunkList punkListData={punkListData} />
    </div>
  );
}

export default App;
