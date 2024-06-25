export const FetchTodo = () => {
  const response = fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log("Erro:", error));
  return response;
};

