"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import "./styles.scss";
import ProfileAvatar from "@/components/Avatar";
import { Divider, Skeleton, Typography } from "@mui/material";
import { Post } from "@/types/Post";
import PostItem from "../Post";
import { createFollowRelationship, getUser } from "@/services/UserService";
import { User } from "@/types/User";
import { getPosts } from "@/services/PostServices";
import useUser from "@/context/UserContext";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { useRouter } from "next/navigation";
import IconButton from "../Atoms/IconButton";

interface UserCardProps {
  username: string;
}

const UserCard: React.FC<UserCardProps> = ({ username }: UserCardProps) => {
  const [userToShow, setUserToShow] = useState<User>();
  const [posts, setPosts] = useState<Post[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [following, setFollowing] = useState<number>(0);
  const [followers, setFollowers] = useState<number>(0);

  useEffect(() => {
    setFollowers(userToShow?.followersCount as number)
    setFollowing(userToShow?.followingCount as number);
  }, [userToShow]);

  const router = useRouter();



  useEffect(() => {
    getUser(username)
      .then(data => {
        setUserToShow(data)
      })
      .catch(error => console.error(error))

    getPosts(username)
      .then(data => {
        setPosts(data)
        setLoading(false)
      })
      .catch(error => console.error(error))
  }, [username])


  const { user, setUser } = useUser();

  const showFollowButton = useMemo(() => {
    if ((user?.username as string) === (userToShow?.username as string)) {
      return false;
    }
    const followers = user?.followers;

    if (followers && followers?.includes(userToShow?.username as string)) {
      return false;
    }

    return true;
  }, [user, userToShow])

  const handleClickFollow = async (follower: string, followed: string) => {
    try {
      const result = await createFollowRelationship(follower, followed);
  
      if (result) {
        console.log('deu bom');
        setFollowers(prevFollowers => prevFollowers + 1);
        router.push('/explore');
      }
    } catch (error) {
      console.error('Erro ao seguir usuário:', error);
    }
  } 

  async function a(follower: string, followed: string){
    const result = await createFollowRelationship(follower, followed);

    if (result){
      console.log('deu bom')
      setFollowers(followers + 1)
      router.push('/explore')
    }
  }


  return (
    <div className="user-data">
      {loading ? <Skeleton animation="wave" /> : (
      <>
      <div className="user-title">
        <div className="user-left-side">
          <div className="user-left-side-title">
            <ProfileAvatar
              name={userToShow?.username.toUpperCase() as string}
              width={50}
              heigth={50}
            />
            <div className="user-names">
              <Typography className="user-total-name">
                {userToShow?.firstName} {userToShow?.lastName}
              </Typography>
              <Typography className="user-username">
                @{userToShow?.username}
              </Typography>
            </div>
          </div>
          {showFollowButton && (
            <div className="user-left-side-button">
              <IconButton
                onClick={async () => await handleClickFollow(user?.username as string, userToShow?.username as string)}
              >
                <PersonAddIcon />
              </IconButton>
            </div>
          )}
        </div>
        <div className="user-right-side">
          <div className="follow-box">
            <Typography>Followers: {followers}</Typography>
            <Typography>Following: {following}</Typography>
          </div>
        </div>
      </div>
      <Divider />
      <div className="user-posts">
        {posts &&
          posts.map((post) => (
            <PostItem
              post={post}
              key={post.postId}
              authorName={`${userToShow?.firstName} ${userToShow?.lastName}`}
              username={username.toUpperCase()}
            />
          ))}
      </div>
      </>)}
    </div>
  );
};

export default UserCard;
