import "./App.css";
import CounterContainer from "./containers/ConterContainer";
import CounterHookContainer from "./containers/ConterHookContainer";
import TodosContainer from "./containers/TodosContainer";
function App() {
  return (
    <div className="App">
      <CounterContainer />
      <CounterHookContainer />
      <hr></hr>
      <TodosContainer />
    </div>
  );
}

export default App;
