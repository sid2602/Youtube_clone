import { FormEvent } from "react";
import { faArrowLeft, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNav } from "../../Context/NavContext";

import { useRef } from "react";
import { useHistory } from "react-router-dom";

export default function MobileSearch() {
  const { setSearchMobile } = useNav();

  const history = useHistory();
  const inputRef = useRef<HTMLInputElement>(null);

  const onBackButtonClick = () => {
    setSearchMobile(false);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    const value = inputRef.current?.value;
    if (value) {
      history.push(`/search/${value}`);
      setSearchMobile(false);
    }
  };

  return (
    <>
      <form
        onSubmit={(e) => onSubmit(e)}
        className="w-full flex justify-center"
      >
        <button
          type="button"
          className="w-10 h-10 rounded-full hover:bg-gray-200 transition"
          onClick={onBackButtonClick}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>

        <input type="text" className="border-2 w-4/5  px-2" ref={inputRef} />
        <button
          className="w-10 h-10 rounded-full hover:bg-gray-200 transition"
          type="submit"
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </>
  );
}
