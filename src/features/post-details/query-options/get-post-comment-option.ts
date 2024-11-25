import { queryOptions } from "@tanstack/react-query";

interface Response {
  id: number;
  email: string;
  name: string;
  body: string;
}

const getPostCommentOption = (postId: string) =>
  queryOptions<Array<Response>>({
    queryKey: ["post-comment", postId],
    queryFn: async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
      );

      return response.json();
    },
  });

export default getPostCommentOption;
