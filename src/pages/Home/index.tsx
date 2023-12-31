import { useContext } from "react";

import Main from "../../components/Main";
import CharacterData from "../../popups/CharacterData";
import { CharactersContext } from "../../Context/CharactersContext";
import * as S from "./styles";

const Home = () => {
  const { selectedCharacterIndex } = useContext(CharactersContext);

  return (
    <S.Container>
      <Main />
      {selectedCharacterIndex >= 0 && <CharacterData />}
    </S.Container>
  );
};

export default Home;
