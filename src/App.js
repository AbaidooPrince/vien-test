import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Dashboard from "./views/Dashboard";

function App() {
  return (
    <div className="App h-screen max-w-screen-xl">
      <Header />
      <div className="mt-7 container md:mx-auto">
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
    </div>
    </div>
  );
}

export default App;

