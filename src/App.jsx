import "./App.css";
import { Counter } from "./components/Counter.jsx";
import { Text } from "./components/Text.jsx";

function App() {
  return (
    <div>
      <nav className={"nav"}>
        <Text> 0 bulbs </Text>
        <Counter count={4} name={"rows"} />
        <Counter count={3} name={"columns"} />
      </nav>
    </div>
  );
}

export default App;
