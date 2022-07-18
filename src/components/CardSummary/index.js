import React from "react";
import * as S from "./styles";

function CardSummary({ Title, Icon, Value }) {
  return (
    <S.Container>
      <S.Header>
        <S.Title>{Title}</S.Title>
        <Icon />
      </S.Header>
      <S.total>{Value}</S.total>
    </S.Container>
  );
}

export default CardSummary;
