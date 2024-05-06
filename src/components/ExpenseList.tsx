// import React from 'react'

interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expense: Expense[];
  onDelete: (id: number) => void;
}

const ExpenseList = ({ expense, onDelete }: Props) => {
  if (expense.length === 0)
    return (
      <p className="mt-5 fw-semibold font-monospace text-center bg-primary rounded py-2 text-white">
        There is no list on this category
      </p>
    );
  return (
    <div className="table-responsive">
      <table className="table table-bordered rounded caption-top">
        <caption>List of Expenses</caption>
        <thead>
          <tr className="text-uppercase text-center">
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {expense.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.description}</td>
              <td>{expense.amount}</td>
              <td>{expense.category}</td>
              <td className="text-center">
                <button
                  className="btn btn-outline-danger"
                  onClick={() => onDelete(expense.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>
              {expense.reduce((acc, expenses) => expenses.amount + acc, 0)}etb
            </td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ExpenseList;
