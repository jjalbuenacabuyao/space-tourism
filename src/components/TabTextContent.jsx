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
    <Content
      key={title}
      value={title}
      className={`text-center lg:text-left ${
        page === "technology" ? "px-6 md:px-24 lg:px-0" : ""
      }`}
    >
      <div
        className={` pb-6 ${
          page === "destination"
            ? "border-b border-b-border md:pb-12"
            : "pb-28 md:pb-6"
        } ${page === "technology" ? "md:pb-28 lg:pb-0" : ""}`}
      >
        {page === "crew" && (
          <h2 className="font-bellefair uppercase md:mb-2 md:text-2xl lg:text-3xl">
            {role}
          </h2>
        )}
        <h2
          className={`mb-1 font-bellefair uppercase md:mb-6 ${
            page === "crew"
              ? "text-2xl md:text-[2.5rem]"
              : "text-5xl md:text-7xl xl:text-[6.5rem]"
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
