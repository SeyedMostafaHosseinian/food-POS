import { Link, Outlet, useLocation } from "react-router-dom";
import Box from "../../components/base/Box";
import Icon from "../../components/Icon";
import clsx from "clsx";

interface MenuItem {
  title?: string;
  description?: string;
  iconName?: string;
  path?: string;
}

const menuConfig: MenuItem[] = [
  {
    title: "Appereance",
    description: "Dark and Light mode, Font size",
    iconName: "appearance",
    path: "appearance",
  },
  {
    title: "Your Restaurant",
    description: "Foods List and...",
    iconName: "restaurant",
    path: "your-restaurant",
  },
  {
    title: "Products Managements",
    description: "Manage your product, pricing, etc",
    iconName: "discount",
    path: "products-management",
  },
  {
    title: "Notifications",
    description: "Customize your notifications",
    iconName: "notification",
    path: "notifications-setting",
  },
  {
    title: "Security",
    description: "Configure Password, PIN, etc",
    iconName: "security",
    path: "fwfe3",
  },
  {
    title: "Security2",
    description: "Configure Password, PIN, etc",
    iconName: "security",
    path: "efwf",
  },
  {
    title: "About Us",
    description: "Find out more about Posly",
    iconName: "about-us",
    path: "wef",
  },
];

export default function Settings() {
  const location = useLocation();
  return (
    <div className="w-full h-full flex flex-col py-6 pe-6">
      {/* title */}
      <h2 className="text-h1 text-white">Settings</h2>
      {/* boxes */}
      <div className="w-full h-full flex overflow-auto gap-x-6 mt-6">
        <Box className="w-68.75 h-full rounded-lg shrink-0 overflow-auto">
          <div className="w-full h-full flex flex-col overflow-auto">
            {menuConfig.map((menuItem) => {
              const isActive = location.pathname.includes(menuItem?.path || "");
              return (
                <Link key={menuItem.title} to={menuItem?.path || ""}>
                  <li
                    className={clsx(
                      "w-full flex p-6 items-start h-21.75",
                      isActive && "bg-primary/26 relative"
                    )}
                  >
                    <Icon
                      id={menuItem?.iconName || ""}
                      className={clsx(
                        "w-4 h-4 shrink-0",
                        isActive ? "text-primary" : "text-light-text"
                      )}
                    />
                    <div className="w-full flex flex-col justify-start gap-y-1 ms-2 -mt-0.5">
                      <span
                        className={clsx(
                          "text-body-normal-medium ",
                          isActive ? "text-primary" : "text-white"
                        )}
                      >
                        {menuItem?.title}
                      </span>
                      <span className="text-body-small-regular text-light-text">
                        {menuItem?.description}
                      </span>
                      {isActive && (
                        <span className="absolute end-0 top-1/2 transform -translate-y-1/2 w-1 h-12 bg-primary rounded-full"></span>
                      )}
                    </div>
                  </li>
                </Link>
              );
            })}
          </div>
        </Box>
        <Box className="w-full h-full rounded-lg py-6">
          <Outlet></Outlet>
        </Box>
      </div>
    </div>
  );
}
