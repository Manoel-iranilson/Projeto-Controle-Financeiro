import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Summary from "./components/Summary";
import GlobalStyle from "./styles/global";

function App() {
  const data = localStorage.getItem("transactions");
  const [transactionsList, setTransactionsList] = useState(
    data ? JSON.parse(data) : []
  );

  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const amountExpense = transactionsList
      .filter((item) => item.isExpense)
      .map((transactions) => Number(transactions.value));

    const amountIncome = transactionsList
      .filter((item) => !item.isExpense)
      .map((transactions) => Number(transactions.value));

    const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);

    const total = Math.abs(income - expense).toFixed(2);

    setExpense(`R$ ${expense}`);
    setIncome(`R$ ${income}`);
    setTotal(`${Number(income) < Number(expense) ? "-" : ""} R$ ${total}`);
  }, [transactionsList]);

  function add(transactions) {
    const newTransaction = [...transactionsList, transactions];
    setTransactionsList(newTransaction);
    console.log(transactions);
    localStorage.setItem("transactions", JSON.stringify(newTransaction));
  }

  return (
    <>
      <GlobalStyle />
      <Header />
      <Summary income={income} expense={expense} total={total} />
      <Form
        add={add}
        transactionsList={transactionsList}
        setTransactionsList={setTransactionsList}
      />
    </>
  );
}

export default App;
