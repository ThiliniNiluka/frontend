// import { BarChart } from "@mui/x-charts/BarChart";

// export default function BasicBars() {
//   return (
//     <BarChart
//       xAxis={[{ scaleType: "band", data: ["group A", "group B", "group C"] }]}
//       series={[{ data: [4, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
//       width={500}
//       height={300}
//     />
//   );
// }

import * as React from "react";
import Stack from "@mui/material/Stack";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import { dataset, valueFormatter } from "./weather";

type TickParamsSelectorProps = {
  tickLabelPlacement: "tick" | "middle";
  setTickLabelPlacement: React.Dispatch<
    React.SetStateAction<"tick" | "middle">
  >;
};

function TickParamsSelector({
  tickLabelPlacement,
  setTickLabelPlacement,
}: TickParamsSelectorProps) {
  return (
    <Stack
      direction="column"
      justifyContent="space-between"
      sx={{ width: "100%" }}
    >
      <FormControl>
        <RadioGroup
          row
          aria-labelledby="label-placement-radio-buttons-group-label"
          name="label-placement"
          value={tickLabelPlacement}
          onChange={(event) =>
            setTickLabelPlacement(event.target.value as "tick" | "middle")
          }
        >
          <FormControlLabel value="tick" control={<Radio />} label="tick" />
          <FormControlLabel value="middle" control={<Radio />} label="middle" />
        </RadioGroup>
      </FormControl>
    </Stack>
  );
}

const chartSetting = {
  series: [{ dataKey: "seoul", valueFormatter }],
  height: 300,
  sx: {
    [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
      transform: "translateX(-10px)",
    },
  },
};

export default function TickPlacementBars() {
  const [tickLabelPlacement, setTickLabelPlacement] = React.useState<
    "middle" | "tick"
  >("middle");

  return (
    <div style={{ width: "100%" }}>
      <TickParamsSelector
        tickLabelPlacement={tickLabelPlacement}
        setTickLabelPlacement={setTickLabelPlacement}
      />
      <BarChart
        dataset={dataset}
        xAxis={[
          {
            scaleType: "band",
            dataKey: "month",
            tickLabelPlacement,
          },
        ]}
        {...chartSetting}
      />
    </div>
  );
}
