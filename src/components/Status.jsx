/* eslint-disable react/prop-types */

import moment from "moment";
import { trafficData } from "../data/trafficHistory";

const Status = ({ selectedCityId }) => {
  const trafficStatus = trafficData[selectedCityId][moment().format("H")];

  const trafficDescription = {
    1000: (
      <span>
        <strong className="font-semibold">Light Traffic</strong>: Smooth and
        easy travel with minimal delays.
      </span>
    ),
    2000: (
      <span>
        <strong className="font-semibold">Moderate Traffic</strong>: Drivers may
        experience occasional slowdowns and congestion
      </span>
    ),
    3000: (
      <span>
        <strong className="font-semibold">Heavy Traffic</strong>: Significant
        delays, stop-and-go conditions, and frequent congestion.
      </span>
    ),
  };

  const powerStatus = 0

  const powerDescription = {
    0: "Power is currently out",
    1: "Power is currently on",
  };
  return (
    <div className="bg-gray-900 py-6">
      <div className="pointer-events-none  sm:px-6 sm:pb-5 lg:px-8">
        <div className="pointer-events-auto flex items-center justify-between gap-x-6 bg-gray-800 max-w-7xl mx-auto px-6 py-2.5 sm:rounded-xl sm:py-3 sm:pl-4 sm:pr-3.5">
          <p className="text-lg leading-6 text-secondary">
            <a href="#">
              <strong className="font-semibold">
                Traffic Status{" "}
                <span className="font-normal italic">
                  ({moment().format("DD/MM/YY : HH:mm")})
                </span>
              </strong>

              <span className="px-3" aria-hidden="true">
                &rarr;
              </span>
              {trafficDescription[trafficStatus]}
            </a>
          </p>
        </div>
      </div>
      <div className="pointer-events-none  sm:px-6 sm:pb-5 lg:px-8 pt-4">
        <div className="pointer-events-auto flex items-center justify-between gap-x-6 bg-gray-800 max-w-7xl mx-auto px-6 py-2.5 sm:rounded-xl sm:py-3 sm:pl-4 sm:pr-3.5">
          <p className="text-lg leading-6 text-secondary">
            <a href="#">
              <strong className="font-semibold">
                Power Status{" "}
                <span className="font-normal italic">
                  ({moment().format("DD/MM/YY : HH:mm")})
                </span>
              </strong>

              <span className="px-3" aria-hidden="true">
                &rarr;
              </span>
              {powerDescription[powerStatus]}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Status;
