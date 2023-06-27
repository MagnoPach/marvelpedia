import { MutableRefObject, useContext, useEffect, useRef } from "react";

import { CharactersContext } from "../../Context/CharactersContext";
import { CharacterData } from "../../interfaces";
import Character from "../Character";
import * as S from "./styles";
import Loader from "../Loader";

export default function Characters() {
  const {
    loadMore,
    setLoadMore,
    searchedCharacter,
    filtersChanged,
    filteredCharacters,
    setFiltersChanged,
  } = useContext(CharactersContext);
  const containerRef = useRef<HTMLDivElement | null>(
    null
  ) as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    if (!filtersChanged) return;

    window.scrollTo({
      top: containerRef.current.offsetTop - 200,
      behavior: "smooth",
    });
    setFiltersChanged(false);
  }, [filtersChanged]);

  function handleLoadMore(): void {
    setLoadMore(true);
  }

  if (filteredCharacters === undefined) return null;

  return (
    <S.Container ref={containerRef}>
      {filteredCharacters.length > 0 ? (
        <S.GridContainer>
          {filteredCharacters.map((character: CharacterData, index: number) => (
            <Character key={character.id} character={character} index={index} />
          ))}
        </S.GridContainer>
      ) : (
        <S.Disclaimer>No character was found. </S.Disclaimer>
      )}
      {loadMore ? (
        <Loader />
      ) : (
        <div>
          {filteredCharacters.length > 0 && searchedCharacter.length == 0 && (
            <S.Button onClick={handleLoadMore}>Load More</S.Button>
          )}
        </div>
      )}
    </S.Container>
  );
}
