import { faInternetExplorer } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faHandHoldingDollar, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContentMenuHome = () => {
  return (
    <>
      <div className="content-menu-home grid grid-rows-4 mb-[30px]">
        <div className="content-menu-home-items bg-[#3c50e0] py-[12px] rounded-[12px] pl-[20px] pr[28px] text-white cursor-pointer">
          <FontAwesomeIcon icon={faHouse} className="mr-[10px]" />
          <span className="font-[Urbanist,sans] font-semibold text-[15px]">
            Home
          </span>
        </div>
        <div className="content-menu-home-items cursor-pointer py-[12px] rounded-[12px] pl-[20px] pr[28px] flex text-[#808191]">
          <FontAwesomeIcon icon={faInternetExplorer} className="mr-[10px]" />
          <span className="font-semibold">Explore</span>
        </div>
        <div className="content-menu-home-items cursor-pointer py-[12px] rounded-[12px] pl-[20px] pr[28px] flex text-[#808191]">
        <FontAwesomeIcon icon={faHandHoldingDollar}  className="mr-[10px]"/>
          <span className="font-semibold">Active Bids</span>
        </div>
        <div className="content-menu-home-items cursor-pointer py-[12px] rounded-[12px] pl-[20px] pr[28px] flex text-[#808191]">
        <FontAwesomeIcon icon={faUser} className="mr-[10px]"/>
          <span className="font-semibold">Creators</span>
        </div>
      </div>
    </>
  );
};

export default ContentMenuHome;
