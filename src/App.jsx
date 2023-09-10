import { createContext, useState } from "react";
import Header from "./components/Header";
import ResultList from "./components/ResultList";

//Create context

export const InputContext = createContext();

export default function App() {
  const [inputValue, setInputValue] = useState("");
  console.log(inputValue);
  const value = {
    inputValue,
    setInputValue,
  };
  return (
    <>
      <InputContext.Provider value={value}>
        <Header />
        <ResultList/>
      </InputContext.Provider>
    </>
  );
}
