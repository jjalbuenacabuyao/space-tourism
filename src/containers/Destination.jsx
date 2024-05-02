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
    <div className="min-h-screen bg-dest-mobile bg-cover bg-no-repeat md:bg-dest-tablet">
      <Header />
      <main className="max-w-screen-xl mx-auto">
        <NumberedHeading index={1} title="Pick your destination" />
        <Root
          defaultValue="Moon"
          className="flex grid-rows-[1fr_auto] flex-col items-center gap-8 px-6 pb-14 md:gap-14 md:px-24 md:pb-16 lg:grid lg:grid-cols-2"
        >
          {contents.map(({ title, img, ...rest }) => (
            <Content
              key={title}
              value={title}
              forceMount
              className="hidden data-[state=active]:block lg:row-span-2"
            >
              <img
                src={img}
                alt={`Photo of ${title}`}
                className="aspect-square w-44 md:w-80"
              />
            </Content>
          ))}

          <List aria-label="Pick your destination" className="flex gap-6">
            {triggers.map((trigger) => (
              <Trigger
                key={trigger}
                value={trigger}
                className="box-border border-b-[3px] border-b-transparent pb-2 font-barlow-condensed text-sm uppercase tracking-[2.36px] text-off-white aria-selected:border-b-white aria-selected:text-white md:text-base"
              >
                {trigger}
              </Trigger>
            ))}
          </List>

          {contents.map(
            ({ title, description, distance, travelTime, ...rest }) => (
              <Content
                key={title}
                value={title}
                className="text-center lg:text-left"
              >
                <div className="border-b border-b-border pb-6 md:pb-12">
                  <h2 className="mb-1 font-bellefair text-5xl uppercase md:mb-6 md:text-7xl">
                    {title}
                  </h2>
                  <p>{description}</p>
                </div>

                <div className="grid gap-8 pt-6 md:grid-cols-2 md:pt-7">
                  <div>
                    <p className="font-barlow-condensed text-sm tracking-[2.36px]">
                      AVG. DISTANCE
                    </p>
                    <p
                      aria-label="Average distance"
                      className="font-bellefair text-3xl uppercase"
                    >
                      {distance}
                    </p>
                  </div>
                  <div>
                    <p className="font-barlow-condensed text-sm tracking-[2.36px]">
                      Est. travel time
                    </p>
                    <p
                      aria-label="Estimated travel Time"
                      className="font-bellefair text-3xl uppercase"
                    >
                      {travelTime}
                    </p>
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
