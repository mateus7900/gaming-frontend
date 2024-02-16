import React from "react";
import './styles.scss';
import ProfileAvatar from "../Avatar";

const Header: React.FC = () => {

    return <div className="header">
        <ProfileAvatar />
    </div>
};

export default Header;