import React from "react";
import getLatestPostsOption from "../query-options/get-latest-posts-option";
import { getQueryClient } from "@/configs/react-query";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import LatestPostList from "./latest-post-list";

const LatestPostRSC = () => {
  //
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(getLatestPostsOption);
  //
  return (
    <div>
      <h2 className="text-2xl font-bold mb-8 text-[#181A2A]">Latest Post</h2>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <LatestPostList />
      </HydrationBoundary>
    </div>
  );
};

export default LatestPostRSC;
