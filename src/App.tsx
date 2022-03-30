import "./App.css";
import Chart from "./components/Chart";
import useFetch from "./hooks/useFetch";
import { AssetId } from "./types";

const App: React.FC = () => {
  const { data, loading, error } = useFetch(
    "https://api.multifarm.fi/jay_flamingo_random_6ix_vegas/get_assets?pg=1" +
      "&tvl_min=50000&sort=tvlStaked&sort_order=desc&farms_tvl_staked_gte=10000000"
  );

  // didn't return component for simplicity
  if (error) {
    console.log(error);
  }

  const chartYAxis = data?.data
    .filter((item) => item.assetId === AssetId.TERRA_LIDO_LUNA)
    .map((item) =>
      item.selected_farm.map((farm) =>
        farm.tvlStakedHistory.map((price) => price.value as number)
      )
    )
    .flat(3);

  const chartXAxis = data?.data
    .filter((item) => item.assetId === AssetId.TERRA_LIDO_LUNA)
    .map((item) =>
      item.selected_farm.map((farm) =>
        farm.tvlStakedHistory.map((price) => price.date)
      )
    )
    .flat(3);

  /* array with fake data(5 percent increase), only for prices, will use same dates as in "real" chart */
  var mockData = chartYAxis?.map((mockPrice) => mockPrice * 1.05);
  mockData = mockData?.map((el) => 
    Number(el.toFixed(2))
  );

  return (
    <>
      {loading && <div className="loader">Loading...</div>}
      <div className="wrapper">
        <div className="chart-width">
          {chartXAxis && chartYAxis && (
            <Chart
              chartYAxis={chartYAxis.reverse()}
              chartXAxis={chartXAxis.reverse()}
              heading={"Lido: Luna TVL"}
            />
          )}
        </div>
        <div className="chart-width">
          {chartXAxis && mockData && (
            <Chart
              chartYAxis={mockData.reverse()}
              chartXAxis={chartXAxis}
              heading={"Lido: Luna APR"}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default App;
