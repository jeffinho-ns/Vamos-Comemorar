import Button from "@/app/components/button/button";
import { MdAdd, MdRefresh } from "react-icons/md";
import "./styles.sass"

const users = [
  {
    name: "User 01",
    email: "user@hotmail.com",
    telefone: "2199999999",
    status: "pendente",
    createAt: "16/06/2024"
  }
]

export default function Users() {
  return (
    <div className="table-container">
      <div className="btn-table-actions">
        <Button className="btn-refresh">
          <span>
            <MdRefresh className="refresh-icon" />
          </span>
        </Button>
        <Button className="btn-add">
          <span>
            <MdAdd className="add-icon" />
          </span>
        </Button>
      </div>
      <table>
        <thead>
          <tr>
            <td>Nome</td>
            <td>E-mail</td>
            <td>Telefone</td>
            <td>Status</td>
            <td>Criado em</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            {users.map(user => (
              <>
                <td>{user.name}</td>
              </>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
