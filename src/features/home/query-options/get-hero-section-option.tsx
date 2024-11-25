import { queryOptions } from "@tanstack/react-query";

const getHeroSectionOption = queryOptions({
  queryKey: ["hero-section"],
  queryFn: async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );

    return response.json();
  },
  staleTime: 60 * 1000,
});

export default getHeroSectionOption;
