import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home/Home";
import { MonthStatistics } from "./pages/MonthStatistics/MonthStatistics";
import { Popup } from "./components/Popup/Popup";
import "./styles/index.scss";

function App() {
  return (
    <>
    {/* <Popup /> */}
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ms" element={<MonthStatistics />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
