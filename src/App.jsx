import { useState } from "react";
import "./App.css";
import pepe from "./assets/style.json";
import Button from "./components/button/Button";
import Text from "./components/Text/Text";
import frameworks from "./assets/data.json";

function App() {
  const getRandom = (arr) => {
    const indexRandom = Math.floor(arr.length * Math.random());
    return arr[indexRandom];
  };

  const [imgRandom, setImgRandom] = useState(getRandom(pepe));
  const [frameworkVisible, setFrameworkVisible] = useState(
    getRandom(frameworks)
  );

  const handleClick = () => {
    setImgRandom(getRandom(pepe));
    setFrameworkVisible(getRandom(frameworks));
  };

  console.log(frameworkVisible);
  console.log(imgRandom.color);

  const objStyle = {
    backgroundImage: imgRandom.img,
    color: imgRandom.color,
  };

  return (
    <div className="App" style={objStyle}>
      <Text framewordks={frameworkVisible}></Text>
      <Button handleClick={handleClick}></Button>
    </div>
  );
}

export default App;
