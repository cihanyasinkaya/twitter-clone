import CommentLogo from "../../assets/logos/home-twits/comment-icon";
import Retweet from "../../assets/logos/home-twits/retweet";
import ShareIcon from "../../assets/logos/home-twits/share-icon";

function TweetsMobile() {
    return (
        <div className="lg:hidden sm:block w-100 mt-[18%] ml-[2%]" >
            <div className=" flex">
                <img class="justify-start w-11 h-11 mt-5 ml-5 start rounded-full" src="https://pbs.twimg.com/profile_images/1503591435324563456/foUrqiEw_400x400.jpg" alt="mert"></img>
                <span className="mt-7 ml-4 text-white font-bold w-[287px]">Elon Musk</span>

            </div>
            <p className="text-white ml-20 mr-1 font-extralight">
                Business News›Magazines›Panache›Bill Gates warns world is 'entering the worst part of pandemic', says his close friends have Omicron; shares prevention steps
            </p>
            <img className="mt-6 ml-[20%] rounded-lg w-[300px] h-[200px] " src="https://img.etimg.com/thumb/msid-88517947,width-1200,height-900,imgsize-32086,overlay-etpanache/photo.jpg" alt="" />

            <div className="flex">
                <div className="ml-[79px] mt-3 text-white flex">
                    <CommentLogo /> <span className="mt-[6px]">1</span>
                </div>
                <div className="ml-[74px] mt-3 text-white flex">
                    <Retweet /> <span className="mt-[6px]">26</span>
                </div>
                <div className="ml-[50px] mt-3 text-white flex">
                    <ShareIcon /> <span className="mt-[6px]">1</span>
                </div>
            </div>

        </div>
    );
}

export default TweetsMobile;
