import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, signin } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isloggedin = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter:{counter}</h1>
      <button onClick={() => {dispatch(increment(5))}}>+</button>
      <button onClick={() => {dispatch(decrement())}}>-</button>
      {!isloggedin ? (<button onClick={() => {dispatch(signin())}}>Login</button>) : (<button onClick={() => {dispatch(signin())}}>Logout</button>)}
      {isloggedin && <h3>Valuable information I shouldn't see</h3>}
    </div>
  );
}

export default App;
