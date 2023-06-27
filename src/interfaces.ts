import { ReactNode } from "react";

export interface ChildrenProps {
  children?: ReactNode;
}

export interface ContextProps {
  characters: CharacterData[];
  selectedCharacterIndex: number;
  setSelectedCharacterIndex: (value: number) => void;
  searchedCharacter: string;
  setSearchedCharacter: (value: string) => void;
  filteredCharacters: CharacterData[];
  filtersChanged: boolean;
  setFiltersChanged: (value: boolean) => void;
  isLoading: boolean;
  loadMore: boolean;
  setLoadMore: (value: boolean) => void;
}

export interface CharacterProps {
  character: CharacterData;
  index: number;
}

export interface FilterProps {
  isPinned: boolean;
}

export interface CharacterData {
  id: number;
  modified: string;
  name: string;
  resourceURI: string;
  description: string;
  comics: Shape;
  series: Shape;
  stories: Shape;
  thumbnail: { path: string; extension: string };
  urls: { type: string; url: string }[];
}

export interface Shape {
  available: number;
  returned: number;
  collectionURI: string;
  items: { name: string; resourceURI: string }[];
}
