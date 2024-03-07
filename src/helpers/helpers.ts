import {
  SELECTED_BOX_COLOR,
  PATH_BOX_COLOR,
  DEFAULT_BOX_COLOR,
} from "../constants/constants";
import { BoxItemType } from "../types/types";

export const createGrid = (gridSize: number): BoxItemType[][] => {
  let gridArray: BoxItemType[][] = [];
  for (let i = 0; i < gridSize; i++) {
    gridArray[i] = [];
    for (let j = 0; j < gridSize; j++) {
      gridArray[i][j] = {
        i: i,
        j: j,
        clicked: false,
        color: DEFAULT_BOX_COLOR,
      };
    }
  }
  return gridArray;
};

export const findPath = (
  selectedArray: BoxItemType[][],
  seletedBoxes: BoxItemType[]
) => {
  // console.log(...seletedBoxes);
  if (seletedBoxes.length === 2) {
    let path: BoxItemType[] = [];
    const startingRow = seletedBoxes[0].i;
    const startingColumn = seletedBoxes[0].j;
    const endingRow = seletedBoxes[1].i;
    const endingColumn = seletedBoxes[1].j;
    let r = startingRow;
    let c = startingColumn;
    path.push(selectedArray[startingRow][startingColumn]);
    // console.log(startingRow, startingColumn, endingRow, endingColumn);
    // selectedArray.forEach((row, i) => {
    // row.forEach((_, j) => {
    // //startingRow < endingRow
    // if (startingRow < endingRow && startingColumn < endingColumn) {
    //   const item = selectedArray[i + 1][j + 1];
    //   console.log(item);
    //   path.push(item);
    // } else if (startingRow < endingRow && startingColumn === endingColumn) {
    //   path.push(selectedArray[i + 1][j]);
    // } else if (startingRow === endingRow && startingColumn < endingColumn) {
    //   path.push(selectedArray[i][j + 1]);
    // }
    // //startingRow > endingRow
    // else if (startingRow > endingRow && startingColumn > endingColumn) {
    //   path.push(selectedArray[i - 1][j - 1]);
    // } else if (startingRow > endingRow && startingColumn === endingColumn) {
    //   path.push(selectedArray[i - 1][j]);
    // } else if (startingRow === endingRow && startingColumn > endingColumn) {
    //   path.push(selectedArray[i][j - 1]);
    // }
    //startingRow < endingRow
    // if (
    //   i >= startingRow &&
    //   i <= endingRow &&
    //   j >= startingColumn &&
    //   j <= endingColumn
    // ) {
    //   // //startingRow
    //   // if (i === startingRow && j === startingColumn) {
    //   //   console.log("8", i, j);
    //   //   path.push(selectedArray[i][j]);
    //   // }
    //   if (i + 1 <= endingRow && j + 1 <= endingColumn) {
    //     console.log("1", i, j);
    //     path.push(selectedArray[i + 1][j + 1]);
    //     (r = i + 1), (c = j + 1);
    //   } else if (i + 1 < endingRow && j === endingColumn) {
    //     console.log("2", i, j);
    //     path.push(selectedArray[i + 1][j]);
    //     (r = i + 1), (c = j);
    //   } else if (i === endingRow && j + 1 < endingColumn) {
    //     console.log("3", i, j);
    //     path.push(selectedArray[i][j + 1]);
    //     (r = i), (c = j + 1);
    //   }
    //   //startingRow > endingRow
    //   else if (i - 1 > endingRow && j - 1 > endingColumn) {
    //     console.log("4", i, j);
    //     path.push(selectedArray[i - 1][j - 1]);
    //     (r = i - 1), (c = j - 1);
    //   } else if (i - 1 > endingRow && j === endingColumn) {
    //     console.log("5", i, j);
    //     path.push(selectedArray[i - 1][j]);
    //     (r = i - 1), (c = j);
    //   } else if (i === endingRow && j - 1 > endingColumn) {
    //     console.log("6", i, j);
    //     path.push(selectedArray[i][j - 1]);
    //     (r = i), (c = j - 1);
    //   }
    //   //endingRow
    //   else if (i === endingRow && j === endingColumn) {
    //     console.log("7", i, j);
    //     (r = i), (c = j);
    //     path.push(selectedArray[i][j]);
    //     (r = i), (c = j);
    //   }
    // }
    while (r != endingRow || c != endingColumn) {
      // right diagonal(top to bottom)
      if (r < endingRow && c < endingColumn) {
        r = r + 1;
        c = c + 1;
        path.push({ ...selectedArray[r][c], color: PATH_BOX_COLOR });
      }
      // left diagonal(bottom to top)
      else if (r > endingRow && c > endingColumn) {
        r = r - 1;
        c = c - 1;
        path.push({ ...selectedArray[r][c], color: PATH_BOX_COLOR });
      }
      // top to bottom
      else if (r < endingRow && c === endingColumn) {
        r = r + 1;
        path.push({ ...selectedArray[r][c], color: PATH_BOX_COLOR });
      }
      // bottom to top
      else if (r > endingRow && c === endingColumn) {
        r = r - 1;
        path.push({ ...selectedArray[r][c], color: PATH_BOX_COLOR });
      }
      // left to right
      else if (r === endingRow && c < endingColumn) {
        c = c + 1;
        path.push({ ...selectedArray[r][c], color: PATH_BOX_COLOR });
      }
      // right to left
      else if (r === endingRow && c > endingColumn) {
        c = c - 1;
        path.push({ ...selectedArray[r][c], color: PATH_BOX_COLOR });
      }
      // r < endingRow && c > endingColumn
      else if (r < endingRow && c > endingColumn) {
        c = c - 1;
        r = r + 1;
        path.push({ ...selectedArray[r][c], color: PATH_BOX_COLOR });
      }
      // r > endingRow && c < endingColumn
      else if (r > endingRow && c < endingColumn) {
        c = c + 1;
        r = r - 1;
        path.push({ ...selectedArray[r][c], color: PATH_BOX_COLOR });
      }
      // //startingRow < endingRow
      // if (startingRow < endingRow && startingColumn < endingColumn) {
      //   const item = selectedArray[i + 1][j + 1];
      //   console.log(item);
      //   path.push(item);
      // } else if (
      //   startingRow < endingRow &&
      //   startingColumn === endingColumn
      // ) {
      //   path.push(selectedArray[i + 1][j]);
      // } else if (
      //   startingRow === endingRow &&
      //   startingColumn < endingColumn
      // ) {
      //   path.push(selectedArray[i][j + 1]);
      // }

      // //startingRow > endingRow
      // else if (startingRow > endingRow && startingColumn > endingColumn) {
      //   path.push(selectedArray[i - 1][j - 1]);
      // } else if (
      //   startingRow > endingRow &&
      //   startingColumn === endingColumn
      // ) {
      //   path.push(selectedArray[i - 1][j]);
      // } else if (
      //   startingRow === endingRow &&
      //   startingColumn > endingColumn
      // ) {
      //   path.push(selectedArray[i][j - 1]);
      // }
    }
    // To change the last box color to SELECTED_BOX_COLOR
    if (r === endingRow && c === endingColumn) {
      path[path.length - 1] = {
        ...path[path.length - 1],
        color: SELECTED_BOX_COLOR,
      };
    }
    // });
    // });
    return path;
  }
};
