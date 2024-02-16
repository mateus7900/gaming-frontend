"use client";
import React, { useEffect, useState } from "react";
import './styles.scss';
import { Post } from "@/types/Post";
import PostItem from "../Post";
import useUser from "@/context/UserContext";
import { getTimeline } from "@/services/PostServices";
import { Skeleton } from "@mui/material";



const Timeline: React.FC = () => {

    const [posts, setPosts] = useState<Post[]>()
    const [loading, setLoading] = useState<boolean>(true);

    const { user } = useUser();
    const username: string = user?.username as string

    useEffect(() => {
        getTimeline(username)
            .then(data => {
                setPosts(data);
                setLoading(false);
            })
            .catch(error => console.error(error))
    }, [username])


    return (
        <>
            {loading ? <Skeleton animation="wave" /> : <div className="timeline">
                {posts && posts.map(post => (
                    <PostItem post={post} key={post.postId} authorName={post.authorName} username={post?.authorName.toUpperCase()} />
                ))}
            </div>}
        </>
    )
}

export default Timeline;