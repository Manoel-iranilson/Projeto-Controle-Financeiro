import React from "react";
import * as S from "./styles";
import GridItem from "../GridItem";

function Grid({ itens, setItens }) {
  const onDelete = (ID) => {
    const newArray = itens.filter((transactions) => transactions.id !== ID);
    setItens(newArray);
    localStorage.setItem("transactions", JSON.stringify(newArray));
  };
  return (
    <S.Table>
      <thead>
        <tr>
          <S.Th width={40}>Descrição</S.Th>
          <S.Th width={40}>Valor</S.Th>
          <S.Th width={10} alignCenter>
            Tipo
          </S.Th>
          <S.Th width={10}></S.Th>
        </tr>
      </thead>
      <tbody>
        {itens?.map((item, index) => (
          <GridItem key={index} item={item} onDelete={onDelete} />
        ))}
      </tbody>
    </S.Table>
  );
}

export default Grid;
