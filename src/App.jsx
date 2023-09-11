import "./App.css";
import { Counter } from "./components/Counter.jsx";
import { Text } from "./components/Text.jsx";
import { SingleLight } from "./components/SingleLight.jsx";
import { Grid } from "./components/Grid.jsx";
import { useState } from "react";

function App() {
  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(0);

  const handleIncrementRow = () => {
    setRows(rows + 1);
  };

  const handleDecrementRow = () => {
    if (rows > 0) {
      setRows(rows - 1);
    }
  };

  const handleIncrementColumn = () => {
    if (columns < 9) {
      setColumns(columns + 1);
    }
  };

  const handleDecrementColumn = () => {
    if (columns > 0) {
      setColumns(columns - 1);
    }
  };

  const totalLights = rows * columns;

  const lights = Array.from({ length: totalLights });

  return (
    <div>
      <nav className={"nav"}>
        <Text> {totalLights} bulbs </Text>
        <Counter
          count={rows}
          name={"rows"}
          handleIncrement={handleIncrementRow}
          handleDecrement={handleDecrementRow}
        />
        <Counter
          count={columns}
          name={"columns"}
          handleIncrement={handleIncrementColumn}
          handleDecrement={handleDecrementColumn}
        />
      </nav>
      <Grid columns={columns}>
        {lights.map((value, index) => {
          return <SingleLight key={{ index }} />;
        })}
      </Grid>
    </div>
  );
}

export default App;
