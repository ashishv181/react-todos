import "./App.css";
import "./components/ToDoRowItem";
import ToDoRowItem from "./components/ToDoRowItem";

function App() {
  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your Todos</div>
        <div className="card-body">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Description</th>
                <th scope="col">Assigned</th>
              </tr>
            </thead>
            <tbody>
              <ToDoRowItem />
              <tr>
                <th scope="row">2</th>
                <td>Clean Home</td>
                <td>Ashish</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Pay Bills</td>
                <td>Mishti</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
