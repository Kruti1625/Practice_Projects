import { useEffect, useState } from "react";

const useLocalStorage = (key, initValue) => {
  const [state, setState] = useState(
    JSON.parse(localStorage.getItem(key)) || initValue
  );

  const plusHandler = () => {
    setState((prevState) => prevState + 1);
  };

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, plusHandler];
};
export default useLocalStorage;
