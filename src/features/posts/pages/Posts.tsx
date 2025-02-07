import { useEffect, useState } from "react";
import { getAllPostApi, PostsData } from "../../../api/posts/posts";
import { useQuery } from "@tanstack/react-query";
import { PostItems } from "../components/PostItems";
import { LoadingComponent } from "../../../components/ui/LoadingComponent";
import { ErrorLoadingComponent } from "../../../components/ui/ErrorLoadingComponent";

export const Posts = () => {
  const [posts, setPosts] = useState<PostsData[]>([]);

  const {
    data: listOfPosts,
    isLoading,
    isError,
    error,
  } = useQuery<PostsData[], Error>({
    queryKey: ["posts"],
    queryFn: getAllPostApi,
  });

  useEffect(() => {
    if (listOfPosts) {
      setPosts(listOfPosts);
    }
  }, [listOfPosts]);

  if (isLoading) {
    return <LoadingComponent />;
  }

  if (isError) {
    return (
      <ErrorLoadingComponent>
        <span>{error.message}</span>
      </ErrorLoadingComponent>
    );
  }

  console.log(posts);

  return (
    <div className="w-full md:w-3/4 md:mx-auto">
      <h1 className="text-5xl text-violet-500 font-medium uppercase tracking-wider underline text-center p-8">
        posts
      </h1>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid md:grid-cols-3 gap-5">
        {posts?.length > 0 ? (
          posts.map((post) => <PostItems post={post} key={post.id} />)
        ) : (
          <p>there is no any Post</p>
        )}
      </div>
    </div>
  );
};
