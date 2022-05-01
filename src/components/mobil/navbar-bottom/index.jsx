
import HomeLogo from "../../assets/mobile/navMenuBottom/HomeLogo";
import SearchLogo from "../../assets/mobile/navMenuBottom/searchLogo";
import UsersLogo from "../../assets/mobile/navMenuBottom/usersLogo";
import NotificationLogo from "../../assets/mobile/navMenuBottom/notificationLogo";
import MessagesLogo from "../../assets/mobile/navMenuBottom/messagesLogo";

function NavbarMobileBottom() {
  return (
    <div className="lg:invisible sm:visible bg-black w-[100%] fixed overflow-hidden  bottom-0 " >
      <div className=" flex">
        <HomeLogo/>
        <SearchLogo/>
        <UsersLogo/>
        <NotificationLogo/>
        <MessagesLogo/>
      </div>
    </div>
  );
}

export default NavbarMobileBottom;
