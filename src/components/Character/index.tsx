import { useEffect, useContext, useState } from "react";

import { CharactersContext } from "../../Context/CharactersContext";
import { CharacterProps } from "../../interfaces";
import * as S from "./styles";

export default function Character({ character, index }: CharacterProps) {
  const { setSelectedCharacterIndex } = useContext(CharactersContext);
  const [loadedImage, setLoadedImage] = useState("");

  const portraitsUrl = `${character["thumbnail"]["path"]}.${character["thumbnail"]["extension"]}`;

  useEffect(() => {
    const portrait = new Image();
    portrait.src = portraitsUrl;
    portrait.addEventListener("load", () => {
      setLoadedImage(portrait.src);
    });
  }, []);

  function handleClick(): void {
    setSelectedCharacterIndex(index);
  }

  if (loadedImage.length <= 0) return null;

  return (
    <S.Container>
      <S.Portrait src={loadedImage} />
      <S.Name>{character["name"]}</S.Name>
      <S.Button onClick={handleClick}>View file</S.Button>
    </S.Container>
  );
}
