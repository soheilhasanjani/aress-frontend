"use client";

import getPostContentOption from "@/features/post-details/query-options/get-post-content-option";
import { useSuspenseQuery } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";

interface PostContentProps {
  postId: string;
}

const IMAGE_SRC =
  "https://images.unsplash.com/photo-1650513737590-4a00deeddc7a?q=80&w=5070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const PROFILE_SRC =
  "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=3220&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const PostContent: React.FC<PostContentProps> = ({ postId }) => {
  const { data } = useSuspenseQuery(getPostContentOption(postId));
  return (
    <div className="w-full max-w-[800px] mx-auto">
      <div className="bg-[#4B6BFB] rounded-md text-white text-sm px-2.5 py-1 w-fit mb-4">
        Technology
      </div>
      <div className="mb-6 text-[#181A2A] text-4xl font-semibold line-clamp-3">
        {data.title}
      </div>
      <div className="flex items-center gap-3">
        <Image
          src={PROFILE_SRC}
          width={36}
          height={36}
          className="size-9 object-cover rounded-full"
          alt="profile-image"
          priority
        />
        <div className="text-[#97989F] text-base font-medium">
          Jason Francisco
        </div>
        <div className="text-[#97989F] text-base font-normal">
          August 20, 2022
        </div>
      </div>
      <div className="aspect-[800/462] my-8">
        <Image
          src={IMAGE_SRC}
          width={800}
          height={426}
          className="size-full object-cover rounded-xl"
          alt="post-image"
          priority
        />
      </div>
      <p className="text-xl text-[#3B3C4A] font-normal">{data.body}</p>
    </div>
  );
};

export default PostContent;
