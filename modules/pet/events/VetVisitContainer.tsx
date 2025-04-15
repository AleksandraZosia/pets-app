import { IItemProps } from "@/components";
import { EventsContainer } from "./EventsContainer";

export const VetVisitsContainer = ({
  secondEventData,
  firstEventData,
}: {
  firstEventData: IItemProps;
  secondEventData: IItemProps;
}) => {
  return (
    <EventsContainer
      firstEventData={firstEventData}
      secondEventData={secondEventData}
      title="Wizyty u weterynarza"
      firstSubTitle="Najbliższa"
      secondSubTitle="Ostatnia"
    />
  );
};
