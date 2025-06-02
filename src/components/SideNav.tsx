import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import Icon from "./Icon";
import LogOut from "./LogOut";

interface MenuConfigItem {
  iconId: string;
  link: string;
}

const menuConfig: MenuConfigItem[] = [
  {
    iconId: "home",
    link: "",
  },
  {
    iconId: "discount",
    link: "discounted-products",
  },
  {
    iconId: "dashboard",
    link: "dashboard",
  },
  {
    iconId: "message",
    link: "messages",
  },
  {
    iconId: "notification",
    link: "notifications",
  },
  {
    iconId: "setting",
    link: "settings",
  },
];

export default function SideNav() {
  const location = useLocation();
  const currentPage = location.pathname;
  return (
    <nav className="fixed top-0 bottom-0 start-0 bg-dark-bg-2 py-6 flex flex-col justify-between rounded-tr-xl rounded-br-xl">
      <div>
        <div className="w-full px-6">
          <div className="w-14 h-14">
            <Logo />
          </div>
        </div>
        <ul className="w-full flex flex-col gap-y-5.5 mt-12 ps-3">
          {menuConfig.map((mc) => {
            const isActive = currentPage == "/" + mc.link;
            return (
              <li
                className={` rounded-2xl rounded-tr-none rounded-br-none relative flex w-full p-3 ${
                  isActive ? "bg-dark-bg-1" : ""
                }`}
                key={mc.iconId}
              >
                {isActive && <EdgeRectangles />}
                <Link
                  className={`w-14 h-14 flex items-center justify-center rounded-xl ${
                    isActive ? "bg-primary shadow-custom-1" : ""
                  }`}
                  to={mc.link}
                >
                  <Icon
                    id={mc.iconId}
                    className={`w-6 h-6 ${
                      isActive ? "text-white" : "text-primary"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="w-full p-6 pt-0">
        <LogOut />
      </div>
    </nav>
  );
}

function EdgeRectangles() {
  return (
    <>
      <svg
        className="absolute -top-3 -right-[1px] text-dark-bg-1"
        width="13"
        height="12"
        viewBox="0 0 13 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.5 8C12.5 4 12 0 12 0V12H0C0 12 4.5 12 8.5 8Z"
          fill="currentColor"
        />
      </svg>

      <svg
        className="absolute -bottom-3 right-0 text-dark-bg-1"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.00977 3.51001C4.00977 -0.48999 0.00976563 0.0100098 0.00976563 0.0100098H12.0098V12.01C12.0098 12.01 12.0098 7.51001 8.00977 3.51001Z"
          fill="currentColor"
        />
      </svg>
    </>
  );
}
