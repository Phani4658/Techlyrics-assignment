import "./index.css";
import { CiMobile1,CiHeadphones,CiHeart,CiLogin } from "react-icons/ci";
import { HiBars3 } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";
import { Button } from "@chakra-ui/react";
const Navbar = () => {
  return (
    <nav>
      <img
        src="https://prod-static-assets.amberstudent.com/images/amber-hd.svg?auto=format"
        className="nav-logo"
      />
      <div className="desktop-view">
        <Button colorScheme="whiteAlpha" color="white" variant="ghost" className="download-app" leftIcon={<CiMobile1 />}>
          Download App
        </Button>
        <Button colorScheme="whiteAlpha" color="white" variant="ghost" className="download-app" leftIcon={<CiHeadphones />}>
          Support
        </Button>
        <Button colorScheme="whiteAlpha" color="white" variant="ghost" className="download-app" leftIcon={<CiHeart />}>
          Shortlist
        </Button>
        <Button colorScheme="whiteAlpha" variant="outline" color="white" className="login-button" leftIcon={<CiLogin />}>Login</Button>
        <Button colorScheme="whiteAlpha" variant="outline" color="white" className="login-button" leftIcon={<CgProfile />} rightIcon={<HiBars3 />}> </Button>
      </div>
      <Button color="white" className="mobile-view" variant="outline"><HiBars3/></Button>
    </nav>
  );
};

export default Navbar;
