import "./App.css";
import Todos from "./components/Todos";
import CounterContainer from "./containers/ConterContainer";
function App() {
  return (
    <div className="App">
      <CounterContainer />
      <hr></hr>
      <Todos />
    </div>
  );
}

export default App;
