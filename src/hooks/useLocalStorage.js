import { useState, useEffect } from 'react';

export default function useLocalStorage(itemName, initialValue) {
  const [value, setValue] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setValue(parsedItem);
      } catch (error) {
        console.log(error);
        setError(error);
      }

      setLoading(false);
    }, 1500);
  }, [initialValue, itemName]);

  const saveItem = (newTodos) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newTodos));
      setValue(newTodos);
    } catch (error) {
      setError(error);
    }
  };

  return { value, saveItem, loading, error };
}
