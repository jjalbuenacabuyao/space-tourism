import { Content } from "@radix-ui/react-tabs";

const TabImageContent = ({ title, img, page }) => {
  return (
    <Content
      key={title}
      value={title}
      forceMount
      className={`hidden data-[state=active]:block lg:row-span-2 ${
        page === "crew"
          ? "border-b border-b-off-white/25 lg:col-start-2 lg:row-end-2 md:border-none justify-self-end"
          : ""
      }`}
    >
      <img
        src={img}
        alt={`Photo of ${title}`}
        className={`mx-auto ${
          page === "destination"
            ? "aspect-square w-44 md:w-80 xl:w-[28rem]"
            : ""
        } ${page === "crew" ? "h-56 md:h-[35.75rem] object-contain lg:h-[40rem]" : ""}`}
      />
    </Content>
  );
};

export default TabImageContent;
