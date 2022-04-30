import Earth from "../assets/logos/home-twits/earth";
function Tweets() {
  return (
    <div className=" ">
      <div className="flex">
        <div className="mt-10 font-bold">
          <span className="text-white">Homepage</span>
          <img class="w-11 h-11 mt-5 start rounded-full" src="https://avatars.githubusercontent.com/u/37827216?v=4" alt="mert"></img>
        </div>
        <div className="mt-20">
          <textarea id="message" rows="4" class="block color-white w-full text-xl text-white outline-0 w-96 bg-black  " placeholder="Neler oluyor?"></textarea>
        </div>
      </div>
      <div className="flex mt-[-15%] ml-[18%]">
        <Earth/> <span className="color-white text-blue-400">Herkes Yanıtlayabilir</span>
      </div>

      <div className="grid mt-7 ml-[17%] h-1">
        <hr className="" />
      </div>

      <div className="flex justify-end mt-3">
      <button type="button" class="rounded-[20px] text-white bg-[#1d9bf0] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">Tweet</button>
      </div>
    </div>
  );
}

export default Tweets;
