import Navbar from "../Navbar";
import { CiSearch } from "react-icons/ci";
import { BsCheck2Circle } from "react-icons/bs";
import { IoCashOutline } from "react-icons/io5";
import { MdOutlineSupportAgent } from "react-icons/md";
import { Center, Text, IconButton } from "@chakra-ui/react";
import "./index.css";

const Home = () => {
  const generateHeaderBadge = (icon, text) => {
    return (
      <li className="badge-properties">
        <span className="badge-icon">{icon}</span>
        {text}
      </li>
    );
  };
  return (
    <div>
      <div className="linear-gradient"></div>
      <header>
        <Navbar />
        <Center color="white" className="banner-container" w="100%" h="75%">
          <Text fontWeight="bold" color="white" className="header-heading">
            Home away from home!
          </Text>
          <Text className="header-description">
            Book student accommodations near top universities and cities across
            the globe.
          </Text>
          <ul className="header-badges">
            {generateHeaderBadge(<BsCheck2Circle />, "Verified Properties")}
            {generateHeaderBadge(<MdOutlineSupportAgent />, "24x7 Support")}
            {generateHeaderBadge(<IoCashOutline />, "Price Match Guarantee")}
          </ul>
          <Center className="search-container">
            <input
              type="search"
              placeholder="Search by City, University or Property"
              className="search-input"
            />
            <IconButton
              isRound={true}
              backgroundColor="#ED3A56"
              color="white"
              fontSize="20px"
              icon={<CiSearch />}
            />
          </Center>
        </Center>
      </header>
    </div>
  );
};

export default Home;
