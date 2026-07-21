import "./styles/global.css";
import "./styles/layout.css";

import Sidebar from "./components/Sidebar/Sidebar";
import Toolbar from "./components/Toolbar/Toolbar";
import ScoreCanvas from "./components/Canvas/ScoreCanvas";

export default function App() {
  return (
    <div className="container">
      <Toolbar />
      <div className="main">
        <Sidebar />
        <ScoreCanvas />
      </div>
    </div>
  );
}