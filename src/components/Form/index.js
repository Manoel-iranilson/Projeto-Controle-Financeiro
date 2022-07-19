import React, { useState } from "react";
import Grid from "../Grid";

import * as S from "./styles";

function Form({ add, transactionsList, setTransactionsList }) {
  const [desc, setDesc] = useState("");
  const [value, setValue] = useState("");
  const [isExpense, setExpense] = useState(false);

  const generateId = () => Math.round(Math.random() * 1000);

  function handleSave() {
    if (!desc || !value) {
      alert("Informe a descrição e/ou o valor");
    } else if (value < 1) {
      alert("O valor tem que ser positivo");
    } else {
      const transactions = {
        id: generateId(),
        desc: desc,
        value: value,
        isExpense: isExpense,
      };
      console.log(isExpense);
      add(transactions);
      setDesc("");
      setValue("");
    }
  }
  return (
    <>
      <S.Container>
        <S.InputContent>
          <label>Descrição</label>
          <S.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
        </S.InputContent>
        <S.InputContent>
          <label>Valor</label>
          <S.Input
            value={value}
            type="number"
            onChange={(e) => setValue(e.target.value)}
          />
        </S.InputContent>

        <S.RadioGroup>
          <S.Input
            type="radio"
            id="rIncome"
            defaultchecked
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <label htmlFor="rIncome">Entrada</label>
          <S.Input
            type="radio"
            id="rExpenses"
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <label htmlFor="rExpenses">Saida</label>
        </S.RadioGroup>
        <S.Button onClick={handleSave}>Adicionar</S.Button>
      </S.Container>
      <Grid itens={transactionsList} setItens={setTransactionsList} />
    </>
  );
}

export default Form;
