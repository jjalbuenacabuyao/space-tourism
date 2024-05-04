import { Content } from "@radix-ui/react-tabs";

const TabImageContent = ({ title, img, page }) => {
  return (
    <Content
      key={title}
      value={title}
      forceMount
      className={`hidden data-[state=active]:block lg:row-span-2 ${page === "crew" ? "border-b border-b-off-white/25" : ""}`}
    >
      <img
        src={img}
        alt={`Photo of ${title}`}
        className={`mx-auto ${
          page === "destination" ? "aspect-square w-44 md:w-80 xl:w-[28rem]" : ""
        } ${page === "crew" ? "h-56" : ""}`}
      />
    </Content>
  );
};

export default TabImageContent;
