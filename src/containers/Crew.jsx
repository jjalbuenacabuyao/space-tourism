import React from "react";
import { Header, NumberedHeading, TabImageContent, TabList, TabRoot, TabTextContent } from "../components";

const Crew = () => {
  const crew = [
    {
      name: "Douglas Hurley",
      img : "/images/crew/image-douglas-hurley.png",
      role: "Commander",
      bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    },
    {
      name: "Mark Shuttleworth",
      img: "/images/crew/image-mark-shuttleworth.png",
      role: "Mission Specialist",
      bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    },
    {
      name: "Victor Glover",
      img: "/images/crew/image-victor-glover.png",
      role: "Pilot",
      bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    },
    {
      name: "Anousheh Ansari",
      img: "/images/crew/image-anousheh-ansari.png",
      role: "Flight Engineer",
      bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    },
  ];

  const triggers = [
    "Douglas Hurley",
    "Mark Shuttleworth",
    "Victor Glover",
    "Anousheh Ansari",
  ];

  return (
    <div className="min-h-screen bg-crew-mobile bg-cover bg-no-repeat md:bg-crew-tablet lg:bg-crew-desktop">
      <Header />
      <main className="mx-auto max-w-screen-xl">
        <NumberedHeading index={2} title="Meet your crew" />
        <TabRoot page="crew" defaultValue="Douglas Hurley">
          {crew.map(({ name, img, role, bio }) => (
            <TabImageContent img={img} page="crew" title={name} />
          ))}

          <TabList label="Crews" triggers={triggers} type="circles" />

          {crew.map(({ name, role, bio, ...rest }) => (
            <TabTextContent page="crew" title={name} description={bio} role={role} />
          ))}
        </TabRoot>
      </main>
    </div>
  );
};

export default Crew;
