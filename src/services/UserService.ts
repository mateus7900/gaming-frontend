import { URL_API_BASE } from "@/env/env"
import { User } from "@/types/User";

export async function login(username: string, password: string): Promise<User> {
    const body = { username, password }

    const URL = `${URL_API_BASE}/auth`

    const res = await fetch(URL, {
        method: "POST",
        body: JSON.stringify(body),
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
    });

    const result = await res.json();
    return result as User;
}

export async function getUser(username: string): Promise<User> {

    const URL: string = URL_API_BASE.concat('/profile?username=', username)

    const res = await fetch(URL, {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
    });

    const result = await res.json();
    return result as User;
}

export async function getExplore(username: string): Promise<User[]> {
    const URL: string = URL_API_BASE.concat('/profile/explore?username=', username)

    const res = await fetch(URL, {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
    });

    const result = await res.json();
    return result as User[]
}

export async function createFollowRelationship(follower: string, followed: string): Promise<boolean> {
    const URL: string = `${URL_API_BASE}/profile/add-follow`;

    const body = { followerName: follower, followedName: followed }
    
    const res = await fetch(URL, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
    })

    const result = await res.json();
    return result as boolean;
}