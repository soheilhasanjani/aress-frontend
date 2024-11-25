import { getQueryClient } from "@/configs/react-query";
import getPostCommentOption from "../query-options/get-post-comment-option";
import React from "react";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import PostComment from "./post-comment";

interface PostCommentRSCProps {
  postId: string;
}

const PostCommentRSC: React.FC<PostCommentRSCProps> = ({ postId }) => {
  //
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(getPostCommentOption(postId));
  //
  return (
    <div className="w-full max-w-[800px] mx-auto py-9">
      <h2 className="text-2xl font-bold mb-8 text-[#181A2A]">Comments</h2>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <PostComment postId={postId} />
      </HydrationBoundary>
    </div>
  );
};

export default PostCommentRSC;
