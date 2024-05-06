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
  ]);

  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  return (
    <>
      <div className="container mt-lg-5 pt-lg-4 pt-5 font-monospace">
        <p className="fw-semibold font-monospace fs-3 ms-lg-5 ps-lg-4 ps-2 text-white">
          Expense Tracker
        </p>
        <div className="p-lg-5 p-3 row justify-content-center fw-semibold">
          <div className="col-lg-5 col-md-5 col-12 shadow rounded bg-white p-5 me-lg-4">
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
          <div className="col-lg-6 col-md-6 col-12 rounded bg-white shadow p-lg-5 p-3 mt-lg-0 mt-4">
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
