"use client";
import React, { useEffect } from "react";

import "./styles.scss";
import ProfileAvatar from "../Avatar";
import useUser from "@/context/UserContext";
import { Typography } from "@mui/material";
import { getInitial } from "@/Utils/StringUtil";

import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import IconButton from "../Atoms/IconButton";
import { useRouter } from "next/navigation";

const UserLabel: React.FC = () => {
  const userContext = useUser();

  const { user, logged, setUser, setLogged } = userContext;

  useEffect(() => {
    if (user){
      
    }
  }, [user])

  //const initial = getInitial(user?.firstName as string);

  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/user?id=" + (user?.username as string))
  }

  return (
    <div className="user-label">
      <div className="left">
        <ProfileAvatar name={user?.username as string} width={40} heigth={40}/>
        <Typography>@{user?.username}</Typography>
      </div>
      <IconButton onClick={handleButtonClick}><ExpandLessIcon /></IconButton>
    </div>
  );
};

export default UserLabel;
