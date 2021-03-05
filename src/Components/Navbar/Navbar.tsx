import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNav } from "../../Context/NavContext";
import { useVideo } from "../../Context/VideoContext";
import { useRef } from "react";
import { useHistory } from "react-router-dom";

export default function Navbar() {
  const inputRef = useRef<HTMLInputElement>(null);

  const { setSearchMobile } = useNav();
  const { searchVideo } = useVideo();
  let history = useHistory();

  const onButtonClick = () => {
    if (window.innerWidth < 768) {
      setSearchMobile(true);
    } else {
      const value = inputRef.current?.value;
      if (value) {
        searchVideo(value);
        history.push("/search");
      }
    }
  };

  return (
    <>
      <div className="flex items-center ml-4 md:ml-8 w-1/2 md:w-1/6">
        <button className="w-10 h-10 rounded-full hover:bg-gray-200 transition">
          <FontAwesomeIcon icon={faBars} />
        </button>

        <img src="img/logo.png" className="w-20 md:w-28 " alt="logo" />
      </div>
      <div className="flex items-center w-auto  mr-4 justify-end md:justify-center w-1/2 md:w-2/3">
        <input
          type="text"
          className="hidden md:block border-2 w-10/12 max-w-md px-2"
          ref={inputRef}
        />
        <button
          className="w-10 h-10 rounded-full hover:bg-gray-200 transition"
          onClick={onButtonClick}
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <div className="md:w-1/6"></div>
    </>
  );
}
