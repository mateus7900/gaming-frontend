"use client";
import { Post } from "@/types/Post";
import { TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import './styles.scss';
import ProfileAvatar from "../Avatar";
import { getInitial } from "@/Utils/StringUtil";
import LikeButton from "../Atoms/LikeButton";
import ReplyButton from "../Atoms/ReplyButton";
import Button from "../Atoms/Button";

interface PostProps {
    post: Post,
    authorName: string
    username: string
}

const PostItem: React.FC<PostProps> = ({ post, authorName, username }: PostProps) => {
    const [replyMode, setReplyMode] = useState<boolean>(false);
    const [replyData, setReplyData] = useState<string>('');

    const handleReplyData = (e: React.ChangeEvent<HTMLInputElement>) => {
        setReplyData(e.target.value as string)
    }

    const handleReplyMode = () => {
        setReplyMode(!replyMode);
    }

    const StatsButtons: React.FC = () => (
        <div className="stats">
            <LikeButton likes={post.likes} />
            <ReplyButton replies={post.replies} action={handleReplyMode} />
        </div>
    );

    const ReplyArea: React.FC = () => (
        <div className="reply-area">
            <TextField 
                fullWidth 
                label="Escreva sua resposta..." 
                value={replyData} 
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleReplyData(e)}
            />
            <div className="reply-buttons">
                <Button text="ENVIAR" />
                <Button text="CANCELAR" onClick={handleReplyMode} />
            </div>
        </div>
    )

    return <div className="post">
        <div className="post-title">
            <ProfileAvatar width={40} heigth={40} name={username.toUpperCase()} />
            <div className="post-title-name">
                <Typography className="authorname">{authorName}</Typography>
                <Typography className="username">@{post.authorName}</Typography>
            </div>
        </div>
        
        <Typography>{post.content}</Typography>

        {replyMode ? <ReplyArea /> : <StatsButtons />}
    </div>
}

export default PostItem;