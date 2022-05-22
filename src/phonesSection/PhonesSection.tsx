import { useMemo, useState } from "react";
import useMarkedPhonesState from "../hooks/useMarkedPhonesState";
import useRemovedPhonesState from "../hooks/useRemovedPhones";
import PhoneComponent, { IPhone } from "../phone/PhoneComponent";
import "./PhonesSection.scss";

export interface PhonesSectionProps {
  phones: IPhone[];
}
export default function PhonesSection({ phones }: PhonesSectionProps) {
  const { markedItems, onToggleItem } = useMarkedPhonesState();
  const { removedPhoneIds, removePhone } = useRemovedPhonesState();
  const [isSortingEnabled, setIsSortingEnabled] = useState(false);
  const itemsToShow = useMemo(() => {
    return isSortingEnabled
      ? [...phones].sort((phone, phone2) =>
          phone2.displayName.localeCompare(phone.displayName)
        )
      : phones;
  }, [isSortingEnabled, phones]);
  return (
    <div className="main-section">
      <button onClick={() => setIsSortingEnabled((enabled) => !enabled)}>
        Sort alphabetically
      </button>
      <div className="phones-container">
        {itemsToShow
          .filter(({ id }) => !removedPhoneIds.includes(id))
          .map((phone) => (
            <PhoneComponent
              phone={phone}
              isMarked={markedItems.includes(phone.id)}
              key={phone.id}
              onHeartIconClick={onToggleItem}
              onDeleteIconClick={removePhone}
            />
          ))}
      </div>
    </div>
  );
}
