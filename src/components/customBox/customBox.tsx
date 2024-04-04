import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import {
  DEFAULT_BOX_COLOR,
  SELECTED_BOX_COLOR,
  PATH_BOX_COLOR,
  WHITE,
  BLACK,
  DEFAULT_GRID_SIZE,
} from "../../constants/constants";
import { BoxItemType } from "../../types/types";

import { findPath } from "../../helpers/helpers";

import "./customBox.css";

type CustomBoxProps = {
  index: number;
  item: BoxItemType;
  gridBoxes: BoxItemType[][];
  setGridBoxes: React.Dispatch<React.SetStateAction<BoxItemType[][]>>;
  selectedBox: BoxItemType;
  setSelectedBox: React.Dispatch<React.SetStateAction<BoxItemType>>;
  pathArray: BoxItemType[];
  setPathArray: React.Dispatch<React.SetStateAction<BoxItemType[]>>;
};

const CustomBox = ({
  index,
  item,
  gridBoxes,
  setGridBoxes,
  selectedBox,
  setSelectedBox,
  pathArray,
  setPathArray,
}: CustomBoxProps) => {
  const boxTextColor = item.color === SELECTED_BOX_COLOR ? WHITE : BLACK;
  const boxWidth = 1 / DEFAULT_GRID_SIZE;
  const boxHeight = 1 / DEFAULT_GRID_SIZE;

  const handleMouseEnter = () => {
    // console.log(" enter ", item.i, item.j);
    setGridBoxes((prev) => {
      const formattedArray = prev.map((row, i) => {
        return row.map((item, j) => {
          if (parseInt(i + "" + j) === index) {
            return {
              ...item,
              color: SELECTED_BOX_COLOR,
            };
          }
          return item;
        });
      });
      return formattedArray;
    });
    setSelectedBox({
      ...item,
      color: SELECTED_BOX_COLOR,
    });
    setPathArray(
      findPath(gridBoxes, {
        ...item,
        color: SELECTED_BOX_COLOR,
      })
    );
  };

  const handleMouseLeave = () => {
    // console.log(" leave ", item.i, item.j);
    setGridBoxes((prev) => {
      const formattedArray = prev.map((row) => {
        return row.map((item) => {
          return {
            ...item,
            color: DEFAULT_BOX_COLOR,
          };
        });
      });
      return formattedArray;
    });
    setSelectedBox({} as BoxItemType);
    setPathArray([]);
  };

  useEffect(() => {
    const isBoxSelected = pathArray.some(
      (box) => parseInt(box.i + "" + box.j) === index
    );

    if (isBoxSelected) {
      setGridBoxes((prev) => {
        const formattedArray = prev.map((row, i) => {
          return row.map((item, j) => {
            if (parseInt(i + "" + j) === index) {
              return {
                ...item,
                color: PATH_BOX_COLOR,
              };
            }
            return item;
          });
        });
        return formattedArray;
      });
    }
  }, [index, setGridBoxes, selectedBox]);

  return (
    <Grid
      item
      xs={1}
      className="grid_item"
      sx={{
        backgroundColor: item.color,
        color: boxTextColor,
        width: `${boxWidth * 100}px`,
        height: `${boxHeight * 400}px`,
      }}
    >
      <Box
        className="box"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {item.i}
        {item.j}
      </Box>
    </Grid>
  );
};

export default CustomBox;
