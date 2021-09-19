import "./Header.scss";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";

import HeaderOption from "./HeaderOption";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { getAuth, signOut } from "@firebase/auth";

function Header() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const logoutUser = () => {
    dispatch(logout());
    const auth = getAuth();
    signOut(auth).then(() => {
      console.log("loggedout");
    });
  };
  return (
    <div className="mainHeader">
      <div className="header__left">
        <img
          src="https://www.vectorlogo.zone/logos/linkedin/linkedin-tile.svg"
          alt="logo"
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption
          avatar={user?.photoUrl || "https://e7.pngegg.com/pngimages/340/946/png-clipart-avatar-user-computer-icons-software-developer-avatar-child-face-thumbnail.png"}
          title="me"
          onClick={logoutUser}
        />
      </div>
    </div>
  );
}

export default Header;
