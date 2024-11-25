"use client";

import React from "react";
import getLatestPostsOption from "../query-options/get-latest-posts-option";
import { useSuspenseQuery } from "@tanstack/react-query";
import PostCard from "./post-card";

const IMAGE_SRC =
  "https://images.unsplash.com/photo-1650513737590-4a00deeddc7a?q=80&w=5070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const PROFILE_SRC =
  "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=3220&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const LatestPostList = () => {
  //
  const { data } = useSuspenseQuery(getLatestPostsOption);
  //
  return (
    <div className="grid grid-cols-12 gap-5">
      {data.slice(0, 9).map((item) => {
        return (
          <div key={item.id} className="col-span-4">
            <PostCard
              id={item.id}
              image={IMAGE_SRC}
              category="Technology"
              title={item.title}
              profile={PROFILE_SRC}
              fullname="Tracey Wilson"
              createDate="August 20, 2022"
            />
          </div>
        );
      })}
    </div>
  );
};

export default LatestPostList;
