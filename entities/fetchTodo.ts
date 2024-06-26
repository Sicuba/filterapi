export const FetchTodo = () => {
  const response = fetch("http://localhost/humanresources/Users")
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log("Erro:", error));
  return response;
};

