import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "./redux/slice/todo";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  console.log("State", state);

  if (state.todo.isLoading) {
    return <h1>Loading....</h1>;
  }

  return (
    <div className="App">
      <button onClick={(e) => dispatch(fetchTodos())}>Fetch Todos</button>
      {state.todo.data && state.todo.data.map((e) => <li>{e.title}</li>)}
    </div>
  );
}

export default App;
