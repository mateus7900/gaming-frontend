import React from "react";
import { TextField } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

interface InputProps {
    label: string
}

const CustomTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#A0AAB4",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#E0E3E7",
    },
    "&:hover fieldset": {
      borderColor: "#B2BAC2",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#6F7E8C",
    },
  },
});

const Input: React.FC<InputProps> = ({ label }: InputProps) => {
  return <CustomTextField label={label} variant="outlined" />;
};

export default Input;
