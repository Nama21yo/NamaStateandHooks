import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Mycounter from "./Components/ClassState/Mycounter";
import CounterUsingHooks from "./Components/ClassHook/CounterUsingHooks";
import UseEffectForTitle from "./Components/UseEffectForTitle/UseEffectForTitle";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Mycounter />
      <hr />
      <CounterUsingHooks />
      <hr />
      <UseEffectForTitle />
    </>
  );
}

export default App;
