import React from "react";
import "./styles.scss";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Typography } from "@mui/material";

interface LikeButtonProps {
  likes: number;
}

const LikeButton: React.FC<LikeButtonProps> = ({ likes }: LikeButtonProps) => {
  return (
    <div className="like">
      <button className="like-button">
        <FavoriteBorderIcon />
      </button>
      <Typography>{likes}</Typography>
    </div>
  );
};

export default LikeButton;
