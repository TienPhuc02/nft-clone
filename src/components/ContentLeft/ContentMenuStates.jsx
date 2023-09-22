import { faBook, faRankingStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContentMenuStates = () => {
  return (
    <>
      <div className="content-menu-states grid grid-rows-4  mb-[30px]">
        <div className="title-states text-[#808191] font-normal cursor-pointer px-[22px]">
          <span>States</span>
        </div>
        <div className=" cursor-pointer content-menu-home-items py-[12px] rounded-[12px] pl-[20px] pr[28px] flex text-[#808191]">
          <FontAwesomeIcon icon={faRankingStar} className="mr-[10px]" />
          <span className="font-semibold">Rankings</span>
        </div>
        <div className="content-menu-home-items cursor-pointer py-[12px] rounded-[12px] pl-[20px] pr[28px] flex text-[#808191]">
        <FontAwesomeIcon icon={faBook}className="mr-[10px]"  />
          <span className="font-semibold">Activity</span>
        </div>
      </div>
    </>
  );
};

export default ContentMenuStates;
