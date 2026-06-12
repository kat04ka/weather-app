import { useState } from 'react';

export function useLocalStorage(
  key,
  initialValue,
) {
  const [value, setValue] = useState(() => {
    try {
      const storedValue =
        localStorage.getItem(key);

      return storedValue
        ? JSON.parse(storedValue)
        : initialValue;
    } catch {
      return initialValue;
    }
  });

  const saveValue = (newValue) => {
    const valueToStore =
      newValue instanceof Function
        ? newValue(value)
        : newValue;

    setValue(valueToStore);

    localStorage.setItem(
      key,
      JSON.stringify(valueToStore),
    );
  };

  return [value, saveValue];
}
