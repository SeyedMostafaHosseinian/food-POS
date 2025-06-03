import "./App.css";
import Button from "./components/base/Button";
import Input from "./components/base/Input";
import Select from "./components/base/Select";
import Icon from "./components/Icon";
import IconRegistry from "./components/IconRegistry";
import SideNav from "./components/SideNav";

function App() {
  return (
    <main className="w-full h-full overflow-auto dark:bg-dark-bg-1 bg-light-bg-1">
      <IconRegistry />
      <SideNav />
      <div className="ms-32 p-4 flex flex-col gap-y-2">
        <Button disabled className="w-40">
          order
        </Button>
        <Button className="w-40 m-2" variant="outline">
          order
        </Button>
        <Button disabled className="m-2 w-52" variant="outline">
          delete
          <Icon id="trash" />
        </Button>
        <Button className="m-2 w-52" variant="fill">
          delete
          <Icon id="trash" />
        </Button>
        <Button disabled className="m-2 w-52" justIcon>
          <Icon id="trash" />
        </Button>
        <Button className="m-2 w-52" variant="outline" justIcon>
          <Icon id="trash" />
        </Button>
        <Button className="m-2 w-52" variant="outline" justIcon>
          <Icon id="plus" />
        </Button>
        <Input disabled className="w-60" type="text" />
        <Input className="w-60" type="text" iconName="search" />
        <Input className="w-60" type="text" iconName="search" />
        <Input className="w-60" type="text" iconName="search" />
        <Input className="w-60" type="text" iconName="search" />
        <Input className="w-60" type="text" iconName="search" />
        <Input className="w-60" type="text" iconName="search" />
        <Input className="w-60" type="text" iconName="search" />
        <Input className="w-60" type="text" iconName="search" />
        <Input className="w-60" type="text" iconName="search" />
        <Input className="w-60" type="text" iconName="search" />
        <Input className="w-60" type="text" iconName="search" />
        <Input className="w-60" type="text" iconName="search" />
        <Input className="w-60" type="text" iconName="wallet" />
        <Select
          className="w-40"
          placeholder="select"
          name="test-select"
          options={[
            { label: "value-1", value: "value1" },
            { label: "value-2", value: "valslfdf" },
          ]}
        />
        <Select
          className="w-40"
          placeholder="select"
          name="test-select"
          options={[
            { label: "value-1", value: "value1" },
            { label: "value-2", value: "valslfdf" },
          ]}
        />{" "}
        <Select
          className="w-40"
          placeholder="select"
          name="test-select"
          options={[
            { label: "value-1", value: "value1" },
            { label: "value-2", value: "valslfdf" },
          ]}
        />{" "}
        <Select
          className="w-40"
          placeholder="select"
          name="test-select"
          options={[
            { label: "value-1", value: "value1" },
            { label: "value-2", value: "valslfdf" },
            { label: "value-2", value: "valslfdf543" },
            { label: "value-2", value: "valslfdf" },
            { label: "value-2", value: "valslfd4324f" },
            { label: "value-2", value: "valsl664fdf" },
          ]}
        />
      </div>
    </main>
  );
}

export default App;
