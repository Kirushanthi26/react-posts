import { useNavigate } from "react-router";
import { PostsData } from "@/api/posts/posts";

type postItemProps = {
  post: PostsData;
  num: number;
};
export const PostItems = ({ post, num }: postItemProps) => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-white p-4 m-4 shadow-md rounded-md space-y-4 cursor-pointer transition-colors hover:bg-violet-100 "
      onClick={() => navigate(`/post/${post.id}`)}
    >
      <h1 className="font-semibold text-xl">
        {num + 1} - {post.title}
      </h1>
    </div>
  );
};
