import { IItemProps } from "@/components";
import { EventsContainer } from "./EventsContainer";

export const OtherEvents = ({
  secondEventData,
  firstEventData,
}: {
  firstEventData: IItemProps;
  secondEventData: IItemProps;
}) => {
  return (
    <EventsContainer
      title="Inne wydarzenia"
      firstSubTitle=""
      secondSubTitle=""
      secondEventData={secondEventData}
      firstEventData={firstEventData}
    />
  );
};
