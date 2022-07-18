import React from "react";

import * as S from "./styles";

function Form() {
  return (
    <S.Container>
      <S.InputContent>
        <label>Descrição</label>
        <S.Input></S.Input>
      </S.InputContent>
      <S.InputContent>
        <label>Valor</label>
        <S.Input />
      </S.InputContent>

      <S.RadioGroup>
        <S.Input type="radio" id="rIncome" defaultchecked name="group1" />
        <label htmlFor="rIncome">Entrada</label>
        <S.Input type="radio" id="rExpenses" defaultchecked name="group1" />
        <label htmlFor="rExpenses">Saida</label>
      </S.RadioGroup>

      <S.Button>Adicionar</S.Button>
    </S.Container>
  );
}

export default Form;
