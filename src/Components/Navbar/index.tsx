import MobileSearch from "./MobileSearch";
import RegularNavbar from "./Navbar";
import { useNav } from "../../Context/NavContext";
export default function NavBar() {
  const { searchMobile } = useNav();

  return (
    <header className="flex items-center border-b-2 h-12 sticky top-0 bg-white">
      {searchMobile ? <MobileSearch /> : <RegularNavbar />}
    </header>
  );
}
