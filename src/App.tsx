import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";
import "./app.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "Music", amount: 100, category: "Entertainment" },
    { id: 2, description: "Fruits", amount: 100, category: "Groceries" },
    { id: 3, description: "Lorem", amount: 100, category: "Utilities" },
  ]);

  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  return (
    <>
      <div className="container mt-5 pt-4">
        <p className="fw-semibold font-monospace fs-3 ms-5 ps-4 text-white">
          Expense Tracker
        </p>
        <div className="p-5 row justify-content-center fw-semibold">
          <div className="col-5 shadow rounded bg-white p-5 me-4">
            <div className="mb-5">
              <ExpenseForm
                onSubmit={(data) =>
                  setExpenses([
                    ...expenses,
                    { ...data, id: expenses.length + 1 },
                  ])
                }
              />
            </div>
          </div>
          <div className="col-6 rounded bg-white shadow p-5">
            <div className="mb-3">
              <p>Filter Categories</p>
              <ExpenseFilter
                onSelectCategory={(category) => setSelectedCategory(category)}
              />
            </div>
            <ExpenseList
              expense={visibleExpenses}
              onDelete={(id) => handleDelete(id)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
