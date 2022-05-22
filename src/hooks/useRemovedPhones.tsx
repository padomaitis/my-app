import { useCallback, useState } from "react";

export default function useRemovedPhonesState() {
  const [removedPhoneIds, setRemovedPhoneIds] = useState<string[]>([]);
  const removePhone = useCallback((id: string) => {
    setRemovedPhoneIds((prev) => [...prev, id]);
  }, []);
  return { removedPhoneIds, removePhone };
}
