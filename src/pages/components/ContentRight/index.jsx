import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContentProductActivity from "./ContentProductActivity";
import ContentViewWidget from "./ContentViewWidget";
import {
  faArrowDown,
  faMagnifyingGlass,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faBell, faMessage } from "@fortawesome/free-regular-svg-icons";

const ContentRight = () => {
  return (
    <div className="content-right-container w-full pl-[16px] lr-[36px]">
      <div className="top-bar-content-right flex justify-between w-full mb-[46px] ">
        <div className="input-search relative">
          <input
            type="text"
            className=" w-[350px] p-[20px] rounded-[10px] bg-[#f7f7f7]"
            placeholder="Search items, collections, and accounts"
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="mr-[15px] text-[#808191] absolute right-[0px] top-[20px]"
          />
        </div>
        <div className="information-right  grid grid-cols-4 max-w-[316px] ">
          <div className="w-[50px] bg-[#e9f2fc] h-[50px] rounded-full border flex justify-center items-center ml-[15px]">
            <FontAwesomeIcon icon={faPlus} className="text-[#2081e2]" />
          </div>
          <div className="w-[50px] h-[50px] rounded-full border flex justify-center items-center ml-[15px] relative">
            <FontAwesomeIcon icon={faBell} />
            <div className="w-[24px] h-[24px] absolute bottom-[30px] left-7 rounded-full bg-[#ff754c] flex items-center justify-center text-white">
              <span>2</span>
            </div>
          </div>
          <div className="w-[50px] h-[50px] rounded-full border flex justify-center items-center ml-[15px]">
            <FontAwesomeIcon icon={faMessage} />
          </div>
          <div className="w-[50px] ml-[30px] h-[50px] rounded-full flex justify-center items-center  relative">
            <img
              src="/verify.png"
              alt=""
              className="absolute w-[25px] h-[25px] bottom-[-10px] right-10"
            />
            <img
              src="/Avatar.png"
              alt=""
              className="bg-[#ffbc99] w-[48px] h-[48px] rounded-full mr-[12px]"
            />
            <FontAwesomeIcon
              icon={faArrowDown}
              className="text-[#808191]"
            />
          </div>
        </div>
      </div>
      <div className="text-[30px] font-[Epilogue,sans] font-bold mb-[40px]">
        Create NFT
      </div>
      <div className="content-create-container grid grid-cols-3 gap-[40px]">
        <ContentProductActivity />
        <ContentViewWidget />
      </div>
    </div>
  );
};

export default ContentRight;
