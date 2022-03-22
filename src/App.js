import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import Header from "./components/Header/Header";
import MyLayout from "./components/MyLayout/MyLayout";
import "antd/dist/antd.css";
import MyCarousel from "./components/MyCarousel/MyCarousel";

function App() {
  return (
    <div className="App">
      <MyLayout />
      <MyCarousel />
    </div>
  );
}

export default App;
