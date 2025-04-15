import { IItemProps } from "@/components";
import { EventsContainer } from "./EventsContainer";

export const ParasiteControlContainer = ({
  secondEventData,
  firstEventData,
}: {
  firstEventData: IItemProps;
  secondEventData: IItemProps;
}) => {
  return (
    <EventsContainer
      title="Szczepienia i odrobaczanie"
      firstSubTitle="Najbliższe"
      secondSubTitle="Ostatnie"
      firstEventData={firstEventData}
      secondEventData={secondEventData}
    />
  );
};
