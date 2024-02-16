"use client";
import React from "react";
import "./styles.scss";

import "../styles.scss";
import { Divider, Typography, alpha, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Button from "@/components/Atoms/Button";
import SidebarItems from "../SidebarItems";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha('#333333', 0.15),
  "&:hover": {
    backgroundColor: alpha('#373737', 0.25),
  },
  marginLeft: 0,
  marginRight: '10px',
  marginTop: '10px',
  marginBottom: '10px',
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const SidebarContent: React.FC = () => {
  return (
    <div>
      <div className="title">
        <Typography>GAMING</Typography>
      </div>
      <Divider className="divider" />
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
      <div className="search-box">
        <Button text="BUSCAR" className="search-button" />
      </div>
      <Divider />
      <SidebarItems />
    </div>
  );
};

export default SidebarContent;
