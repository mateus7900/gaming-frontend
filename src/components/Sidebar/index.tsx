import React from "react";
import './styles.scss';
import UserLabel from "../UserLabel";
import SidebarContent from "./SidebarContent";

const Sidebar: React.FC = () => {

    return <div className="sidebar">
        <SidebarContent />
        <UserLabel />
    </div>
}

export default Sidebar;