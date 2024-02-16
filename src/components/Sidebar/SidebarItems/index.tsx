"use client";
import React from "react";
import Content from "./NavItems";

import './styles.scss';
import IconButton from "@/components/Atoms/IconButton";
import { Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import Button from "@/components/Atoms/Button";

const SidebarItems: React.FC = () => {

    const router = useRouter();

    const handleOnClick = (path: string) => {
        router.push(path);
    }

    return (
        <>
            {Content.map(item => (
                <div className="sidebar-item" key={item.name}>
                    <IconButton onClick={() => handleOnClick(item.path)}>
                        {item.icon}
                    </IconButton>
                    <Typography>{item.name}</Typography>
                </div>
            ))}
        </>
    )
}

export default SidebarItems;