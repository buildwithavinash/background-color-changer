import Button from "./components/Button";

const App = () => {
  let buttons = ["red", "green", "yellow", "blue", "purple"];
  return (
    <div className="h-screen flex items-center justify-center flex-col gap-4">
      <div>
        <h1>Background Color Changer</h1>
      </div>

      <div className="flex gap-4">
        {buttons.map((btn) => (
          <Button key={btn} button={btn} />
        ))}
      </div>
    </div>
  );
};

export default App;
