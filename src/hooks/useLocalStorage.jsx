import React, { useEffect, useState } from "react";

export const useLocalStorage = (key, defValue) => {

  const getLocalStorage = () => {
    let storageJSONvalue = localStorage.getItem(key);
    
    if (storageJSONvalue != null) {
      // console.log("key on page refresh: ,", key);
      return JSON.parse(storageJSONvalue);
    }

    if (typeof defValue === "function") {
      return defValue();
    } else {
      return defValue;
    }
  }

  const [value, setValue] = useState(getLocalStorage);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}