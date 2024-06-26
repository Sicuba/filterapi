"use client";
import { FetchData } from "@/utils/fetchData";
import { useEffect, useState } from "react";
export default function Home() {
  const [data, setData] = useState<any[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [erro, setErro] = useState<string|undefined>("");
  useEffect(() => {
    FetchData().then((response) => {
      setData(response.arr);
      setTotal(response.count);
      setErro(response?.erro)
    });
  }, []);

  return (
    <main className="flex flex-col items-center gap-5">
      <h1 className="mt-5 text-3xl font-bold">{erro ? erro : `Dados filtrados: ${total}`}</h1>
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
