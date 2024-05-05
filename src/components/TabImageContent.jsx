import { Content } from "@radix-ui/react-tabs";

const TabImageContent = ({ title, img, page }) => {
  return (
    <Content
      key={title}
      value={title}
      forceMount
      className={`hidden data-[state=active]:block ${
        page === "crew"
          ? "justify-self-end border-b border-b-off-white/25 md:border-none lg:col-start-2 lg:row-end-2"
          : ""
      } ${page === "destination" ? "lg:row-span-2" : ""} ${
        page === "technology" ? "lg:col-span-2 lg:col-start-3 lg:row-start-1" : ""
      }`}
    >
      <picture>
        {page === "technology" && (
          <source
            srcSet={img.portrait}
            media="(min-width:1024px)"
            className="inline-block h-full"
          />
        )}

        <img
          src={page === "technology" ? img.landscape : img}
          alt={`Photo of ${title}`}
          className={`mx-auto ${
            page === "destination"
              ? "aspect-square w-44 md:w-80 xl:w-[28rem]"
              : ""
          } ${
            page === "crew"
              ? "h-56 object-contain md:h-[35.75rem] lg:h-[40rem]"
              : ""
          } ${
            page === "technology"
              ? "h-44 object-cover md:h-80 lg:h-[32.938rem]"
              : ""
          }`}
        />
      </picture>
    </Content>
  );
};

export default TabImageContent;
