import React from "react";
import * as S from "./styles";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
} from "react-icons/fa";

function GridItem({ item, onDelete }) {
  return (
    <tr>
      <S.Td>{item.desc}</S.Td>
      <S.Td>{item.value}</S.Td>
      <S.Td alignCenter>
        {item.isExpense ? (
          <FaRegArrowAltCircleDown color="red" />
        ) : (
          <FaRegArrowAltCircleUp color="green" />
        )}
      </S.Td>
      <S.Td alignCenter>
        <button>
          <FaTrash onClick={() => onDelete(item.id)} />
        </button>
      </S.Td>
    </tr>
  );
}

export default GridItem;
