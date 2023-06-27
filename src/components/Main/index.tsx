import {
  MutableRefObject,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import Filters from "../Filters";
import Characters from "../Characters";
import { CharactersContext } from "../../Context/CharactersContext";
import * as S from "./styles";
import Loader from "../Loader";
import Header from "../Header";

export default function Main() {
  const { characters, isLoading } = useContext(CharactersContext);
  const descriptionRef = useRef<HTMLParagraphElement | null>(
    null
  ) as MutableRefObject<HTMLParagraphElement>;
  const [filtersIsPinned, setFiltersIsPinned] = useState<boolean>(false);

  useEffect(() => {
    const cachedRef = descriptionRef.current;

    const observer = new IntersectionObserver(([e]) =>
      setFiltersIsPinned(!e.isIntersecting)
    );
    observer.observe(cachedRef);

    return () => observer.unobserve(cachedRef);
  }, []);

  return (
    <S.Container>
      <Header />
      <div ref={descriptionRef}></div>
      <Filters isPinned={filtersIsPinned} />
      {isLoading ? <Loader /> : <>{characters.length > 0 && <Characters />}</>}
    </S.Container>
  );
}
