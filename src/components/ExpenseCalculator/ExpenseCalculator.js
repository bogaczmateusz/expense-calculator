import React, { useState, useEffect } from "react";

import "./expense-calculator.css";
import createValuesArray from "./utils/createValuesArray";
import ExpenseCalculatorForm from "./components/ExpenseCalculatorForm";
import ExpensesList from "./components/ExpensesList";
import IncomesList from "./components/IncomesList";
import Summary from "./components/Summary";

function ExpenseCalculator() {
  const [expenses, setExpenses] = useState([]);
  const [incomes, setIncomes] = useState([]);
  const [expensesValues, setExpensesValues] = useState([]);
  const [incomesValues, setIncomesValues] = useState([]);

  useEffect(() => {
    const expensesList = localStorage.getItem("expenses")
      ? JSON.parse(localStorage.getItem("expenses"))
      : [];
    const incomesList = localStorage.getItem("incomes")
      ? JSON.parse(localStorage.getItem("incomes"))
      : [];

    setExpenses(expensesList);
    setIncomes(incomesList);
  }, []);

  useEffect(() => {
    setExpensesValues(createValuesArray(expenses));
    setIncomesValues(createValuesArray(incomes));

    localStorage.setItem("expenses", JSON.stringify(expenses));
    localStorage.setItem("incomes", JSON.stringify(incomes));
  }, [expenses, incomes]);

  const handleRemove = (id, isExpense, isIncome) => {
    if (isExpense) {
      const newExpenses = expenses.filter((expense) => expense.id !== id);
      setExpenses(newExpenses);
      setExpensesValues(createValuesArray(newExpenses));
    }
    if (isIncome) {
      const newIncomes = incomes.filter((income) => income.id !== id);
      setIncomes(newIncomes);
      setIncomesValues(createValuesArray(newIncomes));
    }
  };

  const handleAdd = (values) => {
    const { type, name, amount, tags } = values;
    const item = {
      id: Math.floor(Math.random() * (99999999 - 1)) + 1,
      headline: name,
      amount: type === "expense" ? -Math.abs(amount) : Math.abs(amount),
      tags: tags ? tags : "-"
    };

    if (type === "expense") {
      setExpenses([item].concat(expenses));
    }

    if (type === "income") {
      setIncomes([item].concat(incomes));
    }
  };

  return (
    <div className="expense-calculator">
      <div className="expense-calculator-viewport">
        <div className="expense-calculator-columns">
          <div className="expense-calculator-column is-form">
            <ExpenseCalculatorForm addHandler={handleAdd} />
          </div>
          <div className="expense-calculator-column is-expenses">
            <ExpensesList data={expenses} removeHandler={handleRemove} />
          </div>
          <div className="expense-calculator-column is-incomes">
            <IncomesList data={incomes} removeHandler={handleRemove} />
          </div>
          <div className="expense-calculator-column is-result">
            <Summary expenses={expensesValues} incomes={incomesValues} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseCalculator;
