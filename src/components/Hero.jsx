import abeokuta from "../assets/img/places/abeokuta.png";
import apapa from "../assets/img/places/apapa.png";
import badagry from "../assets/img/places/badagry.png";
import sabo from "../assets/img/places/sabo.png";

// eslint-disable-next-line react/prop-types
const Hero = ({ cityData, selectedCityId, setSelectedCityId }) => {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
              Stay Informed, Stay Connected: Your City at Your Fingertips
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Lorem ipsum dolor sit amet consect adipisicing possimus.
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            <div
              onClick={() => setSelectedCityId("abeokuta")}
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
              onClick={() => setSelectedCityId("apapa")}
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
              onClick={() => setSelectedCityId("badagry")}
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
              onClick={() => setSelectedCityId("sabo")}
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