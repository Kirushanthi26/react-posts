import { PostsData } from "../../../api/posts/posts";
import { Card } from "../../../components/ui/Card";

type postItemProps = {
  post: PostsData;
};
export const PostItems = ({ post }: postItemProps) => {
  return (
    <Card className="space-y-4">
      <h1 className="font-semibold text-xl">{post.title}</h1>
      <p>{post.body}</p>
    </Card>
  );
};
