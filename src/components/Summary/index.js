import React from "react";
import CardSummary from "../CardSummary";
import * as S from "./styles";
import {
  FaArrowAltCircleUp,
  FaArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";

function Summary({ income, expense, total }) {
  return (
    <S.Container>
      <CardSummary Title="Entradas" Icon={FaArrowAltCircleUp} Value={income} />
      <CardSummary Title="Saidas" Icon={FaArrowAltCircleDown} Value={expense} />
      <CardSummary Title="Total" Icon={FaDollarSign} Value={total} />
    </S.Container>
  );
}

export default Summary;
