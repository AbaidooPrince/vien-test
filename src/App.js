import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Dashboard from "./views/Dashboard";

function App() {
  return (
    <div className="App h-full">
      <Header />
      <div className="mt-7 px-4 lg:px-8 md:px-4">
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
    <div className="mt-7">
    <Footer />
    </div>
    </div>
    </div>
  );
}

export default App;

