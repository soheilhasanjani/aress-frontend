import { getQueryClient } from "@/configs/react-query";
import getPostContentOption from "../query-options/get-post-content-option";
import React from "react";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import PostContent from "./post-content";

interface PostContentRSCProps {
  postId: string;
}

const PostContentRSC: React.FC<PostContentRSCProps> = ({ postId }) => {
  //
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(getPostContentOption(postId));
  //
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PostContent postId={postId} />
    </HydrationBoundary>
  );
};

export default PostContentRSC;
