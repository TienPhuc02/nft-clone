import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCropSimple } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContentViewWidget = () => {
  return (
    <div>
      <div className="content-view-widget col-span-1 p-[16px] bg-[#fcfcfc]  mb-[24px]">
        <div className="widget-title flex justify-between mb-[24px]">
          <span className="font-[Epilogue,sans] font-bold  ">Item Preview</span>
          <div className="icon-widget-title text-[#8f909e]">
            <FontAwesomeIcon icon={faCropSimple} />
          </div>
        </div>
        <div className="image-view-widget mb-[16px]">
          <img src="/Image.png" alt="" className="rounded-[12px]" />
        </div>
        <div className="author-view-widget">
          <div className="author-header-view-widget flex justify-between mb-[10px]">
            <span className="font-[Epilogue,sans] font-bold ">
              Abstract Cube #2000
            </span>
            <div className="interact text-[#8f909e] ">
              <FontAwesomeIcon icon={faHeart} className="mr-[4px]" />
              <span className="text-[#8f909e] font-[Urbanist,sans] font-medium">
                232
              </span>
            </div>
          </div>
          <div className="author-eth mb-[20px]">
            <FontAwesomeIcon
              icon={faEthereum}
              className="text-[#3c50e0] mr-[10px] bg-[#d8dcf9] w-[20px] h-[20px] rounded-full"
            />
            <span>
              <span className="text-[#1b1d21] font-semibold">27.5 ETH</span>
              <span className="text-[#9f9fab]"> 1/1</span>
            </span>
          </div>
          <div className="author-avatar flex items-center mb-[24px]">
            <img
              src="/Avatar.png"
              alt=""
              className="bg-[#ffbc99] w-[32px] h-[32px] rounded-full mr-[12px]"
            />
            <div className="by-author flex items-center">
              <span className=" text-[#8f909e] mr-[4px]">by</span>
              <span className="text-[#1a1d1f] font-medium">Jubed Ahmed</span>
            </div>
          </div>
          <div className="button-buy-now">
            <button className="bg-[#d8dcf9] text-[#3c50e0] py-[12px] px-[130px] max-w-[324px] rounded-[10px] text-[15px] font-semibold">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentViewWidget;
