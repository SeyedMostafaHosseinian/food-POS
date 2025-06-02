import "./App.css";
import Button from "./components/base/Button";
import Icon from "./components/Icon";
import IconRegistry from "./components/IconRegistry";
import SideNav from "./components/SideNav";

function App() {
  return (
    <main className="w-full h-screen dark:bg-dark-bg-1 bg-light-bg-1">
      <IconRegistry />
      <SideNav />
      <div className="ms-32 p-4">
        <Button className="w-40">order</Button>
        <Button className="w-40 m-2" variant="outline">
          order
        </Button>
        <Button className="m-2 w-52" variant="outline">
          delete
          <Icon id="trash" />
        </Button>
        <Button className="m-2 w-52" variant="fill">
          delete
          <Icon id="trash" />
        </Button>
        <Button className="m-2 w-52" justIcon>
          <Icon id="trash" />
        </Button>
        <Button className="m-2 w-52" variant="outline" justIcon>
          <Icon id="trash" />
        </Button>
        <Button className="m-2 w-52" variant="outline" justIcon>
          <Icon id="plus" />
        </Button>
      </div>
    </main>
  );
}

export default App;
