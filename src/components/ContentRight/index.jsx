import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
const ContentRight = () => {
  return (
    <div className="content-right-container w-full pl-[16px] lr-[36px]">
      <div className="top-bar-content-right flex justify-between w-full ">
        <div className="input-search relative">
          <input
            type="text"
            className=" w-[350px] p-[20px] rounded-[10px] bg-[#f7f7f7]"
            placeholder="Search items, collections, and accounts"
          />
          <img
            src="/searchicons.png"
            alt=""
            className="mr-[15px] absolute right-[0px] top-[20px]"
          />
        </div>
        <div className="information-right grid grid-cols-4 max-w-[316px]">
          <div className="w-[50px] bg-[#e9f2fc] h-[50px] rounded-full border flex justify-center items-center ml-[15px]">
            <img src="/add.png" alt="" />
          </div>
          <div className="w-[50px] h-[50px] rounded-full border flex justify-center items-center ml-[15px] relative">
            <img src="/notification.png" alt="" />
            <div className="w-[24px] h-[24px] absolute bottom-[30px] left-7 rounded-full bg-[#ff754c] text-center text-white">
              <span>2</span>
            </div>
          </div>
          <div className="w-[50px] h-[50px] rounded-full border flex justify-center items-center ml-[15px]">
            <img src="/send.png" alt="" />
          </div>
          <div className="w-[50px] h-[50px] rounded-full flex justify-center items-center ml-[15px]">
            <img src="/avatar.png" alt="" />
          </div>
        </div>
        <FontAwesomeIcon icon={faBook} className="text-gray-500"/>
      </div>
    </div>
  );
};

export default ContentRight;
