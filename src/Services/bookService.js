export async function getBooks() {
  return await fetch("http://localhost:3001/api/books");
}
export async function addBooks() {
  return await fetch("http://localhost:3001/api/new/books");
}
export async function updateBooks() {
  return await fetch("http://localhost:3001/api/update/books");
}
export async function deleteBooks() {
  return await fetch("http://localhost:3001/api/delete/books");
}
