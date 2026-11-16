import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  // Lazy initializer: baca localStorage sekali saja saat komponen pertama kali muncul
  const [value, setValue] = useState<T>(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved ? (JSON.parse(saved) as T) : initialValue;
    } catch {
      return initialValue;
    }
  });

  // Setiap kali value berubah, simpan ke localStorage
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}
