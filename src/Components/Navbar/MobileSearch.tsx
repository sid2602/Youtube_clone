import React from "react";
import { faArrowLeft, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNav } from "../../Context/NavContext";
import { useVideo } from "../../Context/VideoContext";
import { useRef } from "react";
import { useHistory } from "react-router-dom";

export default function MobileSearch() {
  const { setSearchMobile } = useNav();
  const { searchVideo } = useVideo();
  const history = useHistory();
  const inputRef = useRef<HTMLInputElement>(null);

  const onBackButtonClick = () => {
    setSearchMobile(false);
  };

  const onSearchButtonClick = () => {
    const value = inputRef.current?.value;
    if (value) {
      searchVideo(value);
      history.push("/search");
      setSearchMobile(false);
    }
  };

  return (
    <>
      <div className="w-full flex justify-center ">
        <button
          className="w-10 h-10 rounded-full hover:bg-gray-200 transition"
          onClick={onBackButtonClick}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <input type="text" className="border-2 w-4/5  px-2" ref={inputRef} />
        <button
          className="w-10 h-10 rounded-full hover:bg-gray-200 transition"
          onClick={onSearchButtonClick}
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </>
  );
}
