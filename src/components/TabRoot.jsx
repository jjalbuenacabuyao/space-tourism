import { Root } from "@radix-ui/react-tabs";

const TabRoot = ({ children, defaultValue, page }) => {
  return (
    <Root
      defaultValue={defaultValue}
      className={`flex grid-rows-[1fr_auto] flex-col items-center ${
        page === "technology" ? "px-0" : "px-6 md:px-24"
      } gap-8 ${
        page === "crew" ? "pb-0" : "pb-14 md:pb-16"
      } md:gap-14 lg:grid lg:grid-cols-2`}
    >
      {children}
    </Root>
  );
};

export default TabRoot;
