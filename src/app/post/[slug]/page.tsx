import React from "react";
import { PostDetailsPage } from "@/features/post-details";

const PostDetailsRoute = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  //
  const postId = (await params).slug;
  //
  return <PostDetailsPage postId={postId} />;
};

export default PostDetailsRoute;
