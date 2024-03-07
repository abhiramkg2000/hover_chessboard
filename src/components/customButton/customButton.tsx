import { ReactNode } from "react";
import Button from "@mui/material/Button";

type CustomButtonProps = {
  children: ReactNode;
  handleClick?: () => void;
};

const CustomButton = ({ children, handleClick }: CustomButtonProps) => {
  return (
    <Button
      variant="contained"
      sx={{
        margin: "20px",
      }}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
