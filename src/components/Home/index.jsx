import Navbar from "../Navbar";
import { CiSearch } from "react-icons/ci";
import { BsArrowRight, BsCheck2Circle } from "react-icons/bs";
import { IoCashOutline } from "react-icons/io5";
import { MdOutlineSupportAgent } from "react-icons/md";
import {
  Center,
  Text,
  IconButton,
  Container,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Card,
  Button,
} from "@chakra-ui/react";
import "./index.css";
import FeatureCard from "../FeatureCard";
import ReactCountryFlag from "react-country-flag";

const cityCards = [
  {
    id: 1,
    imageUrl:
      "https://prod-static-assets.amberstudent.com/images/popular-cities/London/London_2.jpg?w=250&h=250&fit=crop&auto=format&trim=auto&q=10&fm=pjpg",
    cityName: "London",
  },
  {
    id: 2,
    imageUrl:
      "https://prod-static-assets.amberstudent.com/images/popular-cities/London/London_2.jpg?w=250&h=250&fit=crop&auto=format&trim=auto&q=10&fm=pjpg",
    cityName: "London",
  },
  {
    id: 3,
    imageUrl:
      "https://prod-static-assets.amberstudent.com/images/popular-cities/London/London_2.jpg?w=250&h=250&fit=crop&auto=format&trim=auto&q=10&fm=pjpg",
    cityName: "London",
  },
  {
    id: 4,
    imageUrl:
      "https://prod-static-assets.amberstudent.com/images/popular-cities/London/London_2.jpg?w=250&h=250&fit=crop&auto=format&trim=auto&q=10&fm=pjpg",
    cityName: "London",
  },
  {
    id: 5,
    imageUrl:
      "https://prod-static-assets.amberstudent.com/images/popular-cities/London/London_2.jpg?w=250&h=250&fit=crop&auto=format&trim=auto&q=10&fm=pjpg",
    cityName: "London",
  },
  {
    id: 6,
    imageUrl:
      "https://prod-static-assets.amberstudent.com/images/popular-cities/London/London_2.jpg?w=250&h=250&fit=crop&auto=format&trim=auto&q=10&fm=pjpg",
    cityName: "London",
  },
  {
    id: 7,
    imageUrl:
      "https://prod-static-assets.amberstudent.com/images/popular-cities/London/London_2.jpg?w=250&h=250&fit=crop&auto=format&trim=auto&q=10&fm=pjpg",
    cityName: "London",
  },
  {
    id: 8,
    imageUrl:
      "https://prod-static-assets.amberstudent.com/images/popular-cities/London/London_2.jpg?w=250&h=250&fit=crop&auto=format&trim=auto&q=10&fm=pjpg",
    cityName: "London",
  },
  {
    id: 9,
    imageUrl:
      "https://prod-static-assets.amberstudent.com/images/popular-cities/London/London_2.jpg?w=250&h=250&fit=crop&auto=format&trim=auto&q=10&fm=pjpg",
    cityName: "London",
  },
  {
    id: 10,
    imageUrl:
      "https://prod-static-assets.amberstudent.com/images/popular-cities/London/London_2.jpg?w=250&h=250&fit=crop&auto=format&trim=auto&q=10&fm=pjpg",
    cityName: "London",
  },
  {
    id: 11,
    imageUrl:
      "https://prod-static-assets.amberstudent.com/images/popular-cities/London/London_2.jpg?w=250&h=250&fit=crop&auto=format&trim=auto&q=10&fm=pjpg",
    cityName: "London",
  },
  {
    id: 12,
    imageUrl:
      "https://prod-static-assets.amberstudent.com/images/popular-cities/London/London_2.jpg?w=250&h=250&fit=crop&auto=format&trim=auto&q=10&fm=pjpg",
    cityName: "London",
  },
];

const Home = () => {
  const generateHeaderBadge = (icon, text) => {
    return (
      <li className="badge-properties">
        <span className="badge-icon">{icon}</span>
        {text}
      </li>
    );
  };

  const generateCityCard = (imageUrl, cityName) => {
    return (
      <li className="city-card-container">
        <Card className="city-card">
          <img src={imageUrl} className="city-card-image" />
          <Text className="city-text-container">{cityName}</Text>
        </Card>
      </li>
    );
  };
  return (
    <div>
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
      <Container maxWidth="90vw">
        <ul className="features-container">
          <FeatureCard
            imageUrl="https://res.cloudinary.com/dv0oedkxm/image/upload/f_auto,q_auto/v1/TechLyrics/ljxcdl2r6v34isiiqfj9"
            headingText="1 M+ Beds"
            shortDescription="Book your perfect place from an extensive list of options."
          />
          <FeatureCard
            imageUrl="https://res.cloudinary.com/dv0oedkxm/image/upload/v1704832102/TechLyrics/pukwtjnx2owqr5d3guos.svg"
            headingText="800+ Universities"
            shortDescription="Find the best student homes near prestigious universities."
          />
          <FeatureCard
            imageUrl="https://res.cloudinary.com/dv0oedkxm/image/upload/v1704832102/TechLyrics/rclcsv7r31odsyod1a99.svg"
            headingText="250+ Global Cities"
            shortDescription="We operate in major cities around the world."
          />
          <FeatureCard
            imageUrl="https://res.cloudinary.com/dv0oedkxm/image/upload/v1704832103/TechLyrics/cayeihrwgo4omeiijw3h.svg"
            headingText="4.8/5 on Trustpilot"
            shortDescription="4000+ students have rated us excellent for our services."
          />
        </ul>
        <section>
          <h2>Popular Cities Across the Globe</h2>
          <p className="popular-cities-subtext">
            Book student accommodations near top cities and universities around
            the world
          </p>
          <Tabs variant="unstyled">
            <TabList>
              <Tab
                _selected={{ borderColor: "#000 !important" }}
                className="country-button"
              >
                <ReactCountryFlag countryCode="GB" /> United Kingdom
              </Tab>
              <Tab
                _selected={{ borderColor: "#000 !important" }}
                className="country-button"
              >
                <ReactCountryFlag countryCode="AU" /> Australia
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <ul className="cities-container">
                  {cityCards.map((item) =>
                    generateCityCard(item.imageUrl, item.cityName, item.id)
                  )}
                </ul>
              </TabPanel>
              <TabPanel>
                <ul className="cities-container">
                  {cityCards.map((item) =>
                    generateCityCard(item.imageUrl, item.cityName, item.id)
                  )}
                </ul>
              </TabPanel>
            </TabPanels>
          </Tabs>
          <Center>
            <Button
              variant="outline"
              borderColor="#ED3A56"
              rightIcon={<BsArrowRight />}
              margin="0 auto"
              color="#ED3A56"
            >
              View All Cities
            </Button>
          </Center>
        </section>
      </Container>
    </div>
  );
};

export default Home;
