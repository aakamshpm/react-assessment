import { BiSearch } from "react-icons/bi";
import { IoNotifications, IoAdd } from "react-icons/io5";
import "./header.css";

const Header = () => {
  return (
    <div className="dashboard-header">
      <div className="dashboard-header__left">
        <div className="dashboard-header__search">
          <BiSearch size={20} className="dashboard-header__search-icon" />
          <input
            type="text"
            placeholder="Search"
            className="dashboard-header__search-input"
          />
        </div>
        <button className="dashboard-header__notification">
          <IoNotifications
            size={25}
            className="dashboard-header__notification-icon"
          />
        </button>
      </div>

      <div className="dashboard-header__right">
        <div className="dashboard-header__profile">
          <img src="/images/profile.png" alt="" />
        </div>

        <button className="dashboard-header__add">
          <IoAdd size={25} className="dashboard-header__add-icon" />
        </button>
      </div>
    </div>
  );
};

export default Header;
