"use client";
import { FetchTodo } from "@/entities/fetchTodo";
import { useEffect, useState } from "react";
export default function Home() {
  useEffect(() => {
    const fetchs = async () => {
      const ds: any[] = await FetchTodo();
      let count:number = 0;
      let arr: any[] = [];
      ds &&
        ds.map((d) => {
          if (d?.title?.length > 20) {
            count += 1;
            arr.push(d);
          }
        });
      setData(arr);
      setTotal(count);
    };
    fetchs();
  }, []);
  const [data, setData] = useState<any[]>([]);
  const [total, setTotal] = useState<number>(0);
  return (
    <main className="flex flex-col items-center gap-5">
      <h1 className="mt-5 text-3xl font-bold">Dados filtrados: {total}</h1>
      <ol>
        {data &&
          data.map((d: any) => (
            <li key={d?.id}>
              {d?.id} - {d?.title}
            </li>
          ))}
      </ol>
    </main>
  );
}
