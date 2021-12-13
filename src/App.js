import "./App.css";
import CollectionCard from "./components/CollectionCard";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import PunkList from "./components/PunkList";
import Main from "./components/Main";

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);
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
      <Main />
      <PunkList punkListData={punkListData} setSelectedPunk={setSelectedPunk} />
    </div>
  );
}

export default App;
