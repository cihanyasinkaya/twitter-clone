import CommentLogo from "../assets/logos/home-twits/comment-icon";
import Retweet from "../assets/logos/home-twits/retweet";
import ShareIcon from "../assets/logos/home-twits/share-icon";
function TweetsArea() {
  return (
    <div className=" ">
      <div className="flex">
        <div className="font-bold flex">
          <img class="w-11 h-11 mt-5 start rounded-full" src="https://avatars.githubusercontent.com/u/3661868?v=4" alt="yasin"></img>
          <h1 className="text-white mt-6 ml-3">Cihan Yasin Kaya</h1>
          <h2 className="text-white mt-6 ml-2 font-bold text-md text-gray-500">@yasin</h2>
          <h1 className="text-white mt-6 ml-2 font-thin text-md text-gray-500">.35d</h1>

        </div>
      </div>
      <div className="text-white  ml-16">
        <p>
          NASA’nın Mars gezegenindeki helikopteri Ingenuity, bir diğer uzay aracı Perseverance’ın bıraktığı enkazın 19 Nisan’da fotoğraflarını çekti.
        </p>
        <img className="mt-6 rounded-lg" src="https://pbs.twimg.com/media/FRlemFuWQAEjf3h?format=jpg&name=900x900" alt="" />
      </div>

      <div className="flex">
        <div className="ml-14 mt-3 text-white flex">
          <CommentLogo /> <span className="mt-[6px]">1</span>
        </div>
        <div className="ml-[159px] mt-3 text-white flex">
          <Retweet /> <span className="mt-[6px]">26</span>
        </div>
        <div className="ml-[121px] mt-3 text-white flex">
          <ShareIcon /> <span className="mt-[6px]">1</span>
        </div>
      </div>


      <div className="flex mt-[-15%] ml-[18%]">

      </div>

      <div className="grid mt-7 ml-[17%] h-1">

      </div>

      <div className="flex justify-end mt-3">

      </div>
    </div>
  );
}

export default TweetsArea;
