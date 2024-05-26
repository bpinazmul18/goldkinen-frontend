import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getUser } from "@/actions/user";
import { Post } from "@/Models/Post";

type PostCardPropsType = {
  post: Post;
};

export default async function PostCard({ post: p }: PostCardPropsType) {
  const userResponse = await getUser(p.userId);

  return (
    <Card key={p.id} className="my-4 mx-auto w-1/2">
      <CardHeader>
        <CardTitle>{p.title}</CardTitle>
        <CardDescription>{userResponse?.data?.name}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{p.body}</p>
      </CardContent>
    </Card>
  );
}
