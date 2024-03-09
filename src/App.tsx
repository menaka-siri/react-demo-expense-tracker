import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 10, category: "Utilities" },
    { id: 3, description: "ccc", amount: 10, category: "Utilities" },
    { id: 4, description: "ddd", amount: 10, category: "Utilities" },
  ]);

  return (
    <div>
      {/* <p>Test App</p> */}
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => {
          console.log("Delete", id);
          setExpenses(expenses.filter((item) => item.id != id));
        }}
      ></ExpenseList>
    </div>
  );
}

export default App;
