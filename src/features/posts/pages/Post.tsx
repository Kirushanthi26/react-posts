import { useEffect, useState } from "react";
import { getPostByIdApi, PostsData } from "../../../api/posts/posts";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router";
import { LoadingComponent } from "../../../components/ui/LoadingComponent";
import { ErrorLoadingComponent } from "../../../components/ui/ErrorLoadingComponent";
import { Button } from "../../../components/ui/Button";

export const Post = () => {
  const [post, setPost] = useState<PostsData | null>(null);
  const { postId } = useParams<{ postId: string }>();
  const navigate = useNavigate();

  const {
    data: PostDetails,
    isLoading,
    isError,
    error,
  } = useQuery<PostsData, Error>({
    queryKey: ["post", postId],
    queryFn: () => getPostByIdApi(Number(postId)),
  });

  useEffect(() => {
    if (PostDetails) {
      setPost(PostDetails);
    }
  }, [PostDetails]);

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

  return (
    <div className="grid place-items-center h-screen w-2/4 mx-auto">
      <Button
        onClick={() => {
          navigate(-1);
        }}
        className="absolute top-0 right-0 m-4"
      >
        Go Back
      </Button>
      <div className="bg-white p-4 m-4 shadow-md rounded-md space-y-8 w-full min-h-fit cursor-pointer">
        {post !== null && (
          <>
            <h1 className="font-semibold text-5xl">{post.title}</h1>
            <p className=" text-xl">{post.body}</p>
          </>
        )}
      </div>
    </div>
  );
};
