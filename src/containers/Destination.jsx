import React from "react";
import {
  Header,
  NumberedHeading,
  TabImageContent,
  TabList,
  TabRoot,
  TabTextContent,
} from "../components";
import { Content, List, Root, Trigger } from "@radix-ui/react-tabs";

const Destination = () => {
  const triggers = ["Moon", "Mars", "Europa", "Titan"];
  const contents = [
    {
      title: "Moon",
      description:
        "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 km",
      travelTime: "3 Days",
      img: "/images/destination/image-moon.png",
    },
    {
      title: "Mars",
      description:
        "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
      distance: "225 MIL. km",
      travelTime: "9 Months",
      img: "/images/destination/image-mars.png",
    },
    {
      title: "Europa",
      description:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      distance: "628 MIL. km",
      travelTime: "3 Years",
      img: "/images/destination/image-europa.png",
    },
    {
      title: "Titan",
      description:
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: "1.6 BIL. km",
      travelTime: "7 Years",
      img: "/images/destination/image-titan.png",
    },
  ];

  return (
    <div className="min-h-screen bg-dest-mobile bg-cover bg-no-repeat md:bg-dest-tablet lg:bg-dest-desktop">
      <Header />
      <main className="mx-auto max-w-screen-xl">
        <NumberedHeading index={1} title="Pick your destination" />
        <TabRoot page="destination" defaultValue="Moon">
          {contents.map(({ title, img, ...rest }) => (
            <TabImageContent title={title} img={img} page="destination" />
          ))}

          <TabList
            triggers={triggers}
            label="Pick your destination"
            type="text"
          />

          {contents.map(
            ({ title, description, distance, travelTime, ...rest }) => (
              <TabTextContent
                page="destination"
                title={title}
                description={description}
                distance={distance}
                travelTime={travelTime}
              />
            )
          )}
        </TabRoot>
      </main>
    </div>
  );
};

export default Destination;
