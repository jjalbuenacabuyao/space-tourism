import { Content } from "@radix-ui/react-tabs";

const TabTextContent = ({
  page,
  title,
  description,
  distance,
  travelTime,
  role,
}) => {
  return (
    <Content key={title} value={title} className="text-center lg:text-left">
      <div className={` pb-6 md:pb-12 ${page !== "crew" ? "border-b border-b-border" : "pb-28"}`}>
        {page === "crew" && <h2 className="font-bellefair uppercase">{role}</h2>}
        <h2
          className={`mb-1 font-bellefair uppercase md:mb-6 md:text-7xl xl:text-[6.5rem] ${
            page === "crew" ? "text-2xl" : "text-5xl"
          }`}
        >
          {title}
        </h2>
        <p className="xl:text-lg">{description}</p>
      </div>

      {page === "destination" && (
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
      )}
    </Content>
  );
};

export default TabTextContent;
