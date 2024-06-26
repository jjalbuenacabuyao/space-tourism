import { List, Trigger } from "@radix-ui/react-tabs";

const TabList = ({ triggers, type, label }) => {
  return (
    <List
      aria-label={label}
      className={`flex ${
        type === "circles" ? "gap-4 pb-12 lg:row-start-1" : "gap-6"
      } ${
        type === "numbered"
          ? "px-6 md:px-24 lg:col-start-1 lg:flex-col lg:items-start lg:justify-between lg:gap-8 lg:pr-0"
          : ""
      }`}
    >
      {triggers.map((trigger, index) => (
        <Trigger
          key={trigger}
          value={trigger}
          className={`${
            type === "numbered"
              ? "flex aspect-square w-10 items-center justify-center rounded-full border border-white/25 font-bellefair leading-none text-white aria-selected:border-white aria-selected:bg-white aria-selected:text-clr-dark md:w-16 md:text-2xl lg:w-20 lg:text-4xl"
              : ""
          } ${
            type === "circles"
              ? "aspect-square w-[0.625rem] rounded-full bg-off-white aria-selected:bg-white"
              : ""
          } ${
            type === "text"
              ? "box-border border-b-[3px] border-b-transparent pb-2 font-barlow-condensed text-sm uppercase tracking-[2.36px] text-off-white aria-selected:border-b-white aria-selected:text-white md:text-base"
              : ""
          }`}
        >
          {type === "numbered" && <span>{index + 1}</span>}
          <span
            className={`${
              type === "circles" || type === "numbered" ? "hidden" : ""
            }`}
          >
            {trigger}
          </span>
        </Trigger>
      ))}
    </List>
  );
};

export default TabList;
