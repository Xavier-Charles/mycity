import { useEffect, useMemo, useState } from "react";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Info from "./components/Info";
import Status from "./components/Status";
import { trafficData } from "./data/trafficHistory";

import { onValue, ref } from "firebase/database";
import { db } from "./api/firebase";
import moment from "moment";

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

  const expectedTraffic = trafficData[selectedCityId][moment().format("H")];

  const [trafficStatus, setTrafficStatus] = useState(expectedTraffic);
  const [powerStatus, setPowerStatus] = useState(0);
  const [lightsStatus, setLightsStatus] = useState(0);

  useEffect(() => {
    const query = ref(db);
    return onValue(query, (snapshot) => {
      const doc = snapshot.val();

      if (snapshot.exists()) {
        setTrafficStatus(doc.data.traffic);
        setPowerStatus(doc.data.power);
        setLightsStatus(doc.data.light);
      }
    });
  }, []);

  const currentTrafficStatus = useMemo(
    () => {
      if (trafficStatus === 0) {
        return expectedTraffic - 1000 === 0 ? 1000 : expectedTraffic - 1000;
      }
      return expectedTraffic + 1000 === 4000 ? 3000 : expectedTraffic + 1000;
    },
    [expectedTraffic, trafficStatus]
  );

  console.log(currentTrafficStatus, trafficStatus);
  return (
    <>
      <Nav />
      <Hero
        cityData={cityData}
        selectedCityId={selectedCityId}
        setSelectedCityId={setSelectedCityId}
      />
      <Info
        currentTrafficStatus={currentTrafficStatus}
        cityData={cityData}
        selectedCityId={selectedCityId}
      />
      <Status
        currentTrafficStatus={currentTrafficStatus}
        powerStatus={powerStatus}
        lightsStatus={lightsStatus}
      />
    </>
  );
}

export default App;
