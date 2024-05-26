import { getPosts } from "@/actions/post";
import PostCard from "@/components/PostCard";
import Link from "next/link";

export default async function Home() {
  const postsResponse = await getPosts();
  return (
    <div className="container mx-auto px-4">
      <Link href="/whyme"> Why me? </Link>
      {postsResponse?.data?.map((p) => {
        return <PostCard post={p} key={p.id} />;
      })}
    </div>
  );
}
