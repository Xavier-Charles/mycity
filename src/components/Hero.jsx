/* eslint-disable react/prop-types */
import abeokuta from "../assets/img/places/abeokuta.png";
import apapa from "../assets/img/places/apapa.png";
import badagry from "../assets/img/places/badagry.png";
import sabo from "../assets/img/places/sabo.png";

const Hero = ({ cityData, selectedCityId, setSelectedCityId }) => {
  const handleClick = (id) => {
    const infoSectionPos = document
      .getElementById("infoSection")
      ?.getBoundingClientRect().y;

    window.scrollBy({
      top: infoSectionPos,
      left: 0,
      behavior: "smooth",
    });
    setSelectedCityId(id);
  };
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
              Stay Informed, Stay Connected: Your City at Your Fingertips
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              The essential app for monitoring both traffic and power supply
              updates in your city.
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            <div
              onClick={() => handleClick("abeokuta")}
              className={`flex flex-col bg-secondary/5 p-8 cursor-pointer ${
                selectedCityId === "abeokuta"
                  ? "bg-gray-700"
                  : " hover:opacity-80"
              }`}
            >
              <img src={abeokuta} className="" />
              <dt className="text-sm font-semibold leading-6 text-gray-300 mt-4">
                {cityData.abeokuta.name}
              </dt>
            </div>
            <div
              onClick={() => handleClick("apapa")}
              className={`flex flex-col bg-secondary/5 p-8 cursor-pointer ${
                selectedCityId === "apapa" ? "bg-gray-700" : " hover:opacity-80"
              }`}
            >
              <img src={apapa} className="" />
              <dt className="text-sm font-semibold leading-6 text-gray-300 mt-4">
                {cityData.apapa.name}
              </dt>
            </div>
            <div
              onClick={() => handleClick("badagry")}
              className={`flex flex-col bg-secondary/5 p-8 cursor-pointer ${
                selectedCityId === "badagry"
                  ? "bg-gray-700"
                  : " hover:opacity-80"
              }`}
            >
              <img src={badagry} className="" />
              <dt className="text-sm font-semibold leading-6 text-gray-300 mt-4">
                {cityData.badagry.name}
              </dt>
            </div>
            <div
              onClick={() => handleClick("sabo")}
              className={`flex flex-col bg-secondary/5 p-8 cursor-pointer ${
                selectedCityId === "sabo" ? "bg-gray-700" : " hover:opacity-80"
              }`}
            >
              <img src={sabo} className="" />
              <dt className="text-sm font-semibold leading-6 text-gray-300 mt-4">
                {cityData.sabo.name}
              </dt>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Hero;
