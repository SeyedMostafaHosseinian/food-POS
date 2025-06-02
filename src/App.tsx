import "./App.css";
import IconRegistry from "./components/IconRegistry";
import SideNav from "./components/SideNav";

function App() {
  return (
    <main className="w-full h-screen dark:bg-dark-bg-1 bg-light-bg-1">
      <IconRegistry />
      <SideNav />
    </main>
  );
}

export default App;
