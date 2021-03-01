import React from "react";
import { faArrowLeft, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNav } from "../../Context/NavContext";
export default function MobileSearch() {
  const { setSearchMobile } = useNav();

  const onBackButtonClick = () => {
    setSearchMobile(false);
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
        <input type="text" className="border-2 w-4/5  px-2" />
        <button className="w-10 h-10 rounded-full hover:bg-gray-200 transition">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </>
  );
}
