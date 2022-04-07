export async function getBooks() {
  return await fetch("http://localhost:3001/api/books");
}
export async function addBooks(data) {
  return await fetch("http://localhost:3001/api/new/books", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((data) => data.json())
    .then((res) => console.log(res.message));
}
export async function updateBooks(id, data) {
  return await fetch(`http://localhost:3001/api/update/books/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((data) => data.json())
    .then((res) => console.log(res.message));
}
export async function deleteBooks(id) {
  return await fetch(`http://localhost:3001/api/delete/books/${id}`, {
    method: "DELETE",
  })
    .then((data) => data.json())
    .then((res) => console.log(res));
}
