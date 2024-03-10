import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import categories from "./data/categories";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "Electricity", amount: 35, category: "Utilities" },
    { id: 2, description: "Apples", amount: 5, category: "Groceries" },
    { id: 3, description: "Rice", amount: 8, category: "Groceries" },
    { id: 4, description: "Movie", amount: 11, category: "Entertainment" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm onSubmit={(expense) => {
          console.log(expense);
          setExpenses([...expenses, { ...expense, id: expenses.length + 1}]);
          }}></ExpenseForm>
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => {
            console.log(category);
            setSelectedCategory(category);
          }}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => {
          console.log("Delete", id);
          setExpenses(visibleExpenses.filter((item) => item.id != id));
        }}
      ></ExpenseList>
    </div>
  );
}

export default App;
