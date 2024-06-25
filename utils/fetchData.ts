import { FetchTodo } from "@/entities/fetchTodo";
export async function FetchData(){
    const ds: any[] = await FetchTodo();
    let count: number = 0;
    let arr: any[] = [];
    ds &&
      ds.map((d) => {
        if (d?.title?.length > 20) {
          count += 1;
          arr.push(d);
        }
      });
      return {
        count,
        arr
      } 
       
      
}