"use client";
import { getExplore } from "@/services/UserService";
import { User } from "@/types/User";
import React, { useEffect, useState } from "react";

import "./styles.scss";
import { Typography } from "@mui/material";
import ProfileAvatar from "../Avatar";
import IconButton from "../Atoms/IconButton";

import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useRouter } from "next/navigation";

interface UserListProps {
  username: string;
}

const UserList: React.FC<UserListProps> = ({ username }: UserListProps) => {
  const [users, setUsers] = useState<User[]>();

  const router = useRouter();

  async function fetchDataExplore() {
    try{
      const usersData = await getExplore(username);
      setUsers(usersData);
    } catch (err){
      console.error(err);
    }
  }

  fetchDataExplore();

  // useEffect(() => {
  //   getExplore(username)
  //     .then((data) => setUsers(data))
  //     .catch((error) => console.error(error));
  // }, []);

  const handleButtonClick = (username: string) => {
    router.push("/user?id=" + (username))
  }

  return (
    <div className="user-items">
      <div className="explore-title">
        <Typography className="title-typo">
          Encontre novos amigos aqui!
        </Typography>
      </div>
      <div className="user-content">
        {users &&
          users.map((item) => (
            <div className="user-item" key={JSON.stringify(item)}>
              <div className="left-side">
                <ProfileAvatar name={item.username} width={40} heigth={40} />
                <div className="user-item-names">
                  <Typography className="user-item-name">
                    {item.firstName} {item.lastName}
                  </Typography>
                  <Typography className="user-item-username">
                    @{item.username}
                  </Typography>
                </div>
              </div>
              <div className="right-side">
                <IconButton onClick={() => handleButtonClick(item.username)}>
                  <ExpandLessIcon />
                </IconButton>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserList;
