import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNav } from "../../Context/NavContext";

import { FormEvent, useRef } from "react";
import { useHistory, Link } from "react-router-dom";

export default function Navbar() {
  const inputRef = useRef<HTMLInputElement>(null);

  const { setSearchMobile } = useNav();

  let history = useHistory();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (window.innerWidth < 768) {
      setSearchMobile(true);
    } else {
      const value = inputRef.current?.value;
      if (value) {
        history.push(`/search/${value}`);
      }
    }
  };

  return (
    <>
      <div className="flex items-center ml-4 md:ml-8 w-1/2 md:w-1/6">
        <button className="w-10 h-10 rounded-full hover:bg-gray-200 transition">
          <FontAwesomeIcon icon={faBars} />
        </button>
        <Link to="/">
          <img src="img/logo.png" className="w-20 md:w-28 " alt="logo" />
        </Link>
      </div>
      <form
        className="flex items-center w-auto  mr-4 justify-end md:justify-center w-1/2 md:w-2/3"
        onSubmit={(e) => onSubmit(e)}
      >
        <input
          type="text"
          className="hidden md:block border-2 w-10/12 max-w-md px-2"
          ref={inputRef}
        />
        <button
          type="submit"
          className="w-10 h-10 rounded-full hover:bg-gray-200 transition"
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
      <div className="md:w-1/6"></div>
    </>
  );
}
