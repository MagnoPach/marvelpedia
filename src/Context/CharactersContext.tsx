import { createContext, useEffect, useState } from "react";
import md5 from "md5";

import { ChildrenProps, ContextProps, CharacterData } from "../interfaces";

export const CharactersContext = createContext<ContextProps>({
  characters: [],
  selectedCharacterIndex: -1,
  setSelectedCharacterIndex: (value: number) => value,
  searchedCharacter: "",
  setSearchedCharacter: (value: string) => value,
  filteredCharacters: [],
  filtersChanged: false,
  setFiltersChanged: (value: boolean) => value,
  isLoading: false,
  loadMore: false,
  setLoadMore: (value: boolean) => value,
});
CharactersContext.displayName = "CharactersContext";

export const CharactersProvider = ({ children }: ChildrenProps) => {
  const [characters, setCharacters] = useState<CharacterData[]>([]);
  const [selectedCharacterIndex, setSelectedCharacterIndex] =
    useState<number>(-1);
  const [searchedCharacter, setSearchedCharacter] = useState<string>("");
  const [filteredCharacters, setFilteredCharacters] = useState<CharacterData[]>(
    []
  );
  const [filtersChanged, setFiltersChanged] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadMore, setLoadMore] = useState<boolean>(false);

  const BASE_URL = `http://gateway.marvel.com/v1/public/characters?`;

  const publicKey = "e6ae3755342b8470e95d32d58fa5ea35";
  const privateKey = "06d75477edaaa72cf9d33a68fb178e3714e2a1c3";
  const time = Number(new Date());
  const hash = md5(time + privateKey + publicKey);
  const authorizationParams = `ts=${time}&apikey=${publicKey}&hash=${hash}`;

  useEffect(() => {
    const fetchUrl = `${BASE_URL}limit=100&${authorizationParams}`;
    setIsLoading(true);
    fetch(fetchUrl)
      .then((response) => response.json())
      .then((data) => setCharacters(data.data.results))
      .then(() => setIsLoading(false));
  }, []);

  useEffect((): void => {
    if (searchedCharacter.length === 0) {
      const charactersTemp = characters;
      setFilteredCharacters(charactersTemp);
    }
  }, [characters, searchedCharacter]);

  useEffect((): void => {
    if (loadMore) {
      const fetchUrl = `${BASE_URL}limit=100&offset=${characters.length}&${authorizationParams}`;
      fetch(fetchUrl)
        .then((response) => response.json())
        .then((data) => {
          const moreCharacters = characters.concat(data.data.results);
          setCharacters(moreCharacters);
        })
        .then(() => setLoadMore(false));
    }
  }, [loadMore]);

  useEffect((): void => {
    if (searchedCharacter.length > 0) {
      const fetchUrl = `${BASE_URL}limit=100&nameStartsWith=${searchedCharacter}&${authorizationParams}`;
      setIsLoading(true);
      fetch(fetchUrl)
        .then((response) => response.json())
        .then((data) => setFilteredCharacters(data.data.results))
        .then(() => setIsLoading(false));
    }
  }, [searchedCharacter]);

  return (
    <CharactersContext.Provider
      value={{
        characters,
        selectedCharacterIndex,
        setSelectedCharacterIndex,
        searchedCharacter,
        setSearchedCharacter,
        filteredCharacters,
        filtersChanged,
        setFiltersChanged,
        isLoading,
        loadMore,
        setLoadMore,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};
