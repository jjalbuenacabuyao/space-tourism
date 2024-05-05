import React from "react";
import {
  Header,
  NumberedHeading,
  TabImageContent,
  TabList,
  TabRoot,
  TabTextContent,
} from "../components";

const Technology = () => {
  const technologies = [
    {
      name: "Launch Vehicle",
      img: {
        portrait: "/images/technology/image-launch-vehicle-portrait.jpg",
        landscape: "/images/technology/image-launch-vehicle-landscape.jpg",
      },
      description:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    },
    {
      name: "Spaceport",
      img: {
        portrait: "/images/technology/image-spaceport-portrait.jpg",
        landscape: "/images/technology/image-spaceport-landscape.jpg",
      },
      description:
        "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch.",
    },
    {
      name: "Space Capsule",
      img: {
        portrait: "/images/technology/image-space-capsule-portrait.jpg",
        landscape: "/images/technology/image-space-capsule-landscape.jpg",
      },
      description:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    },
  ];

  const triggers = ["Launch Vehicle", "Spaceport", "Space Capsule"];

  return (
    <div className="min-h-screen bg-tech-mobile bg-cover bg-no-repeat md:bg-tech-tablet lg:bg-tech-desktop">
      <Header />
      <main className="mx-auto max-w-screen-xl">
        <NumberedHeading index={3} title="SPACE LAUNCH 101" />
        <TabRoot page="technology" defaultValue="Launch Vehicle">
          {technologies.map(({ name, img, description }) => (
            <TabImageContent page="technology" img={img} title={name} />
          ))}

          <TabList triggers={triggers} label="Technologies" type="numbered" />

          {technologies.map(({ name, description, ...rest }) => (
            <TabTextContent
              title={name}
              description={description}
              key={name}
              page="technology"
            />
          ))}
        </TabRoot>
      </main>
    </div>
  );
};

export default Technology;
