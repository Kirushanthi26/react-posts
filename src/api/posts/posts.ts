import axios from "axios";

export type PostsData = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export async function getAllPostApi(pageParam: number) {
  try {
    const response = await axios.get<PostsData[]>(
      `https://jsonplaceholder.typicode.com/posts/?_limit=30&_page=${pageParam}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getPostByIdApi(id: number) {
  try {
    const response = await axios.get<PostsData>(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}
