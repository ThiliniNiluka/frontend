import { LineChart } from "@mui/x-charts/LineChart";

export default function BasicArea() {
  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5],
          area: true,
        },
      ]}
      width={400}
      height={300}
    />
  );
}
