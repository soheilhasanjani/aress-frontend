import React from "react";
import PostCommentRSC from "../components/post-comment-rsc";
import PostContentRSC from "../components/post-content-rsc";

interface PostDetailsPageProps {
  postId: string;
}

const PostDetailsPage: React.FC<PostDetailsPageProps> = ({ postId }) => {
  return (
    <div className="container">
      <PostContentRSC postId={postId} />
      <PostCommentRSC postId={postId} />
    </div>
  );
};

export default PostDetailsPage;
