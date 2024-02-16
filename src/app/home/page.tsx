import React from "react";
import './styles.scss'
import Sidebar from "@/components/Sidebar";
import TrendingTopics from "@/components/TrendingTopics";
import Timeline from "@/components/Timeline";

const HomePage: React.FC = () => {
    return <div className="home-page">
        <Sidebar />
        <Timeline />
        <TrendingTopics />
    </div>
}

export default HomePage;