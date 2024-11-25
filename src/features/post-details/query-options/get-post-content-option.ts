import { queryOptions } from "@tanstack/react-query";

interface Response {
  title: string;
  body: string;
}

const getPostContentOption = (postId: string) =>
  queryOptions<Response>({
    queryKey: ["post-content", postId],
    queryFn: async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );

      return response.json();
    },
  });

export default getPostContentOption;
