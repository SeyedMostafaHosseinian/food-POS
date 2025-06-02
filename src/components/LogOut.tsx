import Icon from "./Icon";

export default function LogOut() {
  return (
    <button className="w-14 h-14 flex items-center justify-center cursor-pointer">
      <Icon id="logout" className="w-6 h-6 text-primary" />
    </button>
  );
}
