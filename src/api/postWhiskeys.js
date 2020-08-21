export default async function postToDo(todo) {
  const response = await fetch("http://localhost:3000/mywhiskies", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  });
  return response.ok;
}
