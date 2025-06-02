import "./App.css";
import Icon from "./components/Icon";
import IconRegistry from "./components/IconRegistry";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { toggleTheme } = useTheme();
  return (
    <main className="w-full h-screen dark:bg-dark-bg-1 bg-light-bg-1">
      <IconRegistry />
      <div className="p-4 flex flex-col gap-y-2 items-start">
        <div className="font-bold text-h1 text-primary">Hot Dishes</div>
        <div className="font-bold text-h2 text-secondary">Hot Dishes</div>
        <div className="font-bold text-body-large-regular text-accent-green">
          Hot Dishes
        </div>
        <div className="font-bold text-body-large-medium text-accent-orange">
          Hot Dishes
        </div>
        <div className="font-bold text-body-large-semibold text-accent-red">
          Hot Dishes
        </div>
        <div className="font-bold text-body-normal-medium text-dark-text">
          Hot Dishes
        </div>
        <div className="font-bold text-body-normal-regular">Hot Dishes</div>
        <div className="font-bold text-body-normal-semibold">Hot Dishes</div>
        <div className="font-bold text-body-small-medium">Hot Dishes</div>
        <div className="font-bold text-body-small-regular">Hot Dishes</div>
        <div className="font-bold text-button-normal-semibold">Hot Dishes</div>
        <div className="font-bold text-button-small-semibold">Hot Dishes</div>
        <button className="flex items-center justify-center bg-primary py-2.5 px-10 rounded-lg text-white cursor-pointer text-button-normal-semibold">
          buy pizza
          <Icon id="setting" className="fill-white w-6 h-6" />
        </button>
        <button className="flex items-center justify-center bg-secondary py-2.5 px-10 rounded-lg text-white cursor-pointer text-button-normal-semibold">
          buy pizza
          <Icon id="setting" className="fill-white w-6 h-6" />
        </button>
        <button className="flex items-center justify-center bg-accent-blue py-2.5 px-10 rounded-lg text-white cursor-pointer text-button-normal-semibold">
          buy pizza
          <Icon id="setting" className="fill-white w-6 h-6" />
        </button>
        <button className="flex items-center justify-center bg-accent-green py-2.5 px-10 rounded-lg text-white cursor-pointer text-button-normal-semibold">
          buy pizza
          <Icon id="setting" className="fill-white w-6 h-6" />
        </button>
        <button
          onClick={toggleTheme}
          className="flex items-center justify-center bg-accent-orange py-2.5 px-10 rounded-lg text-white cursor-pointer text-button-normal-semibold"
        >
          buy pizza
          <Icon id="setting" className="fill-white w-6 h-6" />
        </button>
      </div>
    </main>
  );
}

export default App;
