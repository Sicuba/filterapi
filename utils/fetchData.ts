import { FetchTodo } from "@/entities/fetchTodo";
export async function FetchData() {
  const ds: any[] = await FetchTodo();
  let count: number = 0;
  let arr: any[] = [];
  const speed = navigator.connection.downlink;

  if (!navigator.onLine) {
    return {
      erro: "Sem acesso a Internet!",
      count,
      arr,
    };
  }
  
  if (speed < 0.5) {
    return {
      erro: "Internet está lenta!",
      count,
      arr,
    };
  }
  
  if (ds == null) {
    return {
      erro: "Dados não encontrados!",
      count,
      arr,
    };
  }

    ds.map((d) => {
      if (d?.title?.length > 20) {
        count += 1;
        arr.push(d);
      }
    });
  return {
    count,
    arr,
  };
}
