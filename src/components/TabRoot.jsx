import { Root } from "@radix-ui/react-tabs";

const TabRoot = ({ children, defaultValue, page }) => {
  return (
    <Root
      defaultValue={defaultValue}
      className={`flex flex-col items-center ${
        page === "technology"
          ? "px-0 pb-0 lg:grid lg:grid-cols-[auto_auto_auto_auto] lg:items-center lg:gap-x-20 lg:gap-y-0 lg:pb-24"
          : "px-6 md:px-24"
      } gap-8 ${
        page === "crew"
          ? "pb-0 md:flex-col-reverse lg:grid lg:grid-cols-2 lg:grid-rows-[auto_auto] lg:gap-0"
          : ""
      } ${
        page === "destination"
          ? "grid-rows-[1fr_auto] pb-14 md:gap-14 md:pb-16 lg:grid lg:grid-cols-2"
          : ""
      }`}
    >
      {children}
    </Root>
  );
};

export default TabRoot;
