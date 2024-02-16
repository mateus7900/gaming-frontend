"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

import "./styles.scss";
import Sidebar from "@/components/Sidebar";
import TrendingTopics from "@/components/TrendingTopics";
import UserCard from "@/components/UserCard";

const UserPage: React.FC = () => {

    const searchParams = useSearchParams();

    const username = searchParams.get("id");

    return (
        <div className="user-page">
            <Sidebar />
            <UserCard username={username as string} />
            <TrendingTopics />
        </div>
    );
};

export default UserPage;
