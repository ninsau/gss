import { useLayoutEffect, useState } from "react";
import { DataStore, Predicates, SortDirection } from "aws-amplify";

export const useData = (model: any) => {
  const [data, setData] = useState<typeof model[]>([]);

  useLayoutEffect(() => {
    fetchPosts();
    async function fetchPosts() {
      const getData: typeof model[] = await DataStore.query(model);
      setData(getData);
    }
    const subscription = DataStore.observe(model).subscribe(() => fetchPosts());
    return () => subscription.unsubscribe();
  }, []);

  return data;
};
