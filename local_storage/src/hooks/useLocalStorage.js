import { useEffect, useState } from "react";

const useLocalStorage = (initValue) => {
  const [state, setState] = useState(
    JSON.parse(localStorage.getItem("value")) || initValue
  );

  const plusHandler = () => {
    setState((prevState) => prevState + 1);
  };

  useEffect(() => {
    localStorage.setItem("value", JSON.stringify(state));
  }, [state]);

  return {
    plusHandler,
    state,
  };
};
export default useLocalStorage;
