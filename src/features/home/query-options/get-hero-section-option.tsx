import { queryOptions } from "@tanstack/react-query";

interface Response {
  title: string;
}

const getHeroSectionOption = queryOptions<Response>({
  queryKey: ["hero-section"],
  queryFn: async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );

    return response.json();
  },
});

export default getHeroSectionOption;
