import { useState, useEffect } from "react";
import Button from "./components/Button";


const App = () => {
  const [color, setColor] = useState("white")

  let buttons = ["red", "green", "yellow", "blue", "purple"];

   useEffect(()=>{
        document.body.style.backgroundColor = color
    }, [color])


  return (
    <div className="h-screen flex items-center justify-center flex-col gap-4">
      <div>
        <h1>Background Color Changer</h1>
      </div>

      <div className="flex gap-4">
        {buttons.map((btn) => (
          <Button key={btn} button={btn} color={color} setColor={setColor} />
        ))}
      </div>
    </div>
  );
};

export default App;
