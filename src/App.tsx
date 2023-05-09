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
          width: 220,
          height: 32,
          x: 100,
          y: 100,
          rotation: 0,
          scale: 1,
        }}
        minSize={{
          width: 220,
          height: 32
        }}>
          <div style={{display: 'flex', width: "100%", height: "100%", alignItems: "stretch", justifyContent: "stretch"}}>
            <input type="text" style={{flexGrow: 1, minWidth: "none"}} />
            <button type="button">확인</button>
          </div>
        </DittoItem>
        <DittoItem defaultTransform={{
          width: 220,
          height: 32,
          x: 100,
          y: 100,
          rotation: 0,
          scale: 1,
        }}
        minSize={{
          width: 220,
          height: 32
        }}>
          <div style={{display: 'flex', width: "100%", height: "100%", alignItems: "stretch", justifyContent: "stretch"}}>
            <input type="text" style={{flexGrow: 1, minWidth: "none"}} />
            <button type="button">확인</button>
          </div>
        </DittoItem>
        <DittoItem defaultTransform={{
          width: 220,
          height: 32,
          x: 100,
          y: 100,
          rotation: 0,
          scale: 1,
        }}
        minSize={{
          width: 220,
          height: 32
        }}>
          <div style={{display: 'flex', width: "100%", height: "100%", alignItems: "stretch", justifyContent: "stretch"}}>
            <input type="text" style={{flexGrow: 1, minWidth: "none"}} />
            <button type="button">확인</button>
          </div>
        </DittoItem>
        <DittoItem defaultTransform={{
          width: 220,
          height: 32,
          x: 100,
          y: 100,
          rotation: 0,
          scale: 1,
        }}
        minSize={{
          width: 220,
          height: 32
        }}>
          <div style={{display: 'flex', width: "100%", height: "100%", alignItems: "stretch", justifyContent: "stretch"}}>
            <input type="text" style={{flexGrow: 1, minWidth: "none"}} />
            <button type="button">확인</button>
          </div>
        </DittoItem>
        <DittoItem defaultTransform={{
          width: 220,
          height: 32,
          x: 100,
          y: 100,
          rotation: 0,
          scale: 1,
        }}
        minSize={{
          width: 220,
          height: 32
        }}>
          <div style={{display: 'flex', width: "100%", height: "100%", alignItems: "stretch", justifyContent: "stretch"}}>
            <input type="text" style={{flexGrow: 1, minWidth: "none"}} />
            <button type="button">확인</button>
          </div>
        </DittoItem>
        <DittoItem defaultTransform={{
          width: 220,
          height: 32,
          x: 100,
          y: 100,
          rotation: 0,
          scale: 1,
        }}
        minSize={{
          width: 220,
          height: 32
        }}>
          <div style={{display: 'flex', width: "100%", height: "100%", alignItems: "stretch", justifyContent: "stretch"}}>
            <input type="text" style={{flexGrow: 1, minWidth: "none"}} />
            <button type="button">확인</button>
          </div>
        </DittoItem>
      </DittoCanvas>
    </>
  );
}

export default App;
