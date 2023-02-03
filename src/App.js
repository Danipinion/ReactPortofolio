import { BrowserRouter } from "react-router-dom";
import "./assets/output.css";
import About from "./components/About";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
function App() {
  return (
    <div className="flex">
      <Profile />
      <BrowserRouter>
        <About />
        <Nav />
      </BrowserRouter>
    </div>
  );
}

export default App;
