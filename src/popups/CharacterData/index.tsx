import { useContext, useEffect } from "react";
import { X } from "react-feather";

import { CharactersContext } from "../../Context/CharactersContext";
import * as S from "./styles";

export default function CharacterData() {
  const {
    characters,
    selectedCharacterIndex,
    filteredCharacters,
    setSelectedCharacterIndex,
  } = useContext(CharactersContext);

  const currentIndex = selectedCharacterIndex;
  const filteredCharactersLength = filteredCharacters.length;
  const character = characters[selectedCharacterIndex];
  const comics = character["comics"]["items"];
  const stories = character["stories"]["items"];
  const portraitsUrl = `${character["thumbnail"]["path"]}.${character["thumbnail"]["extension"]}`;
  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.style.marginRight = "16px";

    return () => {
      document.body.style.overflow = "unset";
      document.body.style.marginRight = "unset";
    };
  }, []);

  function handleClose(): void {
    setSelectedCharacterIndex(-1);
  }

  function previous(): void {
    if (currentIndex > 0) {
      if (isMobile) {
        setSelectedCharacterIndex(currentIndex - 1);
      } else {
        checkTranslateDirection("prev", currentIndex - 1);
      }
    }
  }

  function next(): void {
    if (currentIndex < filteredCharactersLength - 1) {
      if (isMobile) {
        setSelectedCharacterIndex(currentIndex + 1);
      } else {
        checkTranslateDirection("next", currentIndex + 1);
      }
    }
  }

  function checkTranslateDirection(
    direction: string,
    indexValue: number
  ): void {
    const modalElement: HTMLElement = document.getElementById("modal")!;

    modalElement.style.transform = `translateX(${
      !direction.includes("next") ? "357px" : "-357px"
    })`;
    modalElement.style.opacity = "0";
    setTimeout(() => {
      modalElement.style.transform = "translateX(0px)";
      setSelectedCharacterIndex(indexValue);
      modalElement.style.transform = `translateX(${
        direction.includes("next") ? "357px" : "-357px"
      })`;
      setTimeout(() => {
        modalElement.style.opacity = "1";
        modalElement.style.transform = "translateX(0px)";
      }, 200);
    }, 100);
  }

  return (
    <>
      <S.Backdrop onClick={handleClose} />
      <S.ContainerWrapper>
        {currentIndex > 0 && (
          <S.LeftArrow
            size={35}
            color={"transparent"}
            fill={"#000"}
            onClick={previous}
          />
        )}
        <div id="modal">
          <S.Container>
            <S.Header>
              <S.CloseButtonWrapper onClick={handleClose}>
                <X size={24} strokeWidth={3} color="#000" />
                <label>Fechar</label>
              </S.CloseButtonWrapper>
            </S.Header>
            <S.Columns>
              <div>
                <S.Portrait src={portraitsUrl} />
                <S.Name>{character["name"]}</S.Name>
                <S.Bio>
                  {character["description"].length > 0
                    ? character["description"]
                    : "No description was found."}
                </S.Bio>
              </div>
              <div>
                <S.Title>Comics that appears</S.Title>
                <S.Overflow>
                  {comics.length > 0 ? (
                    comics.map((comic, index) => (
                      <S.Text key={index}>• {comic["name"]}</S.Text>
                    ))
                  ) : (
                    <S.Text>No comic was found.</S.Text>
                  )}
                </S.Overflow>
                <S.Title>Stories that appears</S.Title>
                <S.Overflow>
                  {stories.length > 0 ? (
                    stories.map((story, index) => (
                      <S.Text key={index}>• {story["name"]}</S.Text>
                    ))
                  ) : (
                    <S.Text>No story was found.</S.Text>
                  )}
                </S.Overflow>
              </div>
            </S.Columns>
            <S.Buttons>
              {currentIndex > 0 && (
                <S.Button secondary onClick={previous}>
                  <S.LeftArrow size={18} fill={"#888073"} />
                  Anterior
                </S.Button>
              )}
              {currentIndex < filteredCharactersLength - 1 && (
                <S.Button secondary={false} onClick={next}>
                  Próximo <S.RightArrow size={18} fill={"#9A1032"} />
                </S.Button>
              )}
            </S.Buttons>
          </S.Container>
        </div>
        {currentIndex < filteredCharactersLength - 1 && (
          <S.RightArrow
            size={35}
            color={"transparent"}
            fill={"#000"}
            onClick={next}
          />
        )}
      </S.ContainerWrapper>
    </>
  );
}
