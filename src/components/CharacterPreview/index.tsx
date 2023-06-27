import React from "react";
import Shimmer from "react-shimmer-effect";

import * as S from "./styles";

export default function Characters() {
  return (
    <S.Container>
      <Shimmer>
        <S.Portrait />
        <S.Name />
        <S.Highlight />
        <S.Button />
      </Shimmer>
    </S.Container>
  );
}
