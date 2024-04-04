import { PATH_BOX_COLOR, DEFAULT_BOX_COLOR } from "../constants/constants";
import { BoxItemType } from "../types/types";

export const createGrid = (gridSize: number): BoxItemType[][] => {
  let gridArray: BoxItemType[][] = [];
  for (let i = 0; i < gridSize; i++) {
    gridArray[i] = [];
    for (let j = 0; j < gridSize; j++) {
      gridArray[i][j] = {
        i: i,
        j: j,
        color: DEFAULT_BOX_COLOR,
      };
    }
  }
  return gridArray;
};

export const findPath = (
  gridBoxes: BoxItemType[][],
  selectedBox: BoxItemType
) => {
  let path1: BoxItemType[] = [];
  let path2: BoxItemType[] = [];
  let path3: BoxItemType[] = [];
  let path4: BoxItemType[] = [];

  for (let i = 0; i < 4; i++) {
    
    let r = selectedBox.i;
    let c = selectedBox.j;

    // main diagonal(selectedBox to top left)
    if (i === 0) {
      while (r - 1 >= 0 && c - 1 >= 0) {
        r = r - 1;
        c = c - 1;
        path1.push({ ...gridBoxes[r][c], color: PATH_BOX_COLOR });
      }
    }
    // antidiagonal (selectedBox to top right)
    else if (i === 1) {
      while (r - 1 >= 0 && c + 1 <= 7) {
        r = r - 1;
        c = c + 1;
        path2.push({ ...gridBoxes[r][c], color: PATH_BOX_COLOR });
      }
    }
    // main diagonal(selectedBox to bottom right)
    else if (i === 2) {
      while (r + 1 <= 7 && c + 1 <= 7) {
        r = r + 1;
        c = c + 1;
        path3.push({ ...gridBoxes[r][c], color: PATH_BOX_COLOR });
      }
    }
    // antidiagonal(selectedBox to bottom left)
    else if (i === 3) {
      while (r + 1 <= 7 && c - 1 >= 0) {
        r = r + 1;
        c = c - 1;
        path4.push({ ...gridBoxes[r][c], color: PATH_BOX_COLOR });
      }
    }
  }
  return [...path1, ...path2, ...path3, ...path4];
};
