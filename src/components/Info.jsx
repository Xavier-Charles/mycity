import moment from "moment";
import {
  XAxis,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
} from "recharts";
import { trafficData } from "../data/trafficHistory";

// eslint-disable-next-line react/prop-types
const Info = ({ cityData, selectedCityId }) => {
  const barColors = ["#d03922d9", "#FFA630", "#06a55d"];

  const data = [
    {
      time: moment().subtract(5, "hours").format("hh:mm A"),
      degree:
        trafficData[selectedCityId][
          moment().subtract(5, "hours").format("H")
        ],
      pv: 1398,
      amt: 2210,
    },
    {
      time: moment().subtract(4, "hours").format("hh:mm A"),
      degree:
        trafficData[selectedCityId][
          moment().subtract(4, "hours").format("H")
        ],
      pv: 9800,
      amt: 2290,
    },
    {
      time: moment().subtract(3, "hours").format("hh:mm A"),
      degree:
        trafficData[selectedCityId][
          moment().subtract(3, "hours").format("H")
        ],
      pv: 3908,
      amt: 2000,
    },
    {
      time: moment().subtract(2, "hours").format("hh:mm A"),
      degree:
        trafficData[selectedCityId][
          moment().subtract(2, "hours").format("H")
        ],
      pv: 4800,
      amt: 2181,
    },
    {
      time: moment().subtract(1, "hours").format("hh:mm A"),
      degree:
        trafficData[selectedCityId][
          moment().subtract(1, "hours").format("H")
        ],
      pv: 3800,
      amt: 2500,
    },
    {
      time: moment().subtract(0, "hours").format("hh:mm A"),
      degree:
        trafficData[selectedCityId][
          moment().subtract(0, "hours").format("H")
        ],
      pv: 4300,
      amt: 2100,
    },
    {
      time: moment().add(1, "hours").format("hh:mm A"),
      degree:
        trafficData[selectedCityId][
          moment().subtract(1, "hours").format("H")
        ],
      pv: 4300,
      amt: 2100,
    },
    {
      time: moment().add(2, "hours").format("hh:mm A"),
      degree:
        trafficData[selectedCityId][
          moment().add(2, "hours").format("H")
        ],
      pv: 4300,
      amt: 2100,
    },
    {
      time: moment().add(3, "hours").format("hh:mm A"),
      degree:
        trafficData[selectedCityId][
          moment().add(3, "hours").format("H")
        ],
      pv: 4300,
      amt: 2100,
    },
    {
      time: moment().add(4, "hours").format("hh:mm A"),
      degree:
        trafficData[selectedCityId][
          moment().add(4, "hours").format("H")
        ],
      pv: 4300,
      amt: 2100,
    },
    {
      time: moment().add(5, "hours").format("hh:mm A"),
      degree:
        trafficData[selectedCityId][
          moment().add(5, "hours").format("H")
        ],
      pv: 4300,
      amt: 2100,
    },
    {
      time: moment().add(6, "hours").format("hh:mm A"),
      degree:
        trafficData[selectedCityId][
          moment().add(6, "hours").format("H")
        ],
      pv: 4300,
      amt: 2100,
    },
  ];


  return (
    <div className="bg-gray-900 py-4">
      <h2 className="order-first text-center mb-16 text-3xl font-semibold tracking-tight text-white">
        Traffic History for {cityData[selectedCityId].name}
      </h2>
      <div className="mx-auto h-[450px] max-w-7xl px-6 lg:px-8">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart width={150} height={40} data={data}>
            <Bar dataKey="degree" fill="#8884d8" radius={[25, 25, 25, 25]}>
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  opacity={0.93}
                  fill={
                    barColors[
                      entry.degree === 3000 ? 0 : entry.degree === 2000 ? 1 : 2
                    ]
                  }
                />
              ))}
            </Bar>
            <XAxis dataKey="time" axisLine={false} padding="gap" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Info;