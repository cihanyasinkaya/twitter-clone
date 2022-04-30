import StarLogo from "../../assets/mobile/navMenu/starLogo";

function NavbarMobile() {
  return (
    <div className="lg:invisible sm:visible bg-twitter-nav w-100 fixed" >
      <div className=" flex">
        <img class="justify-start w-9 h-9 mt-5 ml-5 start rounded-full" src="https://avatars.githubusercontent.com/u/37827216?v=4" alt="mert"></img>
        <span className="mt-6 ml-4 text-white font-bold w-[287px]">Anasayfa</span>
        <StarLogo />
      </div>
    </div>
  );
}

export default NavbarMobile;
