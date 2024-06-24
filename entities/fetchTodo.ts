export const FetchTodo = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log("Erro:", error));
  return response;
};
/* {data.map((d: any) => {
      const format = [...d?.title];
      if (format.length > 50) <li> {d?.title}</li>;
    })} */
