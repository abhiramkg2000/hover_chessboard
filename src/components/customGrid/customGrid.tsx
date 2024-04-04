import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import CustomBox from "../customBox/customBox";

import { DEFAULT_GRID_SIZE } from "../../constants/constants";
import { BoxItemType } from "../../types/types";

import { createGrid } from "../../helpers/helpers";

import "./customGrid.css";

const CustomGrid = () => {
  const [gridBoxes, setGridBoxes] = useState<BoxItemType[][]>([]);
  const [selectedBox, setSelectedBox] = useState<BoxItemType>(
    {} as BoxItemType
  );
  const [pathArray, setPathArray] = useState<BoxItemType[]>([]);

  useEffect(() => {
    const gridArray = createGrid(DEFAULT_GRID_SIZE);
    setGridBoxes(gridArray);
  }, []);

  return (
    <Box className="grid">
      <Grid container columns={DEFAULT_GRID_SIZE} className="grid_container">
        {gridBoxes?.map((row, i) =>
          row.map((item, j) => (
            <CustomBox
              key={parseInt(i + "" + j)}
              index={parseInt(i + "" + j)}
              item={item}
              gridBoxes={gridBoxes}
              setGridBoxes={setGridBoxes}
              selectedBox={selectedBox}
              setSelectedBox={setSelectedBox}
              pathArray={pathArray}
              setPathArray={setPathArray}
            />
          ))
        )}
      </Grid>
    </Box>
  );
};

export default CustomGrid;
