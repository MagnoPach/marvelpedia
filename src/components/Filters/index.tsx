import React, { useContext, useState } from "react";
import { Search } from "react-feather";

import { CharactersContext } from "../../Context/CharactersContext";
import { FilterProps } from "../../interfaces";
import * as S from "./styles";

export default function Filters({ isPinned }: FilterProps) {
  const { searchedCharacter, setFiltersChanged, setSearchedCharacter } =
    useContext(CharactersContext);
  const [searchTemp, setSearchTemp] = useState<string>("");
  const searchBarIsEmpty = searchedCharacter.length <= 0;

  function handleChange(e: React.FormEvent<HTMLInputElement>): void {
    setSearchTemp(e.currentTarget.value);
  }

  function handleEraseClick(): void {
    setFiltersChanged(true);
    setSearchTemp("");
    setSearchedCharacter("");
  }

  function handleSearch(): void {
    setFiltersChanged(true);
    setSearchedCharacter(searchTemp);
  }

  return (
    <S.Container isPinned={isPinned}>
      <S.Label>
        <S.Title>Find a character</S.Title>
        <S.InputWrapper>
          <input
            type="text"
            placeholder="Character name"
            value={searchTemp}
            onChange={handleChange}
          />
          {searchBarIsEmpty ? (
            <Search strokeWidth={4} size={16} color={"#AF4660"} />
          ) : (
            <S.EraseButton
              strokeWidth={4}
              size={16}
              color={"#AF4660"}
              onClick={handleEraseClick}
            />
          )}
        </S.InputWrapper>
      </S.Label>
      <S.FiltersButton isPinned={isPinned} onClick={handleSearch}>
        <p>Search</p>
      </S.FiltersButton>
    </S.Container>
  );
}
