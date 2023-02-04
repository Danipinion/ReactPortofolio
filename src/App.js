import { BrowserRouter } from "react-router-dom";
import "./assets/output.css";
import About from "./components/About";
import BackToTopButton from "./components/BackToTopButton";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
function App() {
  return (
    <div className="flex flex-col sm:flex-row">
      <Profile />
      <BrowserRouter>
        <About />
        <Nav />
      </BrowserRouter>
      <BackToTopButton />
    </div>
  );
}

export default App;
