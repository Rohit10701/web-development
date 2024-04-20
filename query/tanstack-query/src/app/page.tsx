"use client"
import { useQuery } from "@tanstack/react-query";

type ResponseData = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export default function Home() {
  const fetchData = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
    if (!res.ok) {
      throw new Error("network res was not ok");
    }
    const data = await res.json();
    return data;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["placeholderAPI"],
    queryFn: () => fetchData(),
  });

  return (
    <>
      {isLoading ? (
        <div>Loading data...</div>
      ) : (
        <>
          {data.map((d: ResponseData, index: number) => (
            <div key={index}> {d.id} </div>
          ))}
        </>
      )}
    </>
  );
}
