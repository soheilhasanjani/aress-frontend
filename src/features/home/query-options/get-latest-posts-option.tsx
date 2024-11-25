import { queryOptions } from "@tanstack/react-query";

interface Response {
  id: number;
  title: string;
}

const getLatestPostsOption = queryOptions<Array<Response>>({
  queryKey: ["latest-posts"],
  queryFn: async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    return response.json();
  },
});

export default getLatestPostsOption;
