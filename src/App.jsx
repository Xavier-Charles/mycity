import { useState } from "react";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Info from "./components/Info";

function App() {
  const cityData = {
    abeokuta: {
      id: "abeokuta",
      name: "Lagos-Abeokuta Expressway",
    },
    apapa: { id: "apapa", name: "Apapa Oworonoshoki Expressway" },
    badagry: { id: "badagry", name: "Lagos-Badagry Expressway" },
    sabo: { id: "sabo", name: "Akowonjo-ifo-sabo Expressway" },
  };
  const [selectedCityId, setSelectedCityId] = useState("abeokuta");

  return (
    <>
      <Nav />
      <Hero
        cityData={cityData}
        selectedCityId={selectedCityId}
        setSelectedCityId={setSelectedCityId}
      />
      <Info cityData={cityData} selectedCityId={selectedCityId} />
    </>
  );
}

export default App;
