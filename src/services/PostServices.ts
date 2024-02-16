import { URL_API_BASE } from "@/env/env";
import { Post } from "@/types/Post";
import { Trending } from "@/types/Trending";

export async function getPosts(username: string): Promise<Post[]> {
  const URL = `${URL_API_BASE}/posts?username=${username}`;

  const res = await fetch(URL, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
}

export async function getTimeline(username: string): Promise<Post[]> {
  const URL = `${URL_API_BASE}/posts/timeline?username=${username}`;

  const res = await fetch(URL, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
}

export async function getTrendings(): Promise<Trending[]> {
  const URL = `${URL_API_BASE}/posts/trending`;

  const res = await fetch(URL, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
}
