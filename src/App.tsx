import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { DittoCanvas } from "./features/DittoCanvas";
import { DittoItem } from "./features/DittoItem";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <DittoCanvas>
        <DittoItem defaultTransform={{
          width: 100,
          height: 100,
          x: 100,
          y: 100,
          rotation: 0,
          scale: 1,
        }}>DittoCanvas</DittoItem>
      </DittoCanvas>
    </>
  );
}

export default App;
