"use client";
import React, { useState } from "react";

import "./styles.scss";
import Sidebar from "@/components/Sidebar";
import { User } from "@/types/User";
import useUser from "@/context/UserContext";
import { getExplore } from "@/services/UserService";
import UserList from "@/components/UserList";

const ExplorePage: React.FC = () => {

    const { user } = useUser();


    return <div className="explore-page">
        <Sidebar />
        
        <UserList username={user?.username as string} />
        
    </div>
}

export default ExplorePage;