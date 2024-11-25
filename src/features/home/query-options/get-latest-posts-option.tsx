import { queryOptions } from "@tanstack/react-query";

const getLatestPostsOption = queryOptions({
  queryKey: ["latest-posts"],
  queryFn: async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    return response.json();
  },
  staleTime: 60 * 1000,
});

export default getLatestPostsOption;
