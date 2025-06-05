import { Outlet } from "react-router-dom";
import "./App.css";
import IconRegistry from "./components/IconRegistry";
import SideNav from "./components/SideNav";

function App() {
  return (
    <main className="w-full h-full dark:bg-dark-bg-1 bg-light-bg-1">
      <IconRegistry />
      <div className="w-full h-full flex items-start justify-start">
        <SideNav />
        <div className="ps-6 overflow-auto h-full w-full">
          <Outlet></Outlet>
        </div>
      </div>
    </main>
  );
}

export default App;
