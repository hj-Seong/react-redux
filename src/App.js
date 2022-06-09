import "./App.css";
import CounterContainer from "./containers/ConterContainer";
import TodosContainer from "./containers/TodosContainer";
function App() {
  return (
    <div className="App">
      <CounterContainer />
      <hr></hr>
      <TodosContainer />
    </div>
  );
}

export default App;
