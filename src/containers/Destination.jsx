import React from "react";
import { Header, NumberedHeading } from "../components";
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
    <div className="bg-dest-mobile">
      <Header />
      <main className="min-h-screen">
        <NumberedHeading index={1} title="Pick your destination" />
        <Root defaultValue="Moon" className="px-6 pb-14">
          {contents.map(({ title, img, ...rest }) => (
            <Content key={title} value={title}>
              <img src={img} alt={`Photo of ${title}`} />
            </Content>
          ))}

          <List aria-label="Pick your destination">
            {triggers.map((trigger) => (
              <Trigger key={trigger} value={trigger}>
                {trigger}
              </Trigger>
            ))}
          </List>

          {contents.map(
            ({ title, description, distance, travelTime, ...rest }) => (
              <Content key={title} value={title}>
                <div>
                  <h2>{title}</h2>
                  <p>{description}</p>
                </div>

                <div>
                  <div>
                    <p>AVG. DISTANCE</p>
                    <p aria-label="Average distance">{distance}</p>
                  </div>
                  <div>
                    <p>Est. travel time</p>
                    <p aria-label="Estimated travel Time">{travelTime}</p>
                  </div>
                </div>
              </Content>
            )
          )}
        </Root>
      </main>
    </div>
  );
};

export default Destination;
