"use client";

import getPostCommentOption from "@/features/post-details/query-options/get-post-comment-option";
import { useSuspenseQuery } from "@tanstack/react-query";
import React from "react";

interface PostCommentProps {
  postId: string;
}

const PostComment: React.FC<PostCommentProps> = ({ postId }) => {
  const { data } = useSuspenseQuery(getPostCommentOption(postId));
  return (
    <div className="flex flex-col gap-10">
      {data.map((item) => {
        return (
          <div key={item.id}>
            <div className="text-[#97989F] text-base font-normal">
              {item.email}
            </div>
            <div className="text-xl font-semibold text-[#181A2A] line-clamp-3">
              {item.name}
            </div>
            <div className="text-lg text-[#3B3C4A] font-normal">
              {item.body}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostComment;
