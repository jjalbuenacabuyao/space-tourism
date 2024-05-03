import { List, Trigger } from "@radix-ui/react-tabs";

const TabList = ({triggers, type, label}) => {
  return (
    <List aria-label={label} className="flex gap-6">
      {triggers.map((trigger) => (
        <Trigger
          key={trigger}
          value={trigger}
          className="box-border border-b-[3px] border-b-transparent pb-2 font-barlow-condensed text-sm uppercase tracking-[2.36px] text-off-white aria-selected:border-b-white aria-selected:text-white md:text-base"
        >
          {trigger}
        </Trigger>
      ))}
    </List>
  );
}

export default TabList