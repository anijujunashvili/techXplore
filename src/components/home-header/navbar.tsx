import { NavLink, NavLinkRenderProps } from "react-router-dom";
import { House } from "lucide-react";
import { APP_PATHS } from "@/routes/enum";

const HomeNavbar = () => {
  const ActiveMenu = (props: NavLinkRenderProps) => {
    const { isActive } = props;
    return isActive
      ? "text-primary hover:text-primary transition"
      : "hover:text-primary transition";
  };
  return (
    <>
      <ul className="flex flex-row space-x-6 text-white font-primaryMedium">
        <li>
          <NavLink to={APP_PATHS.HOME} className={ActiveMenu}>
            <div className="flex flex-row gap-1">
              <House />
              <span className="">მთავარი</span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to={APP_PATHS.PARTICIPATION} className={ActiveMenu}>
            მოითხოვე თანადაფინანსება
          </NavLink>
        </li>
        <li>
          <NavLink to={APP_PATHS.REQUESTS} className={ActiveMenu}>
            <div className="flex flex-row items-center justify-center gap-2">
              <div>მოთხოვნები</div>
              <div className="flex justify-center items-center bg-destructive text-white w-[20px] h-[20px]  text-xs rounded-full ">
                3
              </div>
            </div>
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default HomeNavbar;
