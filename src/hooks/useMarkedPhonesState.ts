import { useCallback, useEffect, useState } from "react";
const STORAGE_KEY = "markedPhones";

export default function useMarkedPhonesState() {
  const [markedItems, setMarketItems] = useState(getFromStorage);
  const onToggleItem = useCallback((id: string) => {
    const newStorageValue = toggleItem(id);
    setMarketItems(newStorageValue);
  }, []);
  return { markedItems, onToggleItem };
}

function toggleItem(id: string) {
  let storageValue = getFromStorage();
  if (storageValue.indexOf(id) > -1) {
    storageValue = storageValue.filter((markedId) => markedId !== id);
  } else {
    storageValue = [...storageValue, id];
  }
  setToStorage(storageValue);
  return storageValue;
}

function getFromStorage(): string[] {
  const valueFromStorage = localStorage.getItem(STORAGE_KEY);
  return valueFromStorage ? JSON.parse(valueFromStorage) : [];
}

function setToStorage(value: string[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
}
