import MyModal from "./modal";
import Table from "react-bootstrap/Table";
import {
  getBooks,
  deleteBooks,
  updateBooks,
  addBooks,
} from "../Services/bookService";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

function MyTable() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getBooks()
      .then((data) => data.json())
      .then((res) => {
        setBooks(res.message);
      });
  }, []);
  let number = 0;

  return (
    <div className="container mt-5">
      <Table responsive="sm" striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Номын нэр</th>
            <th>Үнэ</th>
            <th>Зохиолч</th>
            <th>ISBN дугаар</th>
            <th>Хэвлэгдсэн огноо</th>
          </tr>
        </thead>
        <tbody>
          {books.map((data, index) => {
            number += 1;
            return (
              <tr key={index}>
                <td>{number}</td>
                <td>{data.name}</td>
                <td>{new Intl.NumberFormat().format(data.price) + "₮"}</td>
                <td>{data.author}</td>
                <td>{data.isbn}</td>
                <td>{format(Date.parse(data.published_date), "yyyy-MM-dd")}</td>
                <td className="pointer">
                  <MyModal
                    type="Ном засах"
                    data={data}
                    title={<FaPencilAlt color="gray" />}
                  />
                </td>
                <td className="pointer">
                  <MyModal
                    data={data}
                    type="delete"
                    title={<FaTrashAlt color="gray" />}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <MyModal
        data={""}
        type={"Ном нэмэх"}
        title={
          <button className="addButton text-white d-block mx-auto border-0 px-3 py-2">
            + Add Book
          </button>
        }
      />
    </div>
  );
}

export default MyTable;
