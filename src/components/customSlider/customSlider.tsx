import Slider from "@mui/material/Slider";

import { SELECTED_BOX_COLOR } from "../../constants/constants";

type CustomSliderProps = {
  setGridSize: React.Dispatch<React.SetStateAction<number>>;
};

const CustomSlider = ({ setGridSize }: CustomSliderProps) => {
  const handleChange = (_event: Event, value: number | number[]) => {
    setGridSize(value as number);
  };

  return (
    <Slider
      defaultValue={5}
      valueLabelDisplay="on"
      step={1}
      marks
      min={5}
      max={9}
      sx={{
        width: "100%",
        "& .MuiSlider-mark": {
          // Increase the size of marks
          width: 10,
          height: 10,
          borderRadius: "50%",
          backgroundColor: SELECTED_BOX_COLOR,
        },
      }}
      onChange={handleChange}
    />
  );
};

export default CustomSlider;
